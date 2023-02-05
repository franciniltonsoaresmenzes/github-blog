import { Links, Title, Paragraph } from '../Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  AvartarProfile,
  CardProfileContainer,
  CardProfileHeader,
  CardProfileTags,
} from './styles'
import { useFetch } from '../../hooks/useUrlFetch'
import { UserGitHub } from '../../models/UserModel'

export function CardProfile() {
  const { data, isFetching } = useFetch<UserGitHub>(
    'users/franciniltonsoaresmenzes',
  )

  return (
    <CardProfileContainer>
      {!isFetching && <AvartarProfile src={data?.avatar_url} alt="" />}
      {!isFetching && (
        <div>
          <CardProfileHeader>
            <Title>{data?.name}</Title>
            <Links href={data?.html_url} target="_blank">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Links>
          </CardProfileHeader>
          <Paragraph>{data?.bio}</Paragraph>
          <footer>
            <CardProfileTags>
              <Paragraph as="span" variantColor="subtitle">
                <FontAwesomeIcon icon={faGithub} />
                {data?.login}
              </Paragraph>
              {data?.company && (
                <Paragraph as="span" variantColor="subtitle">
                  <FontAwesomeIcon icon={faBuilding} />
                  {data.company}
                </Paragraph>
              )}
              <Paragraph as="span" variantColor="subtitle">
                <FontAwesomeIcon icon={faUserGroup} />
                {data?.followers} seguidores
              </Paragraph>
            </CardProfileTags>
          </footer>
        </div>
      )}
    </CardProfileContainer>
  )
}
