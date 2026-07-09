"use client"

import * as React from "react"
import {
  BookOpen,
  Terminal,
  AudioLines,
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
    {
      name: "Acme Inc",
      logo: <Terminal />,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: <AudioLines />,
      plan: "Startup",
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
      name: "Learning FPGAs",
      url: "/never-stop-learning/learning/learning-fpgas",
      emoji: "01",
    },
    {
      name: "Learning Rust",
      url: "/never-stop-learning/learning/learning-rust",
      emoji: "02",
    },
    {
      name: "Learning Docker",
      url: "/never-stop-learning/learning/learning-docker",
      emoji: "03",
    },
    {
      name: "Learning TypeScript",
      url: "/never-stop-learning/learning/learning-typescript",
      emoji: "04",
    },
    {
      name: "Learning Kubernetes",
      url: "/never-stop-learning/learning/learning-kubernetes",
      emoji: "05",
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
