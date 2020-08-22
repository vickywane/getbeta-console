import styled from 'styled-components'

export const Title = styled.h4`
  font-weight : ${props => props.weight};
  text-align: ${props => props.align};
  color: ${props => props.color}
  font-size: ${props => (props.small ? '1.3rem' : null)};
`

export const Text = styled.p`
  text-align: ${props => props.align};
  color: ${props => props.color};
`

export const Button = styled.button`
  border: 1px solid #0072ce;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const SmallUserImage = styled.img`
  height: ${props => (props.small ? '45px' : '60px')};
  width: ${props => (props.small ? '45px' : '60px')};
  border-radius: 50%;
  border: 2px solid #0072ce;
  object-fit: cover;
`

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 3rem 2rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`

export const Card = styled.div`
  height: 28vh;
  width: 25rem;
  box-shadow: 0 3px 4px #c0c0c0;
  border-radius: 5px;
  h4 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  div {
    padding: 1rem 1rem;
  }
`
