export interface EatmitOrder {
  id: string;
  table: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: "new" | "preparing" | "ready";
  timestamp: string;
  elapsedSeconds: number;
  channel?: "Dine-in" | "Zomato" | "Swiggy";
}

export interface EatmitTable {
  id: string;
  number: number;
  capacity: number;
  status: "available" | "occupied" | "merged";
  mergedWith?: string;
  assignedWaiter?: string;
}

export const INITIAL_EATMIT_TABLES: EatmitTable[] = [
  { id: "T1", number: 1, capacity: 2, status: "occupied", assignedWaiter: "Rahul" },
  { id: "T2", number: 2, capacity: 4, status: "available", assignedWaiter: "Aniket" },
  { id: "T3", number: 3, capacity: 4, status: "occupied", assignedWaiter: "Rahul" },
  { id: "T4", number: 4, capacity: 6, status: "available", assignedWaiter: "Suresh" },
  { id: "T5", number: 5, capacity: 2, status: "available", assignedWaiter: "Aniket" },
  { id: "T6", number: 6, capacity: 8, status: "available", assignedWaiter: "Suresh" },
];

export const INITIAL_EATMIT_ORDERS: EatmitOrder[] = [
  {
    id: "ORD-1081",
    table: "Table 1",
    items: [
      { name: "Paneer Butter Masala", quantity: 1, price: 280 },
      { name: "Butter Naan", quantity: 3, price: 150 },
      { name: "Jeera Rice", quantity: 1, price: 160 },
    ],
    total: 590,
    status: "preparing",
    timestamp: "12:42 PM",
    elapsedSeconds: 240,
    channel: "Dine-in",
  },
  {
    id: "ORD-1082",
    table: "Table 3",
    items: [
      { name: "Chicken Biryani (Dum)", quantity: 2, price: 640 },
      { name: "Raita", quantity: 2, price: 80 },
      { name: "Fresh Lime Soda", quantity: 2, price: 120 },
    ],
    total: 840,
    status: "new",
    timestamp: "12:47 PM",
    elapsedSeconds: 45,
    channel: "Dine-in",
  },
  {
    id: "ORD-1083",
    table: "Swiggy #904",
    items: [
      { name: "Veg Crispy", quantity: 1, price: 220 },
      { name: "Dal Tadka", quantity: 1, price: 210 },
      { name: "Tandoori Roti", quantity: 4, price: 100 },
    ],
    total: 530,
    status: "ready",
    timestamp: "12:35 PM",
    elapsedSeconds: 780,
    channel: "Swiggy",
  },
];

export const EATMIT_MENU_ITEMS = [
  { id: "M1", name: "Paneer Butter Masala", category: "Mains", activeDays: ["All"], price: 280 },
  { id: "M2", name: "Chicken Dum Biryani", category: "Specials", activeDays: ["Fri", "Sat", "Sun"], price: 320 },
  { id: "M3", name: "Butter Garlic Naan", category: "Breads", activeDays: ["All"], price: 50 },
  { id: "M4", name: "Veg Hakka Noodles", category: "Chinese", activeDays: ["All"], price: 190 },
  { id: "M5", name: "Mango Kulfi", category: "Desserts", activeDays: ["Sat", "Sun"], price: 90 },
];
