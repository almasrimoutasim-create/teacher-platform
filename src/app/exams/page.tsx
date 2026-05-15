"use client";

import ProtectedLayout from "../../components/ProtectedLayout";

export default function ExamsPage() {
  return (
    <ProtectedLayout allowedRoles={["teacher", "admin"]}>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Exams</h1>
        <p className="mt-4">Protected exams area.</p>
      </div>
    </ProtectedLayout>
  );
}
