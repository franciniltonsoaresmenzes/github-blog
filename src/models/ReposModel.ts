export interface Item {
  title: string
  id: number
  created_at: string
  body: string
}
export interface ReposGithub {
  total_count: number
  items: Item[]
}
