import styled from 'styled-components'

export const PostContent = styled.section`
  max-width: 54rem;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  a {
    color: ${({ theme }) => theme.colors.brand.blue};
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.brand.blue};
  }
  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre {
    background: ${({ theme }) => theme.colors.brand.post};
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
