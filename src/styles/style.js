import styled from 'styled-components'

export const InputBody = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
  }
  input {
    font-size: 0.9rem;
    height: 55px;
    background: #fbfbfb;
    padding: 0.6rem 1rem;
    border: 1px solid #0072ce;
    border-radius: 1px;
    width: 30rem;
  }
  textarea {
    background: #fbfbfb;
    font-size: 0.9rem;
    height: 10vh;
    padding: 0.6rem 1rem;
    border: 1px solid #0072ce;
    border-radius: 1px;
    width: 30rem;
  }
`

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
  outline: 0px;
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
  height: auto;
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

export const HomeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin: 2rem 0;
  }
`

export const Searchbox = styled.div`
width  : 42rem;
border : 1px solid #c0c0c0;
border-radius : 3px;
display : flex;
padding   : 0.5rem 0.6rem;
justify-content: space-between;
background : #fff;
input {
    color : #0072ce;
    padding : 0.2rem 1rem;
    background : transparent;
    width  : 42rem
    font-size: 1rem;
    outline : 0;
    border : 0;
  }
  div {
    color : #0072ce;
    display  : flex;
    justify-content : center;
    align-items : center;
  }
`

export const StyledHover = styled(Hover)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.7rem;
  border-radius: 5px;
  color: #0072ce;
  background: transparent;
  margin: 0 1rem;
  transition: all 400ms;
  &: hover {
    cursor: pointer;
    color: #fff;
    background: #0072ce;
  }
`

export const Section = styled.section`
  padding: 2rem 0.5rem;
`
