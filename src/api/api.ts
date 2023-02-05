import { api } from '../lib/axios'
import { RepoModel } from '../models/RepoModel'
import { ReposGithub } from '../models/ReposModel'
import { UserGitHub } from '../models/UserModel'

export async function fetchPerfil(user: string) {
  const response = await api.get<UserGitHub>(`users/${user}`)

  return response.data
}

export async function fetchRepositories(query?: string) {
  const response = await api.get<ReposGithub>('search/issues', {
    params: { q: query + 'repo:Ferreira94/github-blog' },
  })

  return response.data
}

export async function fetchRepositorio(repoId: string) {
  const response = await api.get<RepoModel>(
    `https://api.github.com/repos/Ferreira94/github-blog/issues/${repoId}`,
  )

  return response.data
}
