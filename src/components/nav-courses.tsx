"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRightIcon } from "lucide-react"

export function NavCourses({
  courses,
}: {
  courses?: { name: string; modules: { name: string; url: string }[] }[]
}) {
  if (!courses?.length) return null

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Courses</SidebarGroupLabel>
      <SidebarMenu>
        {courses.map((course) => (
          <Collapsible key={course.name} defaultOpen>
            <SidebarMenuItem>
              <SidebarMenuButton className="font-medium">
                <span>{course.name}</span>
              </SidebarMenuButton>
              <SidebarMenuAction
                render={<CollapsibleTrigger />}
                className="data-open:rotate-90"
              >
                <ChevronRightIcon className="size-4" />
              </SidebarMenuAction>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {course.modules.map((mod) => (
                    <SidebarMenuSubItem key={mod.name}>
                      <SidebarMenuSubButton
                        render={<a href={mod.url} />}
                      >
                        <span>{mod.name}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
