import { Link } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Card } from '../../components/Card'
import { CardProfile } from '../../components/CardProfile'
import { Paragraph, Title } from '../../components/Typography'
import { ReposGitHubContext } from '../../contexts/ReposGitHub'
import { SearchForm } from './components/SearchForm'
import { HomeGridCards, HomeSearchInput } from './styles'

export function Home() {
  const repositorios = useContextSelector(
    ReposGitHubContext,
    (context) => context.repositorios,
  )

  return (
    <>
      <CardProfile />
      <HomeSearchInput>
        <div>
          <Title as="span" variantColor="subtitle" variantSize="s">
            Publicações
          </Title>
          <Paragraph as="span" variantColor="span" variantSize="s">
            {repositorios.length} publicações
          </Paragraph>
        </div>
        <SearchForm />
      </HomeSearchInput>

      <HomeGridCards>
        {repositorios.map((repo) => (
          <Link to="post" key={repo.id}>
            <Card data={repo} />
          </Link>
        ))}
      </HomeGridCards>
    </>
  )
}
