"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  INITIAL_EATMIT_ORDERS,
  INITIAL_EATMIT_TABLES,
  EATMIT_MENU_ITEMS,
  EatmitOrder,
  EatmitTable,
} from "@/content/eatmit-demo-data";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  UtensilsCrossed,
  Clock,
  CheckCircle2,
  Users,
  Calendar,
  AlertCircle,
  Play,
  RotateCcw,
} from "lucide-react";

export function EatmitProductLab() {
  const [activeTab, setActiveTab] = useState<"kds" | "floor" | "menu">("kds");
  const [orders, setOrders] = useState<EatmitOrder[]>(INITIAL_EATMIT_ORDERS);
  const [tables, setTables] = useState<EatmitTable[]>(INITIAL_EATMIT_TABLES);
  const [selectedDay, setSelectedDay] = useState("All");

  // KDS Action: advance order status
  const handleAdvanceOrder = (id: string) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id !== id) return o;
        if (o.status === "new") return { ...o, status: "preparing" };
        if (o.status === "preparing") return { ...o, status: "ready" };
        return o;
      })
    );
  };

  // Table Action: Toggle merge between Table 1 & Table 2
  const handleToggleMerge = () => {
    setTables((prev) => {
      const isMerged = prev[0].status === "merged";
      return prev.map((t) => {
        if (t.id === "T1") {
          return {
            ...t,
            status: isMerged ? "occupied" : "merged",
            mergedWith: isMerged ? undefined : "T2",
            capacity: isMerged ? 2 : 6,
          };
        }
        if (t.id === "T2") {
          return {
            ...t,
            status: isMerged ? "available" : "merged",
            mergedWith: isMerged ? undefined : "T1",
          };
        }
        return t;
      });
    });
  };

  return (
    <section className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Permanent Sample Data Ribbon */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marigold-500/10 border border-marigold-500/30 text-marigold-500 font-mono text-[11px]">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>eatmit Product Lab — Sandbox Simulation with 100% Synthetic Data (Zero Network Calls)</span>
        </div>
      </div>

      {/* Header with official eatmit logo */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-soil-700/60">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-black p-1 border border-soil-700">
              <Image
                src="/assets/eatmit/eatmit_logo.svg"
                alt="eatmit POS Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-mono text-xs text-signal-400 uppercase tracking-widest">
                FOUNDER SHOWCASE // SAAS PRODUCT
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-cotton-50 tracking-tight flex items-center gap-3">
                eatmit <span className="text-sm font-mono px-2 py-0.5 rounded bg-soil-800 text-marigold-500 border border-soil-700 font-normal">In Progress / Beta</span>
              </h2>
            </div>
          </div>
          <p className="text-sm sm:text-base text-cotton-400 max-w-xl">
            A next-generation restaurant POS &amp; live-operations platform. Try the interactive
            prototype modules below built directly from the product specification.
          </p>
        </div>

        {/* Tab Switcher */}
        <LiquidGlass className="flex items-center p-1 rounded-full text-xs font-mono self-start md:self-end">
          <button
            onClick={() => setActiveTab("kds")}
            className={`px-3 sm:px-4 py-2 rounded-full transition-all ${
              activeTab === "kds"
                ? "bg-marigold-500 text-soil-950 font-bold"
                : "text-cotton-400 hover:text-cotton-50"
            }`}
          >
            Live KDS Board
          </button>
          <button
            onClick={() => setActiveTab("floor")}
            className={`px-3 sm:px-4 py-2 rounded-full transition-all ${
              activeTab === "floor"
                ? "bg-marigold-500 text-soil-950 font-bold"
                : "text-cotton-400 hover:text-cotton-50"
            }`}
          >
            Floor &amp; Tables
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`px-3 sm:px-4 py-2 rounded-full transition-all ${
              activeTab === "menu"
                ? "bg-marigold-500 text-soil-950 font-bold"
                : "text-cotton-400 hover:text-cotton-50"
            }`}
          >
            Menu Scheduler
          </button>
        </LiquidGlass>
      </div>

      {/* Interactive Module Display */}
      <GlowingEffect glow spread={50} proximity={80}>
        <div className="rounded-2xl border border-soil-700 bg-soil-900 p-6 sm:p-8 shadow-2xl">
          {/* TAB 1: KDS View & Interactive Tickets */}
          {activeTab === "kds" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-soil-700/60 font-mono text-xs">
                <div className="flex items-center gap-2 text-cotton-50">
                  <UtensilsCrossed className="h-4 w-4 text-marigold-500" />
                  <span className="font-bold">Live Kitchen Display System (KDS)</span>
                  <span className="text-cotton-400">• Click ticket button to advance state</span>
                </div>
                <button
                  onClick={() => setOrders(INITIAL_EATMIT_ORDERS)}
                  className="flex items-center gap-1 text-cotton-400 hover:text-marigold-500 transition-colors"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Demo Tickets</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {orders.map((order) => {
                  const isNew = order.status === "new";
                  const isPreparing = order.status === "preparing";
                  const isReady = order.status === "ready";

                  return (
                    <div
                      key={order.id}
                      className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                        isReady
                          ? "border-signal-400/50 bg-soil-950/90"
                          : isPreparing
                          ? "border-marigold-500/50 bg-soil-950/90"
                          : "border-vermilion-500/50 bg-soil-950/90"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="font-bold text-cotton-50">{order.id}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                              isReady
                                ? "bg-signal-400/20 text-signal-400"
                                : isPreparing
                                ? "bg-marigold-500/20 text-marigold-500"
                                : "bg-vermilion-500/20 text-vermilion-500"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs font-mono text-cotton-400">
                          <span className="text-cotton-200">{order.table}</span>
                          {order.channel && (
                            <span className="px-1.5 py-0.5 rounded bg-soil-800 text-[10px] text-cotton-400 border border-soil-700">
                              {order.channel}
                            </span>
                          )}
                        </div>

                        <div className="border-t border-soil-800 pt-3 space-y-1.5 font-sans">
                          {order.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between text-xs text-cotton-200"
                            >
                              <span>
                                {item.quantity}x {item.name}
                              </span>
                              <span className="font-mono text-cotton-400">₹{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-soil-800 flex items-center justify-between">
                        <div className="flex items-center gap-1 font-mono text-xs text-cotton-400">
                          <Clock className="h-3 w-3" />
                          <span>{order.timestamp}</span>
                        </div>

                        <button
                          onClick={() => handleAdvanceOrder(order.id)}
                          disabled={isReady}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                            isReady
                              ? "bg-soil-800 text-cotton-400 cursor-not-allowed"
                              : isPreparing
                              ? "bg-signal-400 text-soil-950 font-bold hover:bg-cotton-50"
                              : "bg-marigold-500 text-soil-950 font-bold hover:bg-cotton-50"
                          }`}
                        >
                          {isNew ? "Start Prep →" : isPreparing ? "Mark Ready ✓" : "Completed"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Floor & Table Merge */}
          {activeTab === "floor" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-soil-700/60 font-mono text-xs">
                <div className="flex items-center gap-2 text-cotton-50">
                  <Users className="h-4 w-4 text-signal-400" />
                  <span className="font-bold">Floor Plan &amp; Dynamic Table Merging</span>
                </div>
                <button
                  onClick={handleToggleMerge}
                  className="px-3 py-1.5 rounded-lg bg-soil-800 hover:bg-soil-700 text-marigold-500 font-mono text-xs transition-colors border border-soil-700"
                >
                  {tables[0].status === "merged" ? "Split Tables 1 & 2" : "Merge Tables 1 & 2"}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tables.map((table) => {
                  const isMerged = table.status === "merged";
                  return (
                    <div
                      key={table.id}
                      className={`p-5 rounded-xl border transition-all ${
                        isMerged
                          ? "border-marigold-500 bg-marigold-500/10 col-span-2"
                          : table.status === "occupied"
                          ? "border-soil-700 bg-soil-950/80"
                          : "border-soil-700/60 bg-soil-950/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3 font-mono text-xs">
                        <span className="font-bold text-cotton-50">
                          {isMerged ? "Table 1 + Table 2 (Merged)" : `Table ${table.number}`}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            table.status === "occupied"
                              ? "bg-vermilion-500/20 text-vermilion-500"
                              : isMerged
                              ? "bg-marigold-500/20 text-marigold-500 font-bold"
                              : "bg-signal-400/20 text-signal-400"
                          }`}
                        >
                          {table.status}
                        </span>
                      </div>

                      <div className="space-y-1 font-mono text-xs text-cotton-400">
                        <div>Seats: {table.capacity} Guests</div>
                        <div>Assigned Waiter: {table.assignedWaiter}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: Menu Day Scheduler */}
          {activeTab === "menu" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-soil-700/60 font-mono text-xs">
                <div className="flex items-center gap-2 text-cotton-50">
                  <Calendar className="h-4 w-4 text-marigold-500" />
                  <span className="font-bold">Day-Wise &amp; Time-Wise Menu Controller</span>
                </div>
                <div className="flex gap-1">
                  {["All", "Fri", "Sat", "Sun"].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-2.5 py-1 rounded text-xs font-mono ${
                        selectedDay === day
                          ? "bg-marigold-500 text-soil-950 font-bold"
                          : "bg-soil-800 text-cotton-400 hover:text-cotton-50"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-soil-800/80 font-sans">
                {EATMIT_MENU_ITEMS.map((item) => {
                  const isAvailable =
                    selectedDay === "All" ||
                    item.activeDays.includes("All") ||
                    item.activeDays.includes(selectedDay);

                  return (
                    <div
                      key={item.id}
                      className="py-3.5 flex items-center justify-between text-xs sm:text-sm"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-cotton-50">{item.name}</span>
                          <span className="px-1.5 py-0.2 rounded bg-soil-800 text-[10px] font-mono text-cotton-400">
                            {item.category}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-cotton-400">
                          Active: {item.activeDays.join(", ")}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-mono text-cotton-200">₹{item.price}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                            isAvailable
                              ? "bg-signal-400/20 text-signal-400"
                              : "bg-soil-800 text-cotton-400 line-through"
                          }`}
                        >
                          {isAvailable ? "Live on Menu" : "Off Schedule"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </GlowingEffect>
    </section>
  );
}
