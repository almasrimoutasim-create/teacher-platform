"use client";

import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">منصة المعلم</h1>
        <p className="text-gray-700 mb-8">
          إدارة الطلاب، الدروس، والاختبارات بسهولة وسلاسة
        </p>

        <div className="space-x-4">
          <Button onClick={() => alert("تم الضغط على زر تسجيل الدخول!")}>
            تسجيل الدخول
          </Button>
          <Button onClick={() => alert("تم الضغط على زر مشاهدة الدروس!")}>
            مشاهدة الدروس
          </Button>
        </div>
      </div>
    </main>
  );
}