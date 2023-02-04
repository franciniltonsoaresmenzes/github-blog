import styled from 'styled-components'

export const CardContainer = styled.article`
  max-width: 26rem;
  height: 16.25rm;
  margin: auto;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.brand.post};
  padding: 2rem;

  > header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    span {
      min-width: 53px;
    }
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.brand.label};
  }
`
