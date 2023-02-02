import styled from 'styled-components'

export const Inputs = styled.input`
  width: 100%;

  padding: 0.75rem 1rem;

  background-color: ${(props) => props.theme.colors.brand.input};
  border: 1px solid ${(props) => props.theme.colors.brand.border};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.brand.label};

  line-height: 1.6;
  font-size: ${(props) => props.theme.textSize.text.m};
  font-weight: 400;
`
