import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Paragraph, Title } from '../Typography'
import { CardContainer } from './styles'

export interface Item {
  title: string
  created_at: string
  body: string
}

interface CardProps {
  data: Item
}

export function Card({ data }: CardProps) {
  return (
    <CardContainer>
      <header>
        <Title as="h2" variantSize="m">
          {data.title}
        </Title>
        <Paragraph as="span" variantColor="span" variantSize="s">
          {formatDistanceToNow(new Date(data.created_at), {
            addSuffix: true,
            locale: ptBr,
          })}
        </Paragraph>
      </header>

      <Paragraph>{data.body}</Paragraph>
    </CardContainer>
  )
}
