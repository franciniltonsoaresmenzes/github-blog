import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
import { CardProfile } from '../../components/CardProfile'
import { Inputs } from '../../components/Inputs'
import { Paragraph, Title } from '../../components/Typography'
import { useFetch } from '../../hooks/useUrlFetch'
import { ReposGithub } from '../../models/ReposModel'
import { HomeGridCards, HomeSearchInput } from './styles'

export function Home() {
  const { data, isFetching } = useFetch<ReposGithub>('search/issues', {
    params: { q: 'Primeiros passo Reactjs' },
  })

  return (
    <>
      <CardProfile />
      <HomeSearchInput>
        <div>
          <Title as="span" variantColor="subtitle" variantSize="s">
            Publicações
          </Title>
          <Paragraph as="span" variantColor="span" variantSize="s">
            {data?.total_count} publicações
          </Paragraph>
        </div>

        <Inputs type="text" placeholder="Buscar conteúdo" />
      </HomeSearchInput>

      {!isFetching && (
        <HomeGridCards>
          {data?.items.map((repo) => (
            <Link to="post" key={repo.id}>
              <Card data={repo} />
            </Link>
          ))}
        </HomeGridCards>
      )}
    </>
  )
}
