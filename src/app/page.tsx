"use client";

import { useEffect, useState } from "react";
import { generateDashboardMetrics } from "@/lib/mock-data";
import { DashboardMetrics } from "@/types";
import { DashboardCard } from "@/components/DashboardCard";
import { OverviewChart } from "@/components/OverviewChart";
import { RecentSalesChart } from "@/components/RecentSalesChart";
import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);

  useEffect(() => {
    // Simulate API call
    const data = generateDashboardMetrics();
    setMetrics(data);
  }, []);

  if (!metrics) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Revenue"
          value={`$${metrics.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          description="+20.1% from last month"
        />
        <DashboardCard
          title="Active Users"
          value={metrics.activeUsers}
          icon={Users}
          description="+180.1% from last month"
        />
        <DashboardCard
          title="Total Orders"
          value={metrics.totalOrders}
          icon={ShoppingCart}
          description="+19% from last month"
        />
        <DashboardCard
          title="Active Now"
          value="+573"
          icon={Activity}
          description="+201 since last hour"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart data={metrics.revenueTrend} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentSalesChart data={metrics.revenueTrend} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
