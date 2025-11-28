"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  BarChart,
} from "lucide-react";
import { useState } from "react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Users",
    icon: Users,
    href: "/users",
    color: "text-violet-500",
  },
  {
    label: "Orders",
    icon: ShoppingCart,
    href: "/orders",
    color: "text-pink-700",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/analytics",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">AdminDash</h1>
        </Link>
        <SidebarRoutes pathname={pathname} />
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 w-72 bg-slate-900 text-white border-r-slate-800"
      >
        <div className="space-y-4 py-4 flex flex-col h-full">
          <div className="px-3 py-2 flex-1">
            <Link
              href="/"
              className="flex items-center pl-3 mb-14"
              onClick={() => setOpen(false)}
            >
              <h1 className="text-2xl font-bold">AdminDash</h1>
            </Link>
            <SidebarRoutes pathname={pathname} setOpen={setOpen} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface SidebarRoutesProps {
  pathname: string;
  setOpen?: (open: boolean) => void;
}

function SidebarRoutes({ pathname, setOpen }: SidebarRoutesProps) {
  return (
    <div className="space-y-1">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          onClick={() => setOpen?.(false)}
          className={cn(
            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
            pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
          )}
        >
          <div className="flex items-center flex-1">
            <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
            {route.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
