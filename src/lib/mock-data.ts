import { faker } from "@faker-js/faker";
import { User, Order, DashboardMetrics, UserStatus } from "@/types";

export const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(["Admin", "User", "Guest"]),
    status: faker.helpers.arrayElement([
      "Active",
      "Inactive",
      "Pending",
    ]) as UserStatus,
    lastLogin: faker.date.recent(),
  }));
};

export const generateOrders = (count: number): Order[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    amount: parseFloat(faker.finance.amount()),
    status: faker.helpers.arrayElement([
      "Completed",
      "Processing",
      "Cancelled",
    ]),
    date: faker.date.past(),
  }));
};

export const generateDashboardMetrics = (): DashboardMetrics => {
  return {
    totalRevenue: parseFloat(faker.finance.amount({ min: 10000, max: 50000 })),
    activeUsers: faker.number.int({ min: 100, max: 1000 }),
    totalOrders: faker.number.int({ min: 500, max: 5000 }),
    revenueTrend: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2024, i, 1).toLocaleString("default", { month: "short" }),
      value: faker.number.int({ min: 1000, max: 5000 }),
    })),
  };
};
