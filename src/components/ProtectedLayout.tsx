"use client";

import React from "react";
import { useSession } from "next-auth/react";
import RequireAuth from "./RequireAuth";

interface Props {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedLayout({ children, allowedRoles }: Props) {
  const { data: session } = useSession();
  const role = session?.user?.role;

  if (allowedRoles && role && !allowedRoles.includes(role)) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Access denied</h1>
        <p className="mt-4">You do not have permission to view this page.</p>
      </div>
    );
  }

  return <RequireAuth>{children}</RequireAuth>;
}
