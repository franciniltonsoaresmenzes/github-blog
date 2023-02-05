import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchRepositories } from '../../api/api'
import { Card } from '../../components/Card'
import { CardProfile } from '../../components/CardProfile'
import { Paragraph, Title } from '../../components/Typography'
import { SearchForm } from './components/SearchForm'
import { HomeGridCards, HomeSearchInput } from './styles'

export function Home() {
  const { data } = useQuery({
    queryKey: ['repos'],
    queryFn: () => fetchRepositories(''),
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
            {data?.items.length} publicações
          </Paragraph>
        </div>
        <SearchForm />
      </HomeSearchInput>

      <HomeGridCards>
        {data?.items.map((repo) => (
          <Link to={`post/${repo.number}`} key={repo.id}>
            <Card data={repo} />
          </Link>
        ))}
      </HomeGridCards>
    </>
  )
}
