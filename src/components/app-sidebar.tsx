"use client"

import * as React from "react"
import { BookOpen, Home } from "lucide-react"

import { NavNotes } from "@/components/nav-notes"
import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  team: {
    name: "Never Stop Learning",
    logo: <BookOpen />,
  },
  navMain: [
    {
      title: "Home",
      url: "/never-stop-learning/",
      icon: <Home />,
      isActive: true,
    },
    {
      title: "Notes",
      url: "/never-stop-learning/notes",
      icon: <BookOpen />,
    },
  ],
}

export function AppSidebar({
  notes,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  notes?: { name: string; modules: { name: string; url: string }[] }[]
}) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.team} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavNotes notes={notes} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
