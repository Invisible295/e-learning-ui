"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  NotebookText,
  Users,
} from "lucide-react";

const COURSE_NAV_ITEMS = [
  { href: "/admin/courses", label: "Course Overview", icon: LayoutDashboard },
  { href: "#", label: "Course Content", icon: NotebookText },
  { href: "#", label: "Enrollments", icon: Users },
  { href: "#", label: "Schedule", icon: CalendarDays },
  { href: "#", label: "Instructors", icon: GraduationCap },
  { href: "#", label: "Analytics", icon: BarChart3 },
];

export default function CourseSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 bg-slate-50 p-4 md:flex md:flex-col dark:bg-slate-950">
      <div className="mb-6 px-2">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-container text-on-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight text-slate-900 dark:text-slate-100">
              Advanced Physics
            </h2>
            <p className="text-xs text-slate-500">PH-202</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {COURSE_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/admin/courses" &&
            pathname.startsWith("/admin/courses");

          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                isActive
                  ? "flex items-center gap-3 rounded-full bg-indigo-100 px-4 py-3 text-indigo-700 transition-all duration-150 translate-x-1 dark:bg-indigo-900/30 dark:text-indigo-300"
                  : "flex items-center gap-3 px-4 py-3 text-slate-500 transition-all hover:bg-indigo-50 hover:text-indigo-500 dark:text-slate-400"
              }
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4 bg-indigo-600 rounded-2xl text-white relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
            Resources
          </p>
          <p className="text-sm mb-3">Access lecture notes and lab manuals.</p>
          <button
            type="button"
            className="w-full py-2 bg-white text-indigo-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors"
          >
            View Resources
          </button>
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
      </div>
    </aside>
  );
}
