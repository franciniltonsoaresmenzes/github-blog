import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
import { CardProfile } from '../../components/CardProfile'
import { Inputs } from '../../components/Inputs'
import { Paragraph, Title } from '../../components/Typography'
import { HomeGridCards, HomeSearchInput } from './styles'

export function Home() {
  return (
    <>
      <CardProfile />
      <HomeSearchInput>
        <div>
          <Title as="span" variantColor="subtitle" variantSize="s">
            Publicações
          </Title>
          <Paragraph as="span" variantColor="span" variantSize="s">
            6 publicações
          </Paragraph>
        </div>

        <Inputs type="text" placeholder="Buscar conteúdo" />
      </HomeSearchInput>

      <HomeGridCards>
        <Link to="post">
          <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeGridCards>
    </>
  )
}
