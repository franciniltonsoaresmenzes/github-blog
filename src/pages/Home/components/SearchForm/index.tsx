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

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(schemaQuery),
  })

  async function handleNewQuery({ query }: SearchFormType) {
    await queryRepos(query)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleNewQuery)}>
      <Inputs
        type="text"
        placeholder="Buscar conteúdo"
        disabled={isSubmitting}
        {...register('query')}
      />
    </form>
  )
}
