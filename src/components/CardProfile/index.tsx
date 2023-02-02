import avatarProfile from '../../asset/avatar.png'
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
          <h1>Cameron Williamson</h1>
          <a href="#">github</a>
        </CardProfileHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass
        </p>
        <footer>
          <CardProfileTags>
            <li>cameronwll</li>
            <li>Rocketseat</li>
            <li>32 seguidores</li>
          </CardProfileTags>
        </footer>
      </div>
    </CardProfileContainer>
  )
}
