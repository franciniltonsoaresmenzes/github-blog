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

export function HeaderCard() {
  const navigate = useNavigate()
  return (
    <CardProfileContainer>
      <CardProfileHeader>
        <Links target="_blank" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </Links>
        <Links
          href="https://github.com/franciniltonsoaresmenzes/"
          target="_blank"
        >
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Links>
      </CardProfileHeader>

      <Title>JavaScript data types and data structures</Title>
      <footer>
        <CardProfileTags>
          <Paragraph as="span" variantColor="subtitle">
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </Paragraph>
          <Paragraph as="span" variantColor="subtitle">
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </Paragraph>
          <Paragraph as="span" variantColor="subtitle">
            <FontAwesomeIcon icon={faComment} />5 comentários
          </Paragraph>
        </CardProfileTags>
      </footer>
    </CardProfileContainer>
  )
}
