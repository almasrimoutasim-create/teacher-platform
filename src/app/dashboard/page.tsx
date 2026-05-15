"use client";

import ProtectedLayout from "../../components/ProtectedLayout";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

type NavItem = {
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
  dot?: boolean;
};

const navGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "Main",
    items: [
      { label: "Home", icon: "M", active: true },
      { label: "Messages", icon: "C", badge: "5" },
      { label: "Schedule", icon: "S" },
    ],
  },
  {
    title: "Academic",
    items: [
      { label: "Online Course", icon: "O" },
      { label: "Assignment", icon: "A" },
      { label: "Discussion", icon: "D", dot: true },
      { label: "Announcement", icon: "N", dot: true },
    ],
  },
  {
    title: "Users",
    items: [
      { label: "Teachers", icon: "T" },
      { label: "Students", icon: "U" },
      { label: "Settings", icon: "G" },
    ],
  },
];

const week = [
  { day: "17", label: "Saturday", classes: "2 Class" },
  { day: "19", label: "Monday", classes: "3 Class" },
  { day: "20", label: "Wednesday", classes: "6 Class", active: true },
  { day: "21", label: "Thursday", classes: "3 Class" },
  { day: "22", label: "Friday", classes: "3 Class" },
];

const lessons = [
  { title: "Design Method", type: "Theory", time: "07.00 - 08.15", students: "24", color: "bg-orange-400", left: "0%" },
  { title: "Learning Figma", type: "Practice", time: "08.15 - 09.45", students: "32", color: "bg-amber-300", left: "21%" },
  { title: "Usability Heuristics", type: "Test", time: "09.59 - 11.15", students: "26", color: "bg-rose-300", left: "42%" },
  { title: "Nirmana", type: "Theory", time: "11.45 - 12.30", students: "16", color: "bg-cyan-400", left: "58%" },
  { title: "Design Thinking", type: "Theory", time: "12.45 - 13.45", students: "43", color: "bg-slate-800", left: "70%" },
  { title: "Illustration", type: "Practice", time: "13.50 - 15.50", students: "34", color: "bg-emerald-500", left: "82%" },
];

const assignments = [
  { title: "Create UI about Food Apps using Auto-Layout in Figma", status: "Completed", score: "50", progress: "34/34" },
  { title: "Drawing 3D Illustration with Motion on Blender Software", status: "In Progress", score: "100", progress: "38/47" },
];

const courses = [
  {
    title: "Introduction to UX",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Product Design? What's It?",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=900&q=80",
  },
];

const announcements = [
  { name: "Gerrard Wijaya", title: "Schedule Change for Design Test", time: "10.30", active: true },
  { name: "Tioman Stewart", title: "Caution for Slippery Floor", time: "08.30" },
  { name: "Rizki Setyawan", title: "Design Festival with Senior Designer", time: "07.30" },
];

const messages = ["Mark Stuntman", "James Clair", "Tulus Ngga", "Drew Boys", "Tobey Makuise", "Steve Nono"];

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-indigo-300 via-rose-300 to-amber-200"
        />
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const displayName = session?.user?.name || session?.user?.email || "Teacher";

  return (
    <ProtectedLayout allowedRoles={["teacher", "admin"]}>
      <div className="min-h-screen bg-[#ececec] p-3 text-neutral-950 sm:p-6">
        <div className="mx-auto grid max-w-[1380px] grid-cols-1 overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-black/10 lg:grid-cols-[260px_1fr]">
          <aside className="bg-[#111111] p-5 text-white lg:min-h-[calc(100vh-48px)]">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-rose-400" />
                <div>
                  <p className="font-semibold leading-tight">{displayName}</p>
                  <p className="text-xs text-white/55">Design Lecturer</p>
                </div>
              </div>
              <button className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-sm" aria-label="Notifications">
                !
              </button>
            </div>

            <nav className="space-y-7">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-xs font-medium text-white/70">{group.title}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        className={`flex h-12 w-full items-center justify-between rounded-lg px-4 text-left text-sm transition ${
                          item.active ? "bg-white/16 text-white" : "text-white/55 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="grid h-6 w-6 place-items-center rounded-md border border-white/20 text-[10px]">
                            {item.icon}
                          </span>
                          {item.label}
                        </span>
                        {item.badge && <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">{item.badge}</span>}
                        {item.dot && <span className="h-2 w-2 rounded-full bg-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="mt-10 flex h-12 w-full items-center gap-3 rounded-lg px-4 text-sm text-white/60 hover:bg-white/10 hover:text-white"
            >
              <span className="grid h-6 w-6 place-items-center rounded-md border border-white/20 text-[10px]">L</span>
              Logout
            </button>
          </aside>

          <main className="bg-[#f7f7f7] p-4 sm:p-6">
            <section className="grid gap-4 xl:grid-cols-[1fr_320px]">
              <div className="rounded-2xl bg-white p-5">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl font-bold">January, 2023</p>
                    <p className="text-sm text-neutral-500">Today&apos;s teaching schedule</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-neutral-400">Total Hours Today</p>
                    <p className="font-semibold text-blue-600">8h 48mnt</p>
                  </div>
                </div>

                <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {week.map((item) => (
                    <div
                      key={item.day}
                      className={`rounded-lg border p-4 ${item.active ? "border-blue-600 bg-blue-600 text-white" : "border-neutral-200 bg-white"}`}
                    >
                      <p className="text-xl font-bold">{item.day}</p>
                      <p className="mt-2 text-sm">{item.label}</p>
                      <p className={`mt-3 text-xs ${item.active ? "text-white/80" : "text-neutral-500"}`}>{item.classes}</p>
                    </div>
                  ))}
                </div>

                <div className="relative min-h-[210px] overflow-hidden rounded-xl border border-neutral-100 bg-[linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[length:16.66%_100%]">
                  <div className="absolute bottom-3 left-0 right-0 flex justify-between px-4 text-xs text-neutral-400">
                    {["07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00"].map((time) => (
                      <span key={time}>{time}</span>
                    ))}
                  </div>
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.title}
                      className={`absolute w-[132px] rounded-lg p-3 text-xs shadow-sm ${lesson.color} ${
                        lesson.color === "bg-slate-800" ? "text-white" : "text-neutral-950"
                      }`}
                      style={{ left: lesson.left, top: index % 2 === 0 ? 24 : 80 }}
                    >
                      <p className="font-semibold">{lesson.title}</p>
                      <p className="opacity-75">{lesson.type}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <AvatarStack />
                        <span>{lesson.students}</span>
                      </div>
                      <p className="mt-2 font-medium">{lesson.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold">Student&apos;s Assignment</h2>
                  <button className="text-xs text-neutral-400">View All</button>
                </div>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <article key={assignment.title} className="rounded-xl border border-neutral-200 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs text-neutral-400">Assigned Yesterday</span>
                        <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold text-lime-700">{assignment.status}</span>
                      </div>
                      <h3 className="font-semibold leading-snug">{assignment.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                        Review submissions, leave feedback, and track completion before the next studio critique.
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs">
                        <AvatarStack />
                        <span className="font-semibold text-blue-600">Score: {assignment.score}</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-neutral-100">
                        <div className="h-2 w-4/5 rounded-full bg-blue-600" />
                      </div>
                      <p className="mt-2 text-right text-xs">{assignment.progress}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr_320px]">
              <div className="rounded-2xl bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold">My Online Course</h2>
                  <button className="text-xs text-neutral-400">View All</button>
                </div>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <article key={course.title} className="overflow-hidden rounded-xl border border-neutral-200">
                      <Image src={course.image} alt="" width={900} height={360} className="h-32 w-full object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                          Practical design lessons, critique notes, and student progress for this week.
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold">Announcement</h2>
                  <button className="text-xs text-neutral-400">View All</button>
                </div>
                <div className="space-y-3">
                  {announcements.map((item) => (
                    <article key={item.title} className={`rounded-xl p-4 ${item.active ? "bg-blue-600 text-white" : "border border-neutral-200 bg-white"}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-200 to-rose-400" />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className={`text-xs ${item.active ? "text-white/70" : "text-neutral-400"}`}>Head of Design Division</p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold">{item.time}</span>
                      </div>
                      <h3 className="mt-3 font-semibold">{item.title}</h3>
                      <p className={`mt-2 text-xs leading-relaxed ${item.active ? "text-white/75" : "text-neutral-500"}`}>
                        Keep students updated with classroom notices, deadlines, and event reminders.
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold">Quick Messages</h2>
                  <span className="rounded-md bg-blue-600 px-2 py-1 text-xs text-white">5</span>
                </div>
                <div className="space-y-4">
                  {messages.map((name, index) => (
                    <div key={name} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-200 via-emerald-200 to-rose-300" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">{name}</p>
                        <p className="truncate text-xs text-neutral-500">I&apos;m sorry sir, probably I can&apos;t attend today.</p>
                      </div>
                      <div className="text-right text-xs">
                        <p>{["10.30", "09.30", "09.10", "08.10", "08.01", "07.30"][index]}</p>
                        <span className="ml-auto mt-1 block h-1.5 w-1.5 rounded-full bg-blue-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </ProtectedLayout>
  );
}
