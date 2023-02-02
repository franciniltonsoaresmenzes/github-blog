import styled from 'styled-components'

export const CardProfileContainer = styled.section`
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.theme.colors.brand.profile};

  max-width: 100%;
  padding: 2rem;

  display: flex;
  gap: 2rem;
`

export const AvartarProfile = styled.img`
  width: 148px;
  height: 148px;

  border-radius: 8px;
`
export const CardProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const CardProfileTags = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr,1f));
`
