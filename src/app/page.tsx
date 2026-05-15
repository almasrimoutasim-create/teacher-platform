"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useStoredLanguage } from "@/lib/language";

const content = {
  ar: {
    title: "منصة التعليم الذكية",
    titleAccent: "للمعلمين والطلاب",
    subtitle:
      "انضم إلى آلاف المعلمين والطلاب في رحلة تعليمية تفاعلية مع بث مباشر، فيديوهات مسجلة، اختبارات ذكية، ومتابعة واضحة لكل طالب.",
    primary: "ابدأ التعلم الآن",
    secondary: "انشئ حسابك كمعلم",
    stats: [
      { value: "10K+", label: "طالب نشط" },
      { value: "500+", label: "معلم محترف" },
      { value: "1000+", label: "كورس متاح" },
      { value: "50K+", label: "ساعة بث مباشر" },
    ],
    eyebrow: "أفكار للمنصة",
    ideasTitle: "كل ما يحتاجه المعلم في مكان واحد",
    ideasIntro: "صممنا الصفحة الرئيسية لتقود الطالب للتعلم، وتفتح للمعلم طريقا واضحا لإدارة الحصص والمحتوى.",
    ideas: [
      {
        title: "حصص مباشرة تفاعلية",
        text: "غرف بث للشرح، الأسئلة السريعة، ورفع الواجبات أثناء الحصة.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "متابعة ذكية للطلاب",
        text: "لوحات تقدم، تنبيهات للطلاب المتأخرين، وتقارير جاهزة للمعلم.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "اختبارات وتصحيح سريع",
        text: "بنك أسئلة، اختبارات قصيرة، ونتائج فورية تساعدك تعرف مستوى الفصل.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
      },
    ],
    darkEyebrow: "تعلم أسرع",
    darkTitle: "ابدأ من المادة التي تحتاجها اليوم",
    darkText:
      "أضفنا مسارات مقترحة للمواد، حصص مباشرة قادمة، وتحديات أسبوعية حتى يرجع الطالب للمنصة بسبب واضح كل يوم.",
    subjects: ["الرياضيات", "الفيزياء", "اللغة العربية", "التصميم", "البرمجة", "اللغة الإنجليزية"],
  },
  en: {
    title: "Smart Learning Platform",
    titleAccent: "For Teachers and Students",
    subtitle:
      "Join thousands of teachers and students in an interactive learning journey with live classes, recorded lessons, smart quizzes, and clear student progress.",
    primary: "Start Learning Now",
    secondary: "Create Teacher Account",
    stats: [
      { value: "10K+", label: "Active students" },
      { value: "500+", label: "Expert teachers" },
      { value: "1000+", label: "Available courses" },
      { value: "50K+", label: "Live hours" },
    ],
    eyebrow: "Platform Ideas",
    ideasTitle: "Everything a teacher needs in one place",
    ideasIntro:
      "The home page guides students into learning while giving teachers a clear path to manage classes and content.",
    ideas: [
      {
        title: "Interactive Live Classes",
        text: "Live rooms for teaching, quick questions, and assignment uploads during class.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Smart Student Tracking",
        text: "Progress boards, alerts for students who fall behind, and ready reports for teachers.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Fast Quizzes and Grading",
        text: "Question banks, short tests, and instant results to understand each class level.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
      },
    ],
    darkEyebrow: "Learn Faster",
    darkTitle: "Start with the subject you need today",
    darkText:
      "Suggested learning paths, upcoming live classes, and weekly challenges give students a clear reason to return every day.",
    subjects: ["Mathematics", "Physics", "Arabic", "Design", "Programming", "English"],
  },
};

export default function Home() {
  const language = useStoredLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const text = content[language];
  const isArabic = language === "ar";

  return (
    <main className="bg-white text-slate-950" dir={isArabic ? "rtl" : "ltr"}>
      <section className="bg-[#eef5ff] px-5 pb-20 pt-20 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-normal text-slate-950 md:text-6xl">
            {text.title}
            <span className="block text-blue-600">{text.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">{text.subtitle}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/login"
              className="w-full rounded-xl bg-gradient-to-l from-violet-600 to-blue-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 sm:w-auto"
            >
              {text.primary}
            </Link>
            <Link
              href="/signup"
              className="w-full rounded-xl border-2 border-blue-600 bg-white px-9 py-4 text-base font-bold text-blue-600 hover:bg-blue-50 sm:w-auto"
            >
              {text.secondary}
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {text.stats.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-extrabold text-blue-600">{item.value}</p>
                <p className="mt-3 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold text-blue-600">{text.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-extrabold">{text.ideasTitle}</h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-600">{text.ideasIntro}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {text.ideas.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <Image src={item.image} alt="" width={900} height={480} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold text-blue-300">{text.darkEyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold">{text.darkTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">{text.darkText}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {text.subjects.map((subject) => (
              <div key={subject} className="rounded-xl border border-white/10 bg-white/10 p-5 text-center font-bold">
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
