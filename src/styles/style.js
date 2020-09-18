import styled from 'styled-components'
import media from 'styled-media-query'

export const Dot = styled.div`
  height: 12px;
  margin: 0.4rem 0.5rem;
  width: 12px;
  border-radius: 50%;
  background-color: #0072ce;
`

export const CreateCourseInputField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  label {
    font-size: 1.2rem;
  }
  input {
    height: 55px;
    width: 60rem;
    border: 1px solid #c0c0c0;
    color: #000;
    padding: 0.5rem 1rem;
    outline: 0px;
  }
  textarea {
    height: 10vh;
    width: 60rem;
    border: 1px solid #c0c0c0;
    color: #000;
    padding: 0.5rem 1rem;
    outline: 0px;
  }
  ${media.lessThan('huge')`
  input {
    height: 50px;
    font-size : 1rem;
    width: 37rem;
  }
  label {
    font-size: 1.1rem;
  }
  textarea {
    height: 10vh;
    width: 37rem;
    font-size : 1rem;

  }
  `};
  ${media.lessThan('large')`
  input {
    height: 50px;
    width: 33rem;
    font-size : 0.9rem;
  }
  label {
    font-size: 1rem;
  }
  textarea {
    height: 10vh;
    width: 33rem;
    font-size : 0.9rem;
  }
  `}
  ${media.lessThan('medium')`
  input {
    height: 50px;
    width: 27rem;
  }
  textarea {
    height: 10vh;
    width: 26rem;
  }
  `}
`

export const InputBody = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
  }
  input {
    font-size: 1rem;
    height: 55px;
    color: #000;
    background: #b0cfea;
    padding: 0.6rem 1rem;
    border: 1.5px solid #0072ce;
    border-radius: 3px;
    width: 30rem;
  }
  textarea {
    background: #b0cfea;
    font-size: 1rem;
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
  font-family : Montserrat-Medium;
  color: ${props => props.color}
  font-size: ${props => (props.small ? '1.3rem' : null)};
  ${media.lessThan('huge')`
    font-size : 1.2rem;
  `}
  ${media.lessThan('large')`
  font-size : 1.1rem;
`}

${media.lessThan('medium')`
font-size : 1.05rem;
`}

`

export const MdTitle = styled.h3`
    font-weight : ${props => props.weight};
    text-align: ${props => props.align};
    font-family : Montserrat-Medium;
    color: ${props => props.color}
    font-size: ${props => (props.small ? '1.5rem' : null)};
    ${media.lessThan('medium')`
      font-size : 1.3rem;
    `};
`

export const Text = styled.p`
  text-align: ${props => props.align};
  color: ${props => props.color};
  ${media.lessThan('medium')`0.8rem`};
  ${media.lessThan('small')`0.7rem`};
`

export const Button = styled.button`
  outline: 0px;
  border: 1px solid #0072ce;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #0072ce;
  padding: 0.5rem 2rem;
  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  color: #fff;
  ${media.lessThan('large')`
     padding: 0.3rem 1.2rem;
     font-size : 1rem;
  `};
  ${media.lessThan('small')`
    padding: 0.3rem 1rem;
`};
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
  padding: 1.5rem 0.5rem;
`

export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
