"use client";

import ProtectedLayout from "../../components/ProtectedLayout";

export default function StudentsPage() {
  return (
    <ProtectedLayout allowedRoles={["teacher", "admin"]}>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Students</h1>
        <p className="mt-4">Protected students area.</p>
      </div>
    </ProtectedLayout>
  );
}
