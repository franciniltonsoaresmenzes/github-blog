import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Inputs } from '../../../../components/Inputs'
import { useContextSelector } from 'use-context-selector'
import { ReposGitHubContext } from '../../../../contexts/ReposGitHub'

const schemaQuery = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof schemaQuery>

export function SearchForm() {
  const queryRepos = useContextSelector(
    ReposGitHubContext,
    (context) => context.queryRepos,
  )

  const { register, handleSubmit, reset } = useForm<SearchFormType>({
    resolver: zodResolver(schemaQuery),
  })

  function handleNewQuery({ query }: SearchFormType) {
    queryRepos(query)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleNewQuery)}>
      <Inputs
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </form>
  )
}
