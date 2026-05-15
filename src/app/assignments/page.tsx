"use client";

import ProtectedLayout from "../../components/ProtectedLayout";

export default function AssignmentsPage() {
  return (
    <ProtectedLayout allowedRoles={["teacher", "admin"]}>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Assignments</h1>
        <p className="mt-4">List of assignments will appear here (protected).</p>
      </div>
    </ProtectedLayout>
  );
}
