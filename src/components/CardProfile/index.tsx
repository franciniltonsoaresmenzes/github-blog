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
            <span>cameronwll</span>
            <span>Rocketseat</span>
            <span>32 seguidores</span>
          </CardProfileTags>
        </footer>
      </div>
    </CardProfileContainer>
  )
}
