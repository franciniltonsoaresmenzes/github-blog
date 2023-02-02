import styled from 'styled-components'
import backgroundCover from '../../asset/cover.png'

export const DefaulLayoutHeader = styled.header`
  display: flex;
  justify-content: center;

  height: 18.5rem;
  width: 100%;

  background: ${() => `url(${backgroundCover})`} no-repeat center;
  background-size: cover;

  img {
    margin-top: 4rem;
    width: 148px;
    height: 98px;
  }
`

export const DefaulLayoutMain = styled.main`
  max-width: 56rem;

  padding-right: 1rem;
  padding-left: 1rem;

  margin-top: -88px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8rem;
`
