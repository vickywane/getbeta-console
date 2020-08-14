import styled from 'styled-components'

export const Title = styled.h4`
  text-align: ${props => props.align};
  font-size: ${props => (props.small ? '1.3rem' : null)};
`

export const Text = styled.p`
  text-align: ${props => props.align};
`

export const Button = styled.button`
  border: 1px solid #0072ce;
  background: #0072ce;
  padding: 0.5rem 2rem;
  text-align: center;
  border-radius: 5px;
  color: #fff;
`

export const Body = styled.div``

export const Hover = styled.div`
  &: hover {
    cursor: pointer;
  }
`
