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

export const CardProfileTags = styled.div`
  margin-top: 1.5rem;

  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      color: ${(props) => props.theme.colors.brand.label};
      width: 18px;
      height: 18px;
    }
  }
`
