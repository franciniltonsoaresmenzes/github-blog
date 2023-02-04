import styled from 'styled-components'

export const HomeSearchInput = styled.div`
  max-width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
`

export const HomeGridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;

  a {
    color: ${(props) => props.theme.colors.brand.text};
  }
`
