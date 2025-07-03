"use client";
import Link from "next/link";
import { Home, Library, Settings } from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  active?: "dashboard" | string;
}

export function Sidebar({ active = "" }: SidebarProps) {
  const nav = [
    { href: "/", label: "Home", icon: Home, key: "dashboard" },
    { href: "/library", label: "Library", icon: Library, key: "library" },
    { href: "/settings", label: "Settings", icon: Settings, key: "settings" },
  ];

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col bg-white border-r border-gray-200">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center text-2xl font-bold">
          AI Tutor
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-2">
            {nav.map(({ href, label, icon: Icon, key }) => (
              <li key={key}>
                <Link
                  href={href}
                  className={clsx(
                    "flex items-center gap-x-3 rounded-md p-2 text-sm font-medium hover:bg-gray-100",
                    active === key
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
