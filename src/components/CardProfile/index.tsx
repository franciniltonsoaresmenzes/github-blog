import avatarProfile from '../../asset/avatar.png'
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

export function CardProfile() {
  return (
    <CardProfileContainer>
      <AvartarProfile src={avatarProfile} alt="" />
      <div>
        <CardProfileHeader>
          <Title>Cameron Williamson</Title>
          <Links
            href="https://github.com/franciniltonsoaresmenzes/"
            target="_blank"
          >
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Links>
        </CardProfileHeader>
        <Paragraph>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass
        </Paragraph>
        <footer>
          <CardProfileTags>
            <Paragraph as="span" variantColor="subtitle">
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </Paragraph>
            <Paragraph as="span" variantColor="subtitle">
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </Paragraph>
            <Paragraph as="span" variantColor="subtitle">
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </Paragraph>
          </CardProfileTags>
        </footer>
      </div>
    </CardProfileContainer>
  )
}
