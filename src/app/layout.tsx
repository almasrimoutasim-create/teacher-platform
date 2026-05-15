// src/app/layout.tsx
import "../styles/globals.css"; // تأكد أن هذا هو المسار الصحيح
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  );
}