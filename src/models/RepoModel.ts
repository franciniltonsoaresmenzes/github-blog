export interface RepoModel {
  title: string
  body: string
  created_at: string
  comments: number
  user: {
    login: string
    html_url: string
    url: string
  }
}
