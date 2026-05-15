// src/app/layout.tsx
import "../styles/globals.css"; // تأكد أن هذا هو المسار الصحيح
import { ReactNode } from "react";
import AuthProvider from "../components/AuthProvider";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-gray-100 font-sans">
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}