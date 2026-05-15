"use client";

import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { setStoredLanguage, useStoredLanguage } from "@/lib/language";

const labels = {
  ar: {
    home: "الرئيسية",
    courses: "الكورسات",
    live: "الحصص المباشرة",
    teachers: "المعلمون",
    dashboard: "لوحة التحكم",
    logout: "خروج",
    login: "تسجيل الدخول",
    becomeTeacher: "كن معلما",
    switchTo: "EN",
  },
  en: {
    home: "Home",
    courses: "Courses",
    live: "Live Classes",
    teachers: "Teachers",
    dashboard: "Dashboard",
    logout: "Sign out",
    login: "Sign in",
    becomeTeacher: "Teach",
    switchTo: "AR",
  },
};

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const language = useStoredLanguage();

  function changeLanguage() {
    const nextLanguage = language === "ar" ? "en" : "ar";
    setStoredLanguage(nextLanguage);
  }

  if (pathname === "/dashboard") {
    return null;
  }

  const text = labels[language];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[58px] max-w-7xl items-center justify-between px-5 md:px-7">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white">
            <span className="h-5 w-6 rounded-sm border-2 border-white after:ml-2 after:block after:h-4 after:border-l-2 after:border-white" />
          </span>
          <span className="text-2xl font-extrabold text-blue-600">EduCast</span>
        </Link>

        <nav
          className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <Link className="hover:text-blue-600" href="/">
            {text.home}
          </Link>
          <Link className="hover:text-blue-600" href="/courses">
            {text.courses}
          </Link>
          <Link className="hover:text-blue-600" href="/dashboard">
            {text.live}
          </Link>
          <Link className="hover:text-blue-600" href="/students">
            {text.teachers}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={changeLanguage}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            {text.switchTo}
          </button>

          {session?.user ? (
            <>
              <Link href="/dashboard" className="hidden text-sm font-semibold text-blue-600 sm:inline">
                {text.dashboard}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600"
              >
                {text.logout}
              </button>
            </>
          ) : (
            <>
              <Link className="hidden text-sm font-semibold text-blue-600 sm:inline" href="/login">
                {text.login}
              </Link>
              <Link
                className="rounded-xl bg-gradient-to-l from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-600/20"
                href="/signup"
              >
                {text.becomeTeacher}
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
