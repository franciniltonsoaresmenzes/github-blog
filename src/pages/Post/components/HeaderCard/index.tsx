import { Links, Title, Paragraph } from '../../../../components/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  CardProfileContainer,
  CardProfileHeader,
  CardProfileTags,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../../../hooks/useUrlFetch'
import { UserGitHub } from '../../../../models/UserModel'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface HeaderCardProps {
  user: string | null
  title: string
  date: string
  commnent: number
}

export function HeaderCard({ user, title, date, commnent }: HeaderCardProps) {
  const navigate = useNavigate()

  const { data } = useFetch<UserGitHub>(`users/${user}`)
  return (
    <CardProfileContainer>
      <CardProfileHeader>
        <Links target="_blank" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </Links>
        <Links href={data?.html_url} target="_blank">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Links>
      </CardProfileHeader>

      <Title>{title}</Title>
      <footer>
        <CardProfileTags>
          <Paragraph as="span" variantColor="subtitle">
            <FontAwesomeIcon icon={faGithub} />
            {data?.login}
          </Paragraph>
          <Paragraph as="span" variantColor="subtitle">
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDistanceToNow(new Date(date), {
              addSuffix: true,
              locale: ptBr,
            })}
          </Paragraph>
          <Paragraph as="span" variantColor="subtitle">
            <FontAwesomeIcon icon={faComment} />
            {commnent} comentários
          </Paragraph>
        </CardProfileTags>
      </footer>
    </CardProfileContainer>
  )
}
