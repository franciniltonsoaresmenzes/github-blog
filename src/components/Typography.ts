import styled from 'styled-components'

export const Links = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-family: 'Nunito';
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme.colors.brand.blue};
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.brand.blue};
  }
`

interface TitleProps {
  variantColor?: 'title'
  variantSize?: 'l'
}

export const Title = styled.h1<TitleProps>`
  font-weight: 700;
  font-size: ${({ theme, variantSize }) =>
    theme.textSize.title[variantSize ?? 'l']};
  line-height: 130%;

  color: ${({ theme, variantColor }) =>
    theme.colors.brand[variantColor ?? 'title']};
`

interface ParagraphProps {
  variantColor?: 'text' | 'subtitle'
  variantSize?: 'm'
}

export const Paragraph = styled.p<ParagraphProps>`
  font-weight: 400;
  font-size: ${({ theme, variantSize }) =>
    theme.textSize.text[variantSize ?? 'm']};
  line-height: 160%;

  color: ${({ theme, variantColor }) =>
    theme.colors.brand[variantColor ?? 'text']};
`
