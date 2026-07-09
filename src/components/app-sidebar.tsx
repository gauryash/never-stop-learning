"use client"

import * as React from "react"
import {
  BookOpen,
  Search,
  Sparkles,
  Home,
  Inbox,
  Calendar,
  Settings2,
  Blocks,
  Trash2,
  MessageCircleQuestion,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  teams: [
    {
      name: "Never Stop Learning",
      logo: <BookOpen />,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/never-stop-learning/",
      icon: <Home />,
      isActive: true,
    },
    {
      title: "Courses",
      url: "/never-stop-learning/courses",
      icon: <BookOpen />,
    },
    {
      title: "Search",
      url: "#",
      icon: <Search />,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: <Sparkles />,
    },
    {
      title: "Inbox",
      url: "#",
      icon: <Inbox />,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: <Calendar />,
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings2 />,
    },
    {
      title: "Templates",
      url: "#",
      icon: <Blocks />,
    },
    {
      title: "Trash",
      url: "#",
      icon: <Trash2 />,
    },
    {
      title: "Help",
      url: "#",
      icon: <MessageCircleQuestion />,
    },
  ],
  favorites: [
    {
      name: "JavaScript Fundamentals",
      url: "/never-stop-learning/courses/javascript-fundamentals",
      icon: <img src="/never-stop-learning/icons/vscode.svg" alt="" className="w-4 h-4" />,
    },
    {
      name: "React Deep Dive",
      url: "/never-stop-learning/courses/react-deep-dive",
      icon: <img src="/never-stop-learning/icons/react.svg" alt="" className="w-4 h-4" />,
    },
    {
      name: "System Design",
      url: "/never-stop-learning/courses/system-design",
      icon: <img src="/never-stop-learning/icons/architecture.svg" alt="" className="w-4 h-4" />,
    },
    {
      name: "CSS Mastery",
      url: "/never-stop-learning/courses/css-mastery",
      icon: <img src="/never-stop-learning/icons/figma.svg" alt="" className="w-4 h-4" />,
    },
    {
      name: "Python for Everyone",
      url: "/never-stop-learning/courses/python-for-everyone",
      icon: <img src="/never-stop-learning/icons/obsidian.svg" alt="" className="w-4 h-4" />,
    },
    {
      name: "Security Essentials",
      url: "/never-stop-learning/courses/security-essentials",
      icon: <img src="/never-stop-learning/icons/shield.svg" alt="" className="w-4 h-4" />,
    },
  ],
  workspaces: [
    {
      name: "Learning Tracks",
      emoji: "📚",
      pages: [
        {
          name: "Web Development",
          url: "/never-stop-learning/courses",
          emoji: "🌐",
        },
        {
          name: "Systems Programming",
          url: "/never-stop-learning/courses",
          emoji: "⚙️",
        },
        {
          name: "DevOps & Infrastructure",
          url: "/never-stop-learning/courses",
          emoji: "🔧",
        },
      ],
    },
    {
      name: "Projects",
      emoji: "🚀",
      pages: [
        {
          name: "Portfolio Website",
          url: "#",
          emoji: "💼",
        },
        {
          name: "CLI Tool",
          url: "#",
          emoji: "🛠️",
        },
        {
          name: "Open Source Contributions",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
