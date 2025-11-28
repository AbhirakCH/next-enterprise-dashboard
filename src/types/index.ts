export type UserStatus = "Active" | "Inactive" | "Pending";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Guest";
  status: UserStatus;
  lastLogin: Date;
}

export interface Order {
  id: string;
  userId: string;
  amount: number;
  status: "Completed" | "Processing" | "Cancelled";
  date: Date;
}

export interface DashboardMetrics {
  totalRevenue: number;
  activeUsers: number;
  totalOrders: number;
  revenueTrend: { date: string; value: number }[];
}
