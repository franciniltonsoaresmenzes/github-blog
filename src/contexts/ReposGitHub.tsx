import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

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

interface ReposGitHubContextTypes {
  repositorios: Item[]
  queryRepos: (query?: string) => void
}

export const ReposGitHubContext = createContext({} as ReposGitHubContextTypes)

interface ReposGitHubProviderProps {
  children: ReactNode
}

export function ReposGitHubProvider({ children }: ReposGitHubProviderProps) {
  const [repositorios, setRepositorios] = useState<Item[]>([])

  const queryRepos = useCallback(async (query?: string) => {
    const response = await api.get<ReposGithub>('search/issues', {
      params: { q: query },
    })

    setRepositorios(response.data.items)
  }, [])

  useEffect(() => {
    queryRepos('Primeiros passo Reactjs')
  }, [])

  return (
    <ReposGitHubContext.Provider value={{ repositorios, queryRepos }}>
      {children}
    </ReposGitHubContext.Provider>
  )
}
