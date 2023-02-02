import { Card } from '../../components/Card'
import { CardProfile } from '../../components/CardProfile'
import { Inputs } from '../../components/Inputs'
import { HomeGridCards, HomeSearchInput } from './styles'

export function Home() {
  return (
    <>
      <CardProfile />
      <HomeSearchInput>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>

        <Inputs type="text" placeholder="Buscar conteúdo" />
      </HomeSearchInput>

      <HomeGridCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeGridCards>
    </>
  )
}
