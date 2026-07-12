"use client"

import * as React from "react"
import { BookOpen, Home } from "lucide-react"

import { NavCourses } from "@/components/nav-courses"
import { NavMain } from "@/components/nav-main"
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
  ],
  favorites: [
    {
      name: "Learning FPGAs",
      url: "/never-stop-learning/learning/learning-fpgas",
    },
  ],
}

export function AppSidebar({
  courses,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  courses?: { name: string; modules: { name: string; url: string }[] }[]
}) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavCourses courses={courses} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
