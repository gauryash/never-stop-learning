import { getCollection } from "astro:content"

export async function getNotesGroups() {
  const modules = await getCollection("learning")
  const map = new Map<string, { name: string; url: string }[]>()
  for (const m of modules) {
    const group = m.data.group ?? "General"
    if (!map.has(group)) map.set(group, [])
    map.get(group)!.push({ name: m.data.title, url: `/never-stop-learning/learning/${m.id}` })
  }
  return [...map.entries()].map(([name, modules]) => ({ name, modules }))
}
