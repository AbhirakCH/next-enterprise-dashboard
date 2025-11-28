import {
  generateUsers,
  generateOrders,
  generateDashboardMetrics,
} from "../src/lib/mock-data";

console.log("Generating 10 users...");
const users = generateUsers(10);
console.log("Users generated:", users.length);
console.log("First user:", users[0]);

console.log("Generating 10 orders...");
const orders = generateOrders(10);
console.log("Orders generated:", orders.length);
console.log("First order:", orders[0]);

console.log("Generating dashboard metrics...");
const metrics = generateDashboardMetrics();
console.log("Metrics:", metrics);
