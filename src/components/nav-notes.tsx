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

export function NavNotes({
  notes,
}: {
  notes?: { name: string; modules: { name: string; url: string }[] }[]
}) {
  if (!notes?.length) return null

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Notes</SidebarGroupLabel>
      <SidebarMenu>
        {notes.map((group) => (
          <Collapsible key={group.name} defaultOpen>
            <SidebarMenuItem>
              <SidebarMenuButton className="font-medium">
                <span>{group.name}</span>
              </SidebarMenuButton>
              <SidebarMenuAction
                render={<CollapsibleTrigger />}
                className="data-open:rotate-90"
              >
                <ChevronRightIcon className="size-4" />
              </SidebarMenuAction>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {group.modules.map((mod) => (
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
