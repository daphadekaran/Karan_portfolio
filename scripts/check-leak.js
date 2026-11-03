const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.log('[check-leak] /out directory does not exist yet. Skipping post-build leak check.');
  process.exit(0);
}

// Indian 10-digit mobile pattern with optional +91 or leading 0
const phoneRegexes = [
  /(?:\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}\b/g,
  /\b[6-9]\d{9}\b/g
];

let leaksFound = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip internal compiled JS chunks since minified hashes produce false 10-digit integers
      if (entry.name === 'chunks' || entry.name === '_next') {
        continue;
      }
      scanDir(fullPath);
    } else if (entry.isFile() && /\.(html|json|txt|xml)$/i.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const regex of phoneRegexes) {
        const matches = content.match(regex);
        if (matches) {
          const validLeaks = matches.filter(m => {
            const digits = m.replace(/\D/g, '');
            return digits.length === 10 || (digits.length === 12 && digits.startsWith('91'));
          });
          if (validLeaks.length > 0) {
            console.error(`[LEAK DETECTED] Potential phone number in ${path.relative(outDir, fullPath)}:`, validLeaks);
            leaksFound += validLeaks.length;
          }
        }
      }
    }
  }
}

scanDir(outDir);

if (leaksFound > 0) {
  console.error(`[check-leak] FAILED: ${leaksFound} potential phone number leaks found in /out!`);
  process.exit(1);
} else {
  console.log('[check-leak] PASSED: No phone numbers or private contact leaks found in build output.');
  process.exit(0);
}
