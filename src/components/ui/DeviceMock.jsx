import Tilt from "react-parallax-tilt";
import {
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  CreditCard,
  FileText,
  Filter,
  Home,
  LayoutDashboard,
  Lock,
  Plus,
  Receipt,
  Search,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
  Truck,
  User,
  Users,
} from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cn } from "../../utils/helpers";

/**
 * Scaled-down demo interfaces for the services page. These are illustrative
 * product screens — swap them for real client screenshots when those exist.
 */

function Chrome({ label, secure = true, children, className }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-ink/8 bg-abyss px-3.5 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-ink/12" />
          <span className="h-2 w-2 rounded-full bg-ink/12" />
          <span className="h-2 w-2 rounded-full bg-accent/40" />
        </div>
        <div className="flex h-5 flex-1 items-center justify-center gap-1.5 rounded-full border border-ink/8 bg-white">
          {secure && <Lock size={7} strokeWidth={2.4} className="text-emerald-600" />}
          <span className="text-[8px] tracking-wide text-slate-dim">{label}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ---------------------------------- Website --------------------------------- */

function BrowserMock() {
  const rooms = [
    { name: "Treehouse Suite", price: "₹6,200", tint: "from-emerald-400/70 to-teal-500/50" },
    { name: "Valley Villa", price: "₹4,500", tint: "from-accent/70 to-accent-deep/50" },
    { name: "Forest Tent", price: "₹2,800", tint: "from-amber-400/70 to-orange-500/50" },
  ];

  return (
    <Chrome label="verdantretreat.in">
      <div className="flex items-center justify-between border-b border-ink/6 px-4 py-2.5">
        <span className="font-display text-[11px] font-semibold tracking-tight text-chalk">
          Verdant
        </span>
        <div className="flex items-center gap-3.5">
          {["Rooms", "Dining", "Gallery", "Contact"].map((item, i) => (
            <span
              key={item}
              className={cn("text-[8px]", i === 0 ? "text-chalk" : "text-mist")}
            >
              {item}
            </span>
          ))}
          <span className="rounded-full bg-chalk px-2.5 py-1 text-[7.5px] font-semibold text-white">
            Book now
          </span>
        </div>
      </div>

      <div className="p-3">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent via-accent-deep to-[#2b1f8f] p-4">
          <p className="font-mono text-[6.5px] uppercase tracking-[0.22em] text-white/70">
            Idukki · Kerala
          </p>
          <p className="mt-1.5 max-w-[10rem] font-display text-[15px] font-semibold leading-[1.1] tracking-tight text-white">
            Wake up above the clouds.
          </p>
          <p className="mt-1.5 max-w-[11rem] text-[7.5px] leading-relaxed text-white/70">
            Seven timber cottages on a working cardamom estate, two hours from Kochi.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-white px-2.5 py-1.5 text-[7.5px] font-semibold text-chalk">
              Check availability
            </span>
            <span className="text-[7.5px] text-white/70">from ₹2,800 / night</span>
          </div>

          <div className="absolute bottom-3 right-3 hidden rounded-lg border border-white/25 bg-white/12 px-2.5 py-1.5 backdrop-blur-sm sm:block">
            <p className="text-[6.5px] text-white/70">Guest rating</p>
            <p className="font-display text-[11px] font-semibold text-white">4.9</p>
          </div>
          <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-glow/30 blur-2xl" />
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {rooms.map((room) => (
            <div key={room.name} className="overflow-hidden rounded-lg border border-ink/8">
              <div className={cn("h-8 bg-gradient-to-br", room.tint)} />
              <div className="p-1.5">
                <p className="truncate text-[7.5px] font-medium text-chalk">{room.name}</p>
                <p className="mt-0.5 text-[7px] text-accent">{room.price} / night</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* ---------------------------------- Mobile ---------------------------------- */

function PhoneMock() {
  const dishes = [
    { name: "Chicken Mandi", price: "₹320", tint: "bg-amber-400/60" },
    { name: "Grilled Hammour", price: "₹480", tint: "bg-emerald-400/60" },
  ];

  const tabs = [
    { icon: Home, label: "Home" },
    { icon: ClipboardList, label: "Orders" },
    { icon: ShoppingBag, label: "Cart" },
    { icon: User, label: "You" },
  ];

  return (
    <div className="flex justify-center rounded-3xl border border-ink/8 bg-gradient-to-br from-abyss via-white to-abyss px-6 py-8">
      <div className="w-[11.5rem] rounded-[1.9rem] border-[5px] border-chalk bg-chalk p-1 shadow-lift">
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          <div className="flex items-center justify-between px-3 pb-1 pt-2">
            <span className="text-[7px] font-semibold text-chalk">9:41</span>
            <span className="h-1.5 w-8 rounded-full bg-chalk/25" />
            <span className="text-[7px] text-chalk">100%</span>
          </div>

          <div className="px-3 pb-3 pt-1.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[7px] text-slate-dim">Good evening, Anand</p>
                <p className="font-display text-[13px] font-semibold tracking-tight text-chalk">
                  Zaituun
                </p>
              </div>
              <div className="relative">
                <Bell size={12} strokeWidth={1.8} className="text-mist" />
                <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
            </div>

            <div className="mt-2.5 flex items-center gap-1.5 rounded-full border border-ink/8 bg-abyss px-2.5 py-1.5">
              <Search size={9} strokeWidth={2} className="text-slate-dim" />
              <span className="text-[7.5px] text-slate-dim">Search dishes</span>
            </div>

            <div className="mt-2.5 flex gap-1.5">
              {["All", "Grills", "Mandi", "Juices"].map((chip, i) => (
                <span
                  key={chip}
                  className={cn(
                    "rounded-full px-2 py-1 text-[7px]",
                    i === 0
                      ? "bg-accent text-white"
                      : "border border-ink/8 bg-white text-mist"
                  )}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-2.5 overflow-hidden rounded-xl bg-gradient-to-br from-accent to-accent-deep p-2.5">
              <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/70">
                Chef's pick
              </p>
              <p className="mt-1 font-display text-[11px] font-semibold text-white">
                Mixed Grill Platter
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-white">₹640</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-semibold text-accent">
                  Add
                </span>
              </div>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {dishes.map((dish) => (
                <div
                  key={dish.name}
                  className="flex items-center gap-2 rounded-lg border border-ink/8 bg-white p-1.5"
                >
                  <div className={cn("h-7 w-7 shrink-0 rounded-md", dish.tint)} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[8px] font-medium text-chalk">{dish.name}</p>
                    <p className="text-[7px] text-slate-dim">25–30 min</p>
                  </div>
                  <span className="text-[8px] font-semibold text-chalk">{dish.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-around border-t border-ink/8 px-2 py-2">
            {tabs.map((tab, i) => (
              <div key={tab.label} className="flex flex-col items-center gap-0.5">
                <tab.icon
                  size={11}
                  strokeWidth={i === 0 ? 2.2 : 1.7}
                  className={i === 0 ? "text-accent" : "text-slate-dim"}
                />
                <span
                  className={cn(
                    "text-[6px]",
                    i === 0 ? "font-semibold text-accent" : "text-slate-dim"
                  )}
                >
                  {tab.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Custom software ----------------------------- */

function DashboardMock() {
  const nav = [
    { icon: LayoutDashboard, label: "Overview" },
    { icon: Users, label: "Patients" },
    { icon: CalendarDays, label: "Schedule" },
    { icon: Receipt, label: "Billing" },
    { icon: BarChart3, label: "Reports" },
  ];

  const kpis = [
    { label: "Appointments", value: "42", delta: "+12%", up: true },
    { label: "Walk-ins", value: "11", delta: "+4%", up: true },
    { label: "Collected", value: "₹86,400", delta: "+18%", up: true },
    { label: "No-shows", value: "3", delta: "−2", up: false },
  ];

  const chart = [
    { day: "Mon", height: 46 },
    { day: "Tue", height: 62 },
    { day: "Wed", height: 54 },
    { day: "Thu", height: 78 },
    { day: "Fri", height: 96 },
    { day: "Sat", height: 71 },
    { day: "Sun", height: 38 },
  ];

  const queue = [
    { time: "10:30", name: "Meera Nair", doctor: "Dr. Rahul" },
    { time: "11:15", name: "Joseph Antony", doctor: "Dr. Divya" },
    { time: "11:45", name: "Fathima R.", doctor: "Dr. Rahul" },
  ];

  return (
    <Chrome label="app.pulsecare.in/overview">
      <div className="flex">
        <div className="hidden w-[5.5rem] shrink-0 border-r border-ink/8 bg-abyss p-2.5 sm:block">
          <div className="flex items-center gap-1.5">
            <span className="h-3.5 w-3.5 rounded bg-accent" />
            <span className="text-[8px] font-semibold text-chalk">PulseCare</span>
          </div>
          <div className="mt-3 space-y-0.5">
            {nav.map((item, i) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-1.5 py-1",
                  i === 0 ? "bg-accent/10" : ""
                )}
              >
                <item.icon
                  size={9}
                  strokeWidth={1.9}
                  className={i === 0 ? "text-accent" : "text-slate-dim"}
                />
                <span
                  className={cn(
                    "text-[7.5px]",
                    i === 0 ? "font-semibold text-accent" : "text-mist"
                  )}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1 p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-[11px] font-semibold text-chalk">Overview</p>
              <p className="text-[7px] text-slate-dim">Tuesday, 28 July</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-1 rounded-md border border-ink/8 bg-abyss px-1.5 py-1 text-[7px] text-mist">
                This week
                <ChevronDown size={7} strokeWidth={2.4} />
              </span>
              <span className="h-4 w-4 rounded-full bg-accent/25" />
            </div>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-ink/8 bg-abyss p-1.5">
                <p className="truncate text-[6.5px] text-slate-dim">{kpi.label}</p>
                <p className="mt-0.5 font-display text-[11px] font-semibold text-chalk">
                  {kpi.value}
                </p>
                <p
                  className={cn(
                    "mt-0.5 flex items-center gap-0.5 text-[6.5px]",
                    kpi.up ? "text-emerald-600" : "text-rose-500"
                  )}
                >
                  {kpi.up ? (
                    <TrendingUp size={7} strokeWidth={2.4} />
                  ) : (
                    <TrendingDown size={7} strokeWidth={2.4} />
                  )}
                  {kpi.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 rounded-lg border border-ink/8 p-2">
            <div className="flex items-center justify-between">
              <p className="text-[7.5px] font-medium text-chalk">Consultations</p>
              <p className="text-[6.5px] text-slate-dim">Peak Fri · 96</p>
            </div>
            <div className="mt-2 flex h-16 items-end gap-1.5">
              {chart.map((bar) => (
                <div key={bar.day} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    style={{ height: `${bar.height}%` }}
                    className={cn(
                      "w-full rounded-sm",
                      bar.day === "Fri"
                        ? "bg-gradient-to-t from-accent to-accent-soft"
                        : "bg-accent/20"
                    )}
                  />
                  <span className="text-[6px] text-slate-dim">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2.5 rounded-lg border border-ink/8">
            <p className="border-b border-ink/6 px-2 py-1.5 text-[7.5px] font-medium text-chalk">
              Next up
            </p>
            {queue.map((row, i) => (
              <div
                key={row.name}
                className={cn(
                  "flex items-center gap-2 px-2 py-1.5",
                  i < queue.length - 1 && "border-b border-ink/6"
                )}
              >
                <span className="w-8 shrink-0 font-mono text-[7px] text-accent">{row.time}</span>
                <span className="min-w-0 flex-1 truncate text-[7.5px] text-chalk">{row.name}</span>
                <span className="shrink-0 text-[7px] text-slate-dim">{row.doctor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* ------------------------------------ POS ----------------------------------- */

function PosMock() {
  const products = [
    { name: "Amul Milk 500ml", price: "₹28", tint: "bg-sky-400/50" },
    { name: "Bread Loaf", price: "₹45", tint: "bg-amber-400/50" },
    { name: "Eggs · 6 pc", price: "₹52", tint: "bg-orange-400/50" },
    { name: "Basmati 1kg", price: "₹140", tint: "bg-emerald-400/50" },
    { name: "Sunflower Oil 1L", price: "₹165", tint: "bg-yellow-400/50" },
    { name: "Tea Dust 250g", price: "₹98", tint: "bg-rose-400/50" },
  ];

  const bill = [
    { qty: 2, name: "Amul Milk 500ml", amount: "₹56" },
    { qty: 1, name: "Basmati 1kg", amount: "₹140" },
    { qty: 3, name: "Bread Loaf", amount: "₹135" },
    { qty: 1, name: "Sunflower Oil 1L", amount: "₹165" },
  ];

  return (
    <Chrome label="Kudos Mart · Counter 02" secure={false}>
      <div className="grid grid-cols-5">
        <div className="col-span-3 p-2.5">
          <div className="flex items-center gap-1.5 rounded-md border border-ink/8 bg-abyss px-2 py-1.5">
            <Search size={9} strokeWidth={2} className="text-slate-dim" />
            <span className="text-[7px] text-slate-dim">Scan barcode or search</span>
            <span className="ml-auto rounded bg-white px-1 py-0.5 font-mono text-[6px] text-slate-dim">
              F2
            </span>
          </div>

          <div className="mt-2 flex gap-1">
            {["All", "Dairy", "Staples", "Snacks"].map((chip, i) => (
              <span
                key={chip}
                className={cn(
                  "rounded px-1.5 py-0.5 text-[6.5px]",
                  i === 0 ? "bg-accent text-white" : "border border-ink/8 text-mist"
                )}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {products.map((product, i) => (
              <div
                key={product.name}
                className={cn(
                  "rounded-md border p-1.5",
                  i === 3 ? "border-accent/40 bg-accent/8" : "border-ink/8 bg-white"
                )}
              >
                <div className={cn("h-5 w-full rounded", product.tint)} />
                <p className="mt-1 truncate text-[6.5px] font-medium text-chalk">
                  {product.name}
                </p>
                <p className="text-[7px] font-semibold text-accent">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 flex flex-col border-l border-ink/8 bg-abyss p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[7.5px] font-semibold text-chalk">Bill #10428</p>
            <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[6px] font-medium text-emerald-700">
              Offline OK
            </span>
          </div>

          <div className="mt-2 space-y-1.5">
            {bill.map((line) => (
              <div key={line.name} className="flex items-start gap-1.5">
                <span className="font-mono text-[6.5px] text-slate-dim">{line.qty}×</span>
                <span className="min-w-0 flex-1 truncate text-[7px] text-chalk">{line.name}</span>
                <span className="text-[7px] font-medium text-chalk">{line.amount}</span>
              </div>
            ))}
          </div>

          <div className="mt-2.5 space-y-1 border-t border-ink/10 pt-2">
            <div className="flex justify-between text-[6.5px] text-mist">
              <span>Subtotal</span>
              <span>₹496</span>
            </div>
            <div className="flex justify-between text-[6.5px] text-mist">
              <span>GST 5%</span>
              <span>₹24.80</span>
            </div>
            <div className="flex items-baseline justify-between border-t border-ink/10 pt-1.5">
              <span className="text-[7px] font-semibold text-chalk">Total</span>
              <span className="font-display text-[13px] font-semibold text-chalk">₹520.80</span>
            </div>
          </div>

          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center justify-center gap-1 rounded-md bg-emerald-500 py-1.5">
              <span className="text-[7.5px] font-semibold text-white">Cash · F8</span>
            </div>
            <div className="flex items-center justify-center gap-1 rounded-md border border-ink/12 bg-white py-1.5">
              <CreditCard size={8} strokeWidth={2} className="text-mist" />
              <span className="text-[7.5px] font-medium text-chalk">Card</span>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* ------------------------------------ ERP ----------------------------------- */

function ErpMock() {
  const rows = [
    {
      sku: "FAB-1042",
      item: 'Cotton twill 60"',
      site: "Kochi",
      qty: "1,240 m",
      status: "In stock",
      tone: "bg-emerald-500/15 text-emerald-700",
    },
    {
      sku: "TRM-0087",
      item: 'YKK zippers 8"',
      site: "Aluva",
      qty: "320 pcs",
      status: "Low",
      tone: "bg-amber-500/20 text-amber-700",
    },
    {
      sku: "FAB-2210",
      item: "Linen blend ecru",
      site: "Kochi",
      qty: "0 m",
      status: "Reorder",
      tone: "bg-rose-500/15 text-rose-600",
    },
    {
      sku: "PKG-0031",
      item: "Poly bags 12×16",
      site: "Aluva",
      qty: "5,800 pcs",
      status: "In stock",
      tone: "bg-emerald-500/15 text-emerald-700",
    },
    {
      sku: "TRM-0142",
      item: "Buttons 4-hole",
      site: "Kochi",
      qty: "940 pcs",
      status: "In stock",
      tone: "bg-emerald-500/15 text-emerald-700",
    },
  ];

  return (
    <Chrome label="erp.stitchline.in/inventory">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display text-[11px] font-semibold text-chalk">Stock ledger</p>
            <p className="text-[7px] text-slate-dim">218 items · 2 warehouses</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 rounded-md border border-ink/8 bg-abyss px-1.5 py-1 text-[7px] text-mist">
              <Filter size={7} strokeWidth={2.2} />
              Filters
            </span>
            <span className="flex items-center gap-1 rounded-md bg-accent px-2 py-1 text-[7px] font-semibold text-white">
              <Plus size={7} strokeWidth={2.8} />
              New entry
            </span>
          </div>
        </div>

        <div className="mt-2.5 overflow-hidden rounded-lg border border-ink/8">
          <div className="grid grid-cols-12 gap-2 border-b border-ink/8 bg-abyss px-2.5 py-1.5">
            <span className="col-span-3 font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              SKU
            </span>
            <span className="col-span-4 font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              Item
            </span>
            <span className="col-span-2 font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              Site
            </span>
            <span className="col-span-3 text-right font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              On hand
            </span>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.sku}
              className={cn(
                "grid grid-cols-12 items-center gap-2 px-2.5 py-2",
                i < rows.length - 1 && "border-b border-ink/6",
                row.status === "Reorder" && "bg-rose-500/[0.03]"
              )}
            >
              <span className="col-span-3 font-mono text-[7px] text-accent">{row.sku}</span>
              <span className="col-span-4 truncate text-[7.5px] text-chalk">{row.item}</span>
              <span className="col-span-2 text-[7px] text-mist">{row.site}</span>
              <div className="col-span-3 flex items-center justify-end gap-1.5">
                <span className="text-[7px] font-medium text-chalk">{row.qty}</span>
                <span
                  className={cn(
                    "shrink-0 rounded px-1 py-0.5 text-[6px] font-medium",
                    row.tone
                  )}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-[6.5px] text-slate-dim">Showing 5 of 218</p>
          <div className="flex items-center gap-1">
            <span className="rounded bg-accent px-1.5 py-0.5 text-[6.5px] font-medium text-white">
              1
            </span>
            <span className="px-1.5 py-0.5 text-[6.5px] text-slate-dim">2</span>
            <span className="px-1.5 py-0.5 text-[6.5px] text-slate-dim">3</span>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* ---------------------------------- Fleet ops -------------------------------- */

function FleetMock() {
  const kpis = [
    { label: "Trips closed", value: "38" },
    { label: "Fuel spend", value: "₹2.4L" },
    { label: "Avg margin", value: "18%" },
  ];

  const trips = [
    { id: "TRP-4412", route: "Kochi → Salem", fuel: "₹8,400", margin: "+₹3,100", good: true },
    { id: "TRP-4413", route: "Kochi → Madurai", fuel: "₹11,200", margin: "+₹1,850", good: true },
    {
      id: "TRP-4414",
      route: "Aluva → Bengaluru",
      fuel: "₹16,900",
      margin: "−₹640",
      good: false,
    },
    { id: "TRP-4415", route: "Kochi → Thrissur", fuel: "₹4,600", margin: "+₹2,450", good: true },
  ];

  return (
    <Chrome label="app.fleetledger.in/trips">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Truck size={11} strokeWidth={1.9} className="text-accent" />
            <p className="font-display text-[11px] font-semibold text-chalk">Trip ledger</p>
          </div>
          <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[6px] font-medium text-emerald-700">
            Closed same day
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-ink/8 bg-abyss p-1.5">
              <p className="text-[6.5px] text-slate-dim">{kpi.label}</p>
              <p className="mt-0.5 font-display text-[11px] font-semibold text-chalk">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2.5 overflow-hidden rounded-lg border border-ink/8">
          <div className="grid grid-cols-12 gap-2 border-b border-ink/8 bg-abyss px-2.5 py-1.5">
            <span className="col-span-3 font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              Trip
            </span>
            <span className="col-span-4 font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              Route
            </span>
            <span className="col-span-2 text-right font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              Fuel
            </span>
            <span className="col-span-3 text-right font-mono text-[6.5px] uppercase tracking-[0.12em] text-slate-dim">
              Margin
            </span>
          </div>

          {trips.map((trip, i) => (
            <div
              key={trip.id}
              className={cn(
                "grid grid-cols-12 items-center gap-2 px-2.5 py-2",
                i < trips.length - 1 && "border-b border-ink/6",
                !trip.good && "bg-rose-500/[0.03]"
              )}
            >
              <span className="col-span-3 font-mono text-[7px] text-accent">{trip.id}</span>
              <span className="col-span-4 truncate text-[7.5px] text-chalk">{trip.route}</span>
              <span className="col-span-2 text-right text-[7px] text-mist">{trip.fuel}</span>
              <span
                className={cn(
                  "col-span-3 text-right text-[7px] font-semibold",
                  trip.good ? "text-emerald-600" : "text-rose-500"
                )}
              >
                {trip.margin}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* ---------------------------------- Invoicing -------------------------------- */

function InvoiceMock() {
  const invoices = [
    { id: "INV-2041", client: "Anand & Co", amount: "₹48,000", status: "Paid", tone: "bg-emerald-500/15 text-emerald-700" },
    { id: "INV-2042", client: "Skyline Traders", amount: "₹1,12,500", status: "Sent", tone: "bg-accent/12 text-accent" },
    { id: "INV-2043", client: "Meridian Foods", amount: "₹64,800", status: "Overdue", tone: "bg-rose-500/15 text-rose-600" },
    { id: "INV-2044", client: "Kairali Textiles", amount: "₹27,900", status: "Draft", tone: "bg-ink/8 text-mist" },
  ];

  return (
    <Chrome label="app.ledgerlite.in/invoices">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display text-[11px] font-semibold text-chalk">Invoices</p>
            <p className="text-[7px] text-slate-dim">104 client books · July cycle</p>
          </div>
          <span className="flex items-center gap-1 rounded-md bg-accent px-2 py-1 text-[7px] font-semibold text-white">
            <Plus size={7} strokeWidth={2.8} />
            New invoice
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          <div className="rounded-lg border border-ink/8 bg-abyss p-1.5">
            <p className="text-[6.5px] text-slate-dim">Outstanding</p>
            <p className="mt-0.5 font-display text-[11px] font-semibold text-chalk">₹4,86,200</p>
          </div>
          <div className="rounded-lg border border-ink/8 bg-abyss p-1.5">
            <p className="text-[6.5px] text-slate-dim">Collected</p>
            <p className="mt-0.5 font-display text-[11px] font-semibold text-emerald-600">
              ₹12,40,000
            </p>
          </div>
          <div className="rounded-lg border border-ink/8 bg-abyss p-1.5">
            <p className="text-[6.5px] text-slate-dim">Overdue</p>
            <p className="mt-0.5 font-display text-[11px] font-semibold text-rose-500">3</p>
          </div>
        </div>

        <div className="mt-2.5 overflow-hidden rounded-lg border border-ink/8">
          {invoices.map((invoice, i) => (
            <div
              key={invoice.id}
              className={cn(
                "flex items-center gap-2 px-2.5 py-2",
                i < invoices.length - 1 && "border-b border-ink/6"
              )}
            >
              <FileText size={10} strokeWidth={1.8} className="shrink-0 text-slate-dim" />
              <span className="w-14 shrink-0 font-mono text-[7px] text-accent">{invoice.id}</span>
              <span className="min-w-0 flex-1 truncate text-[7.5px] text-chalk">
                {invoice.client}
              </span>
              <span className="shrink-0 text-[7.5px] font-medium text-chalk">
                {invoice.amount}
              </span>
              <span
                className={cn(
                  "w-12 shrink-0 rounded px-1 py-0.5 text-center text-[6px] font-medium",
                  invoice.tone
                )}
              >
                {invoice.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-[6.5px] text-slate-dim">Auto-reminders</span>
          <span className="flex h-2.5 w-5 items-center rounded-full bg-accent px-0.5">
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span className="text-[6.5px] text-slate-dim">on</span>
        </div>
      </div>
    </Chrome>
  );
}

const variants = {
  browser: BrowserMock,
  phone: PhoneMock,
  dashboard: DashboardMock,
  pos: PosMock,
  erp: ErpMock,
  fleet: FleetMock,
  invoice: InvoiceMock,
};

export default function DeviceMock({ variant = "browser", showAccents = true, className }) {
  const reduced = useReducedMotion();
  const hasPointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const Mock = variants[variant] ?? BrowserMock;
  // These sit inside swipeable carousels on touch, where tilt fights the gesture
  const tiltEnabled = hasPointer && !reduced;

  return (
    <div className={cn("relative", className)} aria-hidden="true">
      {showAccents && (
        <div className="absolute -inset-4 hidden rounded-[2.25rem] bg-gradient-to-br from-accent/10 via-accent-soft/6 to-glow/10 blur-md sm:block" />
      )}

      <Tilt
        tiltEnable={tiltEnabled}
        tiltMaxAngleX={6}
        tiltMaxAngleY={8}
        perspective={1400}
        scale={tiltEnabled ? 1.012 : 1}
        transitionSpeed={1600}
        glareEnable={tiltEnabled}
        glareMaxOpacity={0.08}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="16px"
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Mock />

        {showAccents && (
          <>
            <div className="absolute -right-4 -top-5 hidden h-10 w-10 rounded-xl bg-accent-soft shadow-lift [transform:translateZ(70px)_rotate(12deg)] sm:block sm:-right-6" />
            <div className="absolute -bottom-4 -left-4 hidden h-6 w-6 rounded-full bg-glow shadow-lift [transform:translateZ(55px)] sm:block" />
          </>
        )}
      </Tilt>
    </div>
  );
}
