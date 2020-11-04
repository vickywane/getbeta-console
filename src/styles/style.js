import styled from 'styled-components'
import media from 'styled-media-query'

export const Alert = styled.div`
  color: #155724;
  height: 60px;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  background-color: #d4edda;
  border-color: #c3e6c;
  ${media.lessThan('small')`
      padding : 10px 10px;
      display : flex;
      height: 60px;
      flex-direction: column;
      align-items : center;
      span {
        opacity : 0;
      }
  `};
`

export const AuthInputFields = styled.div`
  margin: 1.5rem 0.5rem;
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
    font-size: 1rem;
  }
  ${media.lessThan('medium')`
  margin: 1rem 0.2rem;
  label {
    font-size: .95rem;
  }
input {
  height: 45px;
  padding: 0.6rem 0.7rem;
  width: 26rem;
  font-size: .9rem;
}
`}
  ${media.lessThan('small')`
  label {
  font-size: .95rem;
  }
  input {
  height : 42px;
  padding: 0.5rem 0.5rem;
  width: 19rem;
  font-size: 0.80rem;
  }
`}
`

export const PageHead = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #c0c0c0;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    flex-direction: row;
    width: 100%;
    jusitfy-content: space-between;
  }
  ${media.lessThan('medium')`
      height : 40px;
   `};
`

export const Dot = styled.div`
  height: 12px;
  margin: 0.4rem 0.5rem;
  width: 12px;
  border-radius: 50%;
  background-color: #0072ce;
  ${media.lessThan('medium')`
  height: 10px;
  width: 10px;
  margin: 0.3rem 0.3rem;

  `}
`

export const ErrorAlert = styled.div`
  height: 50px;
  display: ${props => props.display};
  transition: all 700ms;
  border-radius: 10px 10px 0px 0;
  background: ${props => (props.background ? props.background : 'red')};
  color: ${props => (props.color ? props.color : '#fff')};
  justify-content: center;
  align-items: center;
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
      padding: 0.8rem 1rem;
    }
  }
`

export const CreateCourseInputField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  label {
    font-size: .95rem;
  }
  select {
    background: transparent;
    font-size : .9rem;
    border : 1px solid #c0c0c0;
  }

  option {
    font-size : .9rem;
  }
  input {
    font-size : .9rem;
    height: 55px;
    width: 55rem;
    border: 1px solid #c0c0c0;
    border-radius : 2px;
    color: #000;
    padding: 0.5rem 1rem;
    outline: 0px;
  }
  textarea {
    font-size : .95rem;
    height: 15vh;
    width: 55rem;
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
  textarea {
    height: 10vh;
    width: 37rem;
    font-size : 1rem;
  }
  `};
  ${media.lessThan('large')`
  input {
    height: 50px;
    width: 100%;
    font-size : 0.9rem;
  }
  label {
    font-size: 1rem;
  }
  textarea {
    height: 10vh;
    width: 100%;
    font-size : 0.9rem;
  }
  `}
  ${media.lessThan('medium')`
  input {
    height: 50px;
    width: 100%;
  }
  textarea {
    height: 10vh;
    width: 100%;
  }
  `}
  ${media.lessThan('small')`
  margin : .7rem .4rem;
  label {
    font-size : .8rem;
  }
  input {
    height: 45px;
    width: 100%;
    font-size : .75rem;
  }
  textarea {
    height: 15vh;
    font-size : .75rem;
    width: 100%;
  }

    select {
      font-size : .8rem;
      border : 1px solid #c0c0c0;
    }

    option {
      font-size : .8rem;
    }
  `};
`

export const InputBody = styled.div`
  margin: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
  }
  input {
    font-size: 0.9rem;
    height: 55px;
    color: #000;
    background: transparent;
    padding: 0.6rem 1rem;
    border: 1.5px solid #c0c0c0;
    border-radius: 3px;
    width: auto;
    flex: 1;
  }
  textarea {
    background: transparent;
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
    font-size: 0.8rem;
    width : 100%;
  }
    `};
`

export const Title = styled.h4`
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-size: ${props => (props.small ? '1.1rem' : '1.2rem')};
  ${media.lessThan('huge')`
    font-size : 1rem;
  `}
  ${media.lessThan('large')`
  font-size : 1rem;
`}
  ${media.lessThan('medium')`
    font-size : 1rem;
  `};
  ${media.lessThan('small')`
    font-size : .85rem;
`};
`

export const MdTitle = styled.h4`
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-size: ${props => (props.small ? '1.3rem' : '1.4rem')};
  ${media.lessThan('medium')`
      font-size : 1.2rem;
    `};
  ${media.lessThan('small')`
      font-size : 1.1rem;
    `};
`

export const Text = styled.p`
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-size: ${props => (props.small ? '.8rem' : '.9rem')};
  font-family: Open Sans;
  ${media.lessThan('large')` font-size :  ${props => (props.small ? '.8rem' : '.9rem')}`};
  ${media.lessThan('small')`font-size : 0.75rem`};
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
     padding: 0.3rem 1rem;
     font-size : .85rem;
  `};
  ${media.lessThan('small')`
    padding: 0.3rem .7rem;
    height: 37px;
    font-size : .75rem;
`};
`

export const Body = styled.div`
  padding: 0.5rem 1.5rem;
  ${media.lessThan('medium')`
    padding : .5rem 1rem;
  `};
  ${media.lessThan('medium')`
    padding : .5rem .5rem;
  `};
`

export const Hover = styled.div`
  font-size: 1.3rem;
  &: hover {
    cursor: pointer;
  }
  ${media.lessThan('medium')`
   font-size : 1.2rem;
  `};
  ${media.lessThan('small')`
  font-size : 1rem;
 `};
`

export const SmallUserImage = styled.img`
  height: ${props => (props.small ? '37px' : '60px')};
  width: ${props => (props.small ? '37px' : '60px')};
  border-radius: 50%;
  border: 2px solid #0072ce;
  object-fit: cover;
`

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  ${media.lessThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  `};
  ${media.lessThan('medium')`
      place-items : center;
  `};
  li {
    list-style: none;
  }
  ${media.lessThan('small')`
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  `};
`

export const Card = styled.div`
  height: 40vh;
  width: 25rem;
  box-shadow: 0 3px 4px #c0c0c0;
  border-radius: 5px;
  img {
    height: 150px;
    width: 400px;
    object-fit: cover;
  }
  h4 {
    font-weight: 500;
    font-size: 1.3rem;
  }
  div {
    padding: 1rem 1rem;
  }
  ${media.lessThan('large')`
  height: 40vh;
  width: 24rem;
   img {
    height: 150px;
    width: 380px;
    object-fit: cover;
  }
  h4 {
    font-weight: 500;
    font-size: 1.1rem;
  }
`};
  ${media.lessThan('small')`
    height: 40vh;
    width: 20rem;
    img {
    height: 140px;
      width: 19rem;
    }
    h4 {
      font-weight: normal;
      font-size : 1.1rem;
    }
  `};
`

export const HomeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin: 1rem 0;
  }
`

export const Searchbox = styled.div`
  width: 35rem;
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  display: flex;
  padding: 0.4rem 0.6rem;

  justify-content: space-between;
  background: transparent;
  input {
    color: #0072ce;
    padding: 0.2rem 1rem;
    background: transparent;
    width: 38rem;
    font-size: 0.9rem;
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
  padding: 0.4rem 0.6rem;
  width  : 21rem;
  input {
    padding : 0.2rem .7rem;
    width  : 100%;
    font-size : .8rem;
  }
`};
`

export const StyledSearchbox = styled(Searchbox)`
width  : 32rem;
border : 1.7px solid #0072CE;
border-radius : 30px;
display : flex;
background : #c1cfe3;
padding   : 0.5rem 0.5rem;
justify-content: space-between;
input {
    padding : 0.2rem 1rem;
    width  : 30rem
    outline : 0;
    color : #0072CE;
    border : 0;
  }
  ${media.lessThan('medium')`
  width  : 24rem;
  padding : 0.5rem 0.5rem;
  input {
  border-radius : 15px;
    font-size : 0.8rem;
    padding : 0.2rem 0.5rem;
    width  : 23rem
  }
  `};
  ${media.lessThan('small')`
  width  : 100%;
  padding : 0.4rem 0.5rem;
  input {
    font-size : 0.8rem;
    padding : 0.2rem 0.5rem;
    width  : 90%;
  }
  `};
`

export const StyledHover = styled(Hover)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 5px;
  color: #0072ce;
  background: transparent;
  margin: 0 1rem;
  transition: all 400ms;
  font-size: 1.4rem;
  &: hover {
    cursor: pointer;
    color: #fff;
    background: #0072ce;
  }
  ${media.lessThan('medium')`
    margin: 0 .5rem;
    font-size : 1.3rem;
    border-radius: 2px;
    &: hover {
      cursor: pointer;
      background: transparent;
      color: #0072ce;
    }
  `};
  ${media.lessThan('small')`
    margin: 0 .5rem;
    font-size : 1.15rem;
    border-radius: 2px;
    `};
`

export const Section = styled.section`
  padding: 1.5rem 3rem;
  ${media.lessThan('large')`
  padding: 1.5rem 2rem;
`};
  ${media.lessThan('medium')`
    padding: 1.5rem 1rem;
  `};
  ${media.lessThan('small')`
  padding: 1rem 0.2rem;
  `};
`

export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
