import styled from 'styled-components'
import media from 'styled-media-query'

export const AuthInputFields = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.1rem;
  }
  input {
    background: #fbfbfb;
    padding: 0.6rem 1rem;
    border: 1px solid #c0c0c0;
    border-radius: 1px;
    width: 27rem;
    height: 50px;
    font-size: 1.1rem;
  }
  ${media.lessThan('medium')`
label {
  font-size: 1rem;
}
input {
  padding: 0.6rem 0.7rem;
  width: 26rem;
  font-size: 1rem;
}
`}
  ${media.lessThan('medium')`
label {
font-size: 1rem;
}
input {
padding: 0.6rem 0.5rem;
width: 24rem;
font-size: 0.9rem;
}
`}
`

export const Dot = styled.div`
  height: 12px;
  margin: 0.4rem 0.5rem;
  width: 12px;
  border-radius: 50%;
  background-color: #0072ce;
`

export const ErrorAlert = styled.div`
  height: 60px;
  display: ${props => props.display};
  transition: all 700ms;
  margin-bottom: 1rem;
  border-radius: 10px 10px 0px 0;
  background: red;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const AuthCards = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbfbfb;
  span {
    background: #fff;
    box-shadow: 0 2px 3px #c0c0c0;
    border-radius: 10px;
    section {
      padding: 1rem 1rem;
    }
  }
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
    border-radius : 2px;
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
    width: 27rem;
  }
  `}
  ${media.lessThan('small')`
  input {
    height: 45px;
    width: 23rem;
  }
  textarea {
    height: 10vh;
    width: 23rem;
  }
  `};
`

export const InputBody = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
  }
  input {
    font-size: 1rem;
    height: 50px;
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
  ${media.lessThan('medium')`
    input , textarea {
      width : 26rem;
    }
  `};
  ${media.lessThan('small')`
  input , textarea {
    width : 23rem;
  }
    `};
`

export const Title = styled.h4`
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-size: ${props => (props.small ? '1.2rem' : '1.3rem')};
  ${media.lessThan('huge')`
    font-size : 1.2rem;
  `}
  ${media.lessThan('large')`
  font-size : 1.15rem;
`}
`

export const MdTitle = styled.h3`
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-size: ${props => (props.small ? '1.3rem' : '1.4rem')};
  ${media.lessThan('medium')`
      font-size : 1.3rem;
    `};
  ${media.lessThan('small')`
      font-size : 1.1rem;
    `};
`

export const Text = styled.p`
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-size: 1rem;
  ${media.lessThan('large')` font-size : 0.9rem`};
  ${media.lessThan('medium')` font-size : 0.8rem`};
  ${media.lessThan('small')`font-size : 0.7rem`};
`

export const Button = styled.button`
  outline: 0px;
  border: 1px solid #0072ce;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: #0072ce;
  padding: 0.5rem 2rem;
  text-align: center;
  font-size: 0.9rem;
  border-radius: 3px;
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
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`

export const Card = styled.div`
  height: 40vh;
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
  width: 35rem;
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  display: flex;
  padding: 0.6rem 0.6rem;
  justify-content: space-between;
  background: #fff;
  input {
    color: #0072ce;
    padding: 0.2rem 1rem;
    background: transparent;
    width: 38rem;
    font-size: 1rem;
    outline: 0;
    border: 0;
  }
  div {
    color: #0072ce;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${media.lessThan('huge')`
  width  : 35rem;
input {
  padding : 0.2rem 1rem;
  width  : 35rem;
}
`};
  ${media.lessThan('large')`
  width  : 30rem;
input {
  padding : 0.2rem 1rem;
  width  : 30rem;
}
`};
  ${media.lessThan('medium')`
  width  : 27rem;
input {
  padding : 0.2rem 1rem;
  width  : 27rem;
}
`};
  ${media.lessThan('small')`
  width  : 23rem;
input {
  padding : 0.2rem 1rem;
  width  : 24rem;
}
`};
`

export const StyledSearchbox = styled(Searchbox)`
width  : 32rem;
border : 1.7px solid #0072CE;
border-radius : 30px;
display : flex;
background : #fff;
padding   : 0.5rem 0.5rem;
justify-content: space-between;
input {
    padding : 0.2rem 1rem;
    width  : 30rem
    outline : 0;
    color : #0072CE;
    border : 0;
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
