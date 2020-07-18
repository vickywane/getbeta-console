import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'
import media from 'styled-media-query'
import { Image, Modal } from 'react-bootstrap'

import img from '../assets/images/test.png'

// Todo: Refactor & compress file !!

export const HoverCircle = styled.div`
  padding: 1rem 1.2rem;
  margin: 0.2rem 0.7rem;
  border-radius: 50%;
  transition: all 350ms;
  border: 1px solid grey;
  &: hover {
    color: #fff;
    border: 1px solid #fff;
  }
`

export const MediaLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  li {
    margin: 0rem 0.5rem;
    list-style: none;
    a {
      text-align: center;
    }
    &: hover {
      color: ${props => props.hoverColor};
    }
  }
`

export const MessageInputBody: any = styled.div`
  display: flex;
  margin: 0rem 1rem;
  justify-content: space-between;
  input {
    border: 1px solid #c0c0c0;
    padding: 0.7rem 1rem;
    display: flex;
    font-size: 1rem;
    flex: 1;
    width: auto;
    margin: 0rem 1rem;
    height: auto;
    outline: 0px;
    border-radius: 5px;
  }
  div {
    border: 1px solid #c0c0c0;
    border-radius: 50%;
    margin: 0rem 0.5rem;
    padding: 0.7rem 0.7rem;
  }
  &: hover {
    div {
      cursor: pointer;
      background: #fbfbfb;
    }
  }
`

const Head = styled.div`
  padding: ${props => (props.header ? ' 1em 0.5rem' : '1em 1.5rem')};
  border-bottom: 0.3px solid #c0c0c0;
  background: ${props => (props.header ? '#fbfbfb' : '#401364')};
  color: ${props => (props.header ? '#000' : '#fff')};
  display: flex;
  justify-content: ${props => (props.noFlex ? null : 'space-between')};
  ${media.lessThan('large')`
  padding: ${props => (props.header ? ' 0.7em 0.5rem' : '1em 1rem')};
  `};
`
// filter: Blur ? "grayscale(80%) blur(2px)" : "grayscale(0%) blur(0px)",
const Body = styled.div`
  padding: 1em;
`

const Button = styled.button`
  background: ${props => (props.transparent ? 'transparent' : '#0e2f5a')};
  border-radius: 5px;
  height: auto;
  outline: 0px;
  transition: all 400ms;
  border: ${props => (props.transparent ? ' 1px solid #000' : ' 1px solid #0e2f5a')};
  color: ${props => (props.transparent ? '#0e2f5a' : '#fff')};
  margin: 0 1em;
  padding: ${props => (props.long ? '0.50em 3.5em' : '0.50em 1.5em')};
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`

const Bounce = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    textAlign: 'center'
  },
  hover: {
    scale: 1.05
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
})

const List = styled.li`
  list-style: none;
`

// background: ${props => (props.grey ? "#F3F3F3" : "transparent")};
const Contain = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  filter: ${props => (props.filtered ? 'grayscale(80%) blur(2px)' : null)};
  padding: ${props => (props.bottomPadding ? '2rem 3rem' : '0rem 5rem')};
  box-shadow: ${props => (props.bottomShadow ? '0px 1px 3px grey' : null)};
  ${media.lessThan('huge')`
  padding: ${props => (props.bottomPadding ? '1rem 3rem' : '0.5em 2rem')} ;
  `};
  ${media.lessThan('large')`
  padding: ${props => (props.bottomPadding ? '1rem 3rem' : '0.5em 1.5rem')} ;
  `};
  ${media.lessThan('medium')`
  padding: 1.5em 0.5rem;
  `};
  ${media.lessThan('small')`
  paddingt: 0.4em 0.4rem;
  `};
`

const Section = styled.h5`
  font-weight: 500px;
`

const Detail = styled.div`
  padding-left: 5px;
`

const Hover = styled.div`
  cursor: pointer;
  color: ${props => (props.white ? '#fff' : null)};
  margin: ${props => (props.margined ? '0rem 0.8rem' : null)};
  padding: ${props => (props.margined ? '0.7rem 0.8rem' : null)};
  transition: all 200ms;
  border-radius: ${props => (props.borderedRound ? '50%' : null)};
  &: hover {
    background: ${props => props.background};
  }
`

const ModalInput = styled.input`
  padding: ${props => (props.input ? '0.1rem 0.7rem' : '0.2rem 0.5rem')};
  outline: 0px;
  width: ${props => (props.input ? '18rem' : '12rem')};
  border: 0px;
`

const Input = styled.input`
  height: ${props => (props.long ? '10vh' : '40px')};
  width: auto;
  padding: 0.8em 1.5rem;
  display : flex;
  flex: 1;
  border: ${props => (props.unbordered ? '0px' : ' 1px solid #c0c0c0')};
  outline: 0px;
  color: ${props => (props.white ? '#fff' : '#000')}
  margin: ${props => (props.unmargined ? '0rem' : '0.4rem 1rem')};
  padding-left: 10px;
  border-radius: 3px;
  font-size: 1.1rem;
  transition: all 300ms;
  background: ${props => (props.transparent ? 'transparent' : null)};
    ${media.lessThan('huge')`
    width: ${props => (props.wide ? '60rem' : 'auto')};
    `};
    ${media.lessThan('large')`
  width: ${props => (props.wide ? '60rem' : 'auto')};
  `};
  ${media.lessThan('medium')`
  width: ${props => (props.wide ? '52rem' : 'auto')};
  `};
  ${media.lessThan('small')`
  width: ${props => (props.wide ? '52rem' : 'auto')};
  `};
  &: hover {
    box-shadow: ${props => (props.unbordered ? null : '1px 1px 1px 1px #084482')} ;
    border: ${props => (props.unbordered ? null : '1px solid #084482')}  ;
  }
`

const FormInput = styled.input`
  height: ${props => (props.long ? '10vh' : '50px')};
  width: ${props => (props.wide ? '52rem' : '30em')};
  padding: 0.5em;
  border: ${props => (props.unbordered ? '0px' : ' 1px solid grey')};
  outline: 0px;
  color: ${props => (props.white ? '#fff' : '#000')}
  margin: ${props => (props.unmargined ? '0rem' : '0.4rem 1rem')};
  padding-left: 10px;
  border-radius: 4px;
  font-size: 1.1rem;
  background: ${props => (props.transparent ? 'transparent' : null)};
    ${media.lessThan('large')`
  width: ${props => (props.wide ? '46rem' : '27em')};
  font-size: 1rem;
  `};
  ${media.lessThan('medium')`
  width: ${props => (props.wide ? '28rem' : '27em')};
  font-size: 1rem;
  `};
  ${media.lessThan('small')`
  width: ${props => (props.wide ? '52rem' : '25em')};
  font-size: 1rem;
  `};
`

const BigInput = styled.textarea`
  padding: 1.5rem 1.5rem;
  margin: 0.5rem 1rem;
  height: 35vh;
  display: flex;
  line-height: 1.9rem;
  word-spacing: 0.3rem;
  flex: 1;
  width: ${props => (props.small ? 'auto' : 'auto')};
  border-radius: 7px;
  border: 1px solid grey;
  outline: 0px;
  font-size: 1.1rem;
  ${media.lessThan('large')`
  width: ${props => (props.small ? 'auto' : 'auto')};
  font-size: 1.1rem;
  `};
  ${media.lessThan('medium')`
 width: ${props => (props.small ? 'auto' : 'auto')};
  font-size: 1rem;
  `};
  ${media.lessThan('small')`
  width: ${props => (props.small ? 'auto' : 'auto')};
  font-size: 1rem;
  `};
`

const Text: any = styled.p`
  text-align: ${props => (props.center ? 'center' : null)};
  font-size: ${props => (props.small ? '1.1rem' : '1.2rem')};
  color: ${props => props.color};
  font-weight: ${props => (props.bold ? '600' : 'normal')};
`

const UploadBtn = styled.button`
  background: #1a1c28;
  text-align: right;
  border-radius: 30px;
  height: 40px;
  outline: 0px;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 2em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`

const getColor = props => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isDragActive) {
    return '#2196f3'
  }
  return '#eeeeee'
}

const UploadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => (props.unpadded ? '1em 1rem' : '2rem')};
  border: ${props => (props.upload ? `7px solid ${getColor(props)}` : '7px solid #eeeeee')};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  margin: 2em;
  border-radius: 10px;
  transition: border 0.24s ease-in-out;
`

const Title = styled.h5`
  padding-left: ${props => (props.small ? '3px' : '15px')};
  padding-right: 10px;
  cursor : ${props => (props.pointer ? 'pointer' : null)}
  color: ${props => (props.active ? '#FF5F00' : '#0e2f5a')};
  text-align: ${props => (props.center ? 'center' : null)};
  font-size: ${props => (props.small ? '1.6rem' : '1.8rem')};
  font-weight: ${props => (props.bold ? '500px' : 'normal')};
  ${media.lessThan('large')`
  font-size: ${props => (props.small ? '1.4rem' : '2rem')};
  `};
  ${media.lessThan('medium')`
  font-size: ${props => (props.small ? '1.3em' : '2em')};
`};
  ${media.lessThan('small')`
  font-size: ${props => (props.small ? '1.2em' : '2em')};
`};
`

const Label = styled.p`
padding-left: 10px
font-weight: 400;
font-size: ${props => (props.small ? '1.3rem' : '1.2rem')};
${media.lessThan('large')`
font-size: ${props => (props.small ? '1.1rem' : '1.3rem')};
  `};
  ${media.lessThan('medium')`
 font-size: ${props => (props.small ? '1rem' : '1.3rem')};
`};
  ${media.lessThan('small')`
 font-size: ${props => (props.small ? '1rem' : '1.3rem')};
`};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2.5rem 1.5rem;
  ${media.lessThan('huge')`
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
     grid-gap: 2rem 1rem;
  `};
  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      grid-gap: 2rem 1rem;
  `};
`

const CustomImage = styled(Image)`
  height: auto;
  width: ${props => (props.small ? '25rem' : null)};
  transition: transform 1s;
  &: hover {
    cursor: pointer;
    transform: translateY(-25px);
  }
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 0.3rem;
  grid-auto-rows: auto;
  img {
    width: 30rem;
  }
`

const Card = styled.div`
  place-items: center;
  width: ${props => (props.team ? '22em' : '30em')};
  border-radius: ${props => (props.team ? '7px' : '5px')};
  padding: 0.7rem 0.5rem;
  margin: 1rem;
  box-shadow: 0px 2px 6px grey;
  background: transparent;
  color: black;
  cursor: pointer;
  height: auto;
  ${media.lessThan('large')`
    margin : 0.7rem;
    height: ${props => (props.team ? 'auto' : 'auto')};
    width: ${props => (props.team ? '22em' : '25em')};
  `};
  ${media.lessThan('medium')`
    margin : 0.7rem;
    height: ${props => (props.team ? 'auto' : 'auto')};
    width: ${props => (props.team ? '22em' : '28em')};
`};
  ${media.lessThan('small')`
    height: ${props => (props.team ? 'auto' : 'auto')};
    width: ${props => (props.team ? '22em' : '15em')};
`};
`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 1rem 1rem;
  ${media.lessThan('huge')`
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
`};
  ${media.lessThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`};
  ${media.lessThan('medium')`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  padding : 0rem 3rem;
`};
`

const Notification = styled.div`
  padding: 0.5rem 1rem;
  background: ${props => props.color};
  color: ${props => (props.white ? '#fff' : '#000')};
`

const Switch = styled.div`
  padding: 0rem 0rem;
  border: 2.5px solid #401364;
  width: auto;
  background: transparent;
  transition: transform 2s;
  border-radius: 6px;
  &: hover {
    transform: ease-in;
  }
  ${media.lessThan('large')`
    width:   auto;
    border-radius: 2.5px;
    border: 1.5px solid #401364;
  `};
  ${media.lessThan('medium')`
    width:  auto;
    border-radius: 2.5px;
  border: 1.5px solid #401364;
`};
  ${media.lessThan('small')`
   width:  auto;
    border-radius: 2.5px;
  border: 1px solid #401364;
`};
`

const SwitchBtn = styled.div`
  padding: 0.6rem 4rem;
  border: 0px;
  background: ${props => (props.active ? '#401364' : 'transparent')};
  color: ${props => (props.active ? '#fff' : '#401364')};
  outline: none;
  font-weight: bold;
  transition: all 600ms;
  font-size: 1.1rem;
  &: hover {
    cursor: pointer;
    background: #401364;
    color: #fff;
  }
  ${media.lessThan('medium')`
      padding: 0.5rem 2.25rem;
`};
  ${media.lessThan('small')`
       padding: 0.5rem 1.6rem;
`};
`

const InputBox = styled.div`
  padding: ${props => (props.padded ? '0.5rem 2rem' : '0.1rem 1rem')};
  border: ${props => (props.modal ? '1px solid #0e2f5a' : '1px solid #fff')};
  border-radius: 5px;
  height: auto;
  width: auto;
`

// HEADER STYLES =================>
const Header = styled.nav`
  padding: 1em 3rem;
  background: #401364;
  position: fixed;
  width: 100%;
  ${media.lessThan('large')`
   padding: 1rem 2rem;
`};
  ${media.lessThan('medium')`
    padding: 0.6rem 1rem;
    height : auto
`};
  ${media.lessThan('small')`
     padding: 0.6rem 1rem;
`};
`

const HeaderLinks = styled.a`
  text-decoration: none;
  font-size: 1.8rem;
`

const FormCard = styled.div`
  box-shadow: 0px 3px 4px grey;
  padding: 0rem 0.5rem;
  background: #fff;
  border-radius: 5px;
`

const Border = styled.div`
  padding: 0.1rem 1rem;
  border: 0px;
  margin: 0.7rem 0rem;
  color: #fff;
  border-radius: 5px;
  background: #100e17;
  &: hover {
    cursor: pointer;
  }
`

const CustomModal = styled(Modal)`
  margin-top: 5%;
`

const ScheduleCard = styled.div`
  background: #fff;
  box-shadow: 0px 3px 4px grey;
  width: ${props => (props.talk ? '27.5rem' : '100%')};
  margin: ${props => (props.talk ? '0ren 1ren' : null)};
  padding: ${props => (props.padded ? '1rem' : null)};
  ${media.lessThan('huge')`
    width: ${props => (props.talk ? '25rem' : '100%')};
    margin: ${props => (props.talk ? '0ren 1ren' : null)};
  `};
  ${media.lessThan('large')`
    width: ${props => (props.talk ? '20rem' : '100%')};
   margin: ${props => (props.talk ? '0ren 0.5ren' : null)};
  `};
  ${media.lessThan('medium')`
    width: ${props => (props.talk ? '25rem' : '100%')};
     margin: ${props => (props.talk ? '0ren 1ren' : null)};
  `};
`

const FormBody = styled.div`
  padding: 0rem 10rem;
  ${media.lessThan('huge')`
  padding: 0rem 6rem;
  `};
  ${media.lessThan('large')`
  padding: 0rem 1rem;
`};
  ${media.lessThan('medium')`
  padding: 0rem 0.7rem;
`};
  ${media.lessThan('small')`
 padding : 0rem 0.5rem;
`};
`

const BigTitle = styled.h2`
  padding: 0.1rem 1rem;
  font-size: ${props => (props.small ? '1.8em' : '2.5em')};
  text-align: ${props => (props.center ? 'center' : null)};
  font-weight: ${props => (props.bold ? '600px' : 'normal')};
  color: #0e2f5a;
  ${media.lessThan('large')`
      font-size: ${props => (props.small ? '1.8em' : '2.1em')};
  `};
  ${media.lessThan('medium')`
font-size: ${props => (props.small ? '1.5em' : '2em')};
`};
  ${media.lessThan('small')`
font-size: ${props => (props.small ? '1.3em' : '1.6em')};
`};
`

const MyCard = styled.div`
  width: 45rem;
  box-shadow: 0px 2px 6px grey;
  border-radius: 10px;
  border: 0px;
  outline: 0px;
  background: #fff;
  position: absolute;
  margin: ${props => (props.center ? '4rem 0rem' : '1rem 10rem')};
  transition: ease-in-out 700ms;
  ${media.lessThan('huge')`
       width: 45rem;
  `};
  ${media.lessThan('large')`
       width: 40rem;
  `};
  ${media.lessThan('medium')`
     width: 33rem;
  `};
`

const Tab = styled.div`
  padding: 0rem 1rem;
  margin: 0.5rem 0rem 0rem;
  display: flex;
  justify-content: center;
`

const TabColumn = styled.div`
  text-align: center;
  display: flex;
  font-size: 1.3rem;
  padding: 0rem 0.5rem;
  margin: 0rem 0.5rem;
  transition: all 200ms;
  color: ${props => (props.active ? '#0e2f5a' : 'black')}
  margin: 0rem 1rem;
  font-weight: ${props => (props.active ? '600' : 'normal')};
  border-bottom: ${props => (props.active ? '4px solid blue' : '0px')};
  &: hover {
    cursor: pointer;
    border-bottom: ${props => (props.active ? '4px solid blue' : '4px solid grey')};
  }
`

const TextEditor = styled.div`
    display: flex;
    flex-direction : column
    border-radius : 7px;
    flex: 1;
    width  : auto
    height : ${props => (props.small ? '40vh' : '40vh')} ;
    border: 1px solid #c0c0c0;
    margin : 0.5rem 1rem;
    textarea {
      border : 0px ;
      padding  : 1rem 1.5rem
      outline : 0px; 
      width: auto;
      font-size : 1.2rem
      height: auto;
      display : flex;
      border-radius: 5px 5px 0px 0px;
      flex : 1;
    }
    div {
      padding : 1rem 1rem;
      display : flex;
      font-size : 1.1rem;
      border-radius: 0px 0px 5px 5px;
      background : #fbfbfb;
    }
  `

export {
  Tab,
  TabColumn,
  MyCard,
  BigTitle,
  FormBody,
  ScheduleCard,
  TextEditor,
  CustomModal,
  Border,
  FormCard,
  List,
  Header,
  HeaderLinks,
  BigInput,
  InputBox,
  Hover,
  Switch,
  SwitchBtn,
  ModalInput,
  GalleryGrid,
  Notification,
  Grid,
  Label,
  FormInput,
  CustomImage,
  Title,
  getColor,
  UploadContainer,
  Text,
  Section,
  Items,
  Contain,
  Bounce,
  Card,
  UploadBtn,
  Button,
  Detail,
  Head,
  Body,
  Input
}
