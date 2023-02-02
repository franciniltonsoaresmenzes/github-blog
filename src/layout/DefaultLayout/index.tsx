import logoGitHubBlog from '../../asset/logo.svg'
import { Outlet } from 'react-router-dom'
import { DefaulLayoutHeader, DefaulLayoutMain } from './styles'

export function DefaultLayout() {
  return (
    <>
      <DefaulLayoutHeader>
        <img src={logoGitHubBlog} alt="" />
      </DefaulLayoutHeader>
      <DefaulLayoutMain>
        <Outlet />
      </DefaulLayoutMain>
    </>
  )
}
