"use client";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Bot,
  Video,
  Edit3,
  HelpCircle,
  Book,
  Upload,
  Settings,
} from "lucide-react";

interface SidebarProps {
  active?: string;
}

const nav = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/exam-prep", icon: BookOpen, label: "Exam Prep" },
  { href: "/ai-tutor/cat", icon: Bot, label: "AI Tutor" },
  { href: "/video-mode", icon: Video, label: "Video Mode" },
  { href: "/practice", icon: Edit3, label: "Practice" },
  { href: "#", icon: HelpCircle, label: "Ask Tutor" },
  { href: "#", icon: Book, label: "Mock Examinations" },
  { href: "#", icon: Upload, label: "Upload" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ active }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 translate-x-0 bg-gray-900 text-white flex flex-col">
      <div className="flex items-center gap-2 px-6 pt-4 pb-4">
        <Bot className="h-6 w-6 text-indigo-400" />
        <span className="text-lg font-semibold tracking-tight">AI Tutor</span>
      </div>
      <nav className="flex-1 overflow-y-auto space-y-1 px-4 pb-6">
        {nav.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
              href === active
                ? "bg-white/10"
                : "hover:bg-white/10 text-white/80"
            }`}
          >
            <Icon className="h-4 w-4" /> {label}
          </Link>
        ))}
      </nav>
      {/* Gradient footer removed */}
    </aside>
  );
}
