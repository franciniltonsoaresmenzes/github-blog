export interface Item {
  number: number
  url: string
  title: string
  id: number
  created_at: string
  body: string
  user: {
    login: string
  }
}

export interface ReposGithub {
  total_count: number
  items: Item[]
}
