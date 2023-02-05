import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Inputs } from '../../../../components/Inputs'
import { useMutation } from '@tanstack/react-query'
import { fetchRepositories } from '../../../../api/api'
import { queryClient } from '../../../../lib/react-query'
import { ReposGithub } from '../../../../models/ReposModel'

const schemaQuery = z.object({
  query: z.string().max(50, 'Muito grande!'),
})

type SearchFormType = z.infer<typeof schemaQuery>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(schemaQuery),
  })

  const { mutate } = useMutation({
    mutationFn: () => fetchRepositories(''),
    onSuccess: (data) => queryClient.setQueryData(['repos'], data),
  })

  async function handleNewQuery({ query }: SearchFormType) {
    if (query.length < 1) {
      mutate()
    }
    const data: ReposGithub = queryClient.getQueryData(['repos']) as ReposGithub

    const filter = data.items.filter((item) => item.title.includes(query))
    const newData = {
      total_count: filter.length,
      incomplete_results: !!filter.length,
      items: [...filter],
    }
    queryClient.setQueryData(['repos'], newData)
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
