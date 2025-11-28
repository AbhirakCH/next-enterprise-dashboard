"use client";

import { useEffect, useState, useMemo } from "react";
import { User } from "@/types";
import { generateUsers } from "@/lib/mock-data";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";

export default function UsersPage() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching 10,000 records
    const users = generateUsers(10000);
    setData(users);
    setLoading(false);
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      {loading ? (
        <div>Loading 10,000 records...</div>
      ) : (
        <DataTable columns={columns} data={memoizedData} />
      )}
    </div>
  );
}
