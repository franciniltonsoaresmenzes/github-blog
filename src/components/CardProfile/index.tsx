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
import { useQuery } from '@tanstack/react-query'
import { fetchPerfil } from '../../api/api'
import { LoadingC } from '../Loading'

export function CardProfile() {
  const { data, isFetching } = useQuery({
    queryKey: ['perfil'],
    queryFn: () => fetchPerfil('franciniltonsoaresmenzes'),
    staleTime: 1000,
  })

  console.log(isFetching)

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
          {isFetching && <LoadingC />}
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
