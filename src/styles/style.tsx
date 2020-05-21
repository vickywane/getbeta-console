import styled, { keyframes } from "styled-components"
import posed from "react-pose"
import media from "styled-media-query"
import { Image, Modal } from "react-bootstrap"

// Todo: Refactor & compress file !!

const Head = styled.div`
  padding: 0.7em 0.7rem;
  border-bottom: 1px solid grey;
`

const Body = styled.div`
  padding: 1em;
`

const Button = styled.button`
  background: ${props => (props.transparent ? "transparent" : "#0e2f5a")};
  border-radius: 5px;
  height: auto;
  outline: 0px;
  transition: all 400ms;
  border: ${props =>
    props.transparent ? " 1px solid #000" : " 1px solid #0e2f5a"};
  color: ${props => (props.transparent ? "#0e2f5a" : "#fff")};
  margin: 0 1em;
  padding: ${props => (props.long ? "0.50em 3.5em" : "0.50em 1.5em")};
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
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    textAlign: "center",
  },
  hover: {
    scale: 1.05,
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
})

const Contain = styled.div`
  padding: ${props => (props.bottomPadding ? "1rem 3rem" : "1rem 5rem")}
  background:  ${props => (props.grey ? "#F3F3F3" : "transparent")}
  box-shadow: ${props => (props.bottomShadow ? "0px 1px 3px grey" : null)} ;
  ${media.lessThan("large")`
  padding: ${props => (props.bottomPadding ? "1rem 3rem" : "0.5em 1.5rem")} ;
  `};
  ${media.lessThan("medium")`
  padding: 1.5em 0.5rem;
  `};
  ${media.lessThan("small")`
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
  color: ${props => (props.white ? "#fff" : null)};
`

const ModalInput = styled.input`
  padding: ${props => (props.input ? "0.1rem 0.7rem" : "0.2rem 0.5rem")};
  outline: 0px;
  width: ${props => (props.input ? "18rem" : "12rem")};
  border: 0px;
`

const Input = styled.input`
  height: ${props => (props.long ? "10vh" : "40px")};
  width: auto;
  padding: 0.7em 1.5rem;
  display : flex;
  flex: 1;
  border: ${props => (props.unbordered ? "0px" : " 1px solid grey")};
  outline: 0px;
  color: ${props => (props.white ? "#fff" : "#000")}
  margin: ${props => (props.unmargined ? "0rem" : "0.4rem 1rem")};
  padding-left: 10px;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: all 300ms;
  background: ${props => (props.transparent ? "transparent" : null)};
    ${media.lessThan("huge")`
    width: ${props => (props.wide ? "60rem" : "auto")};
    `};
    ${media.lessThan("large")`
  width: ${props => (props.wide ? "60rem" : "auto")};
  `};
  ${media.lessThan("medium")`
  width: ${props => (props.wide ? "52rem" : "auto")};
  `};
  ${media.lessThan("small")`
  width: ${props => (props.wide ? "52rem" : "auto")};
  `};
  &: hover {
    border: 1px solid blue;
  }
`

const FormInput = styled.input`
  height: ${props => (props.long ? "10vh" : "50px")};
  width: ${props => (props.wide ? "52rem" : "30em")};
  padding: 0.5em;
  border: ${props => (props.unbordered ? "0px" : " 1px solid grey")};
  outline: 0px;
  color: ${props => (props.white ? "#fff" : "#000")}
  margin: ${props => (props.unmargined ? "0rem" : "0.4rem 1rem")};
  padding-left: 10px;
  border-radius: 4px;
  font-size: 1.1rem;
  background: ${props => (props.transparent ? "transparent" : null)};
    ${media.lessThan("large")`
  width: ${props => (props.wide ? "46rem" : "27em")};
  font-size: 1rem;
  `};
  ${media.lessThan("medium")`
  width: ${props => (props.wide ? "28rem" : "27em")};
  font-size: 1rem;
  `};
  ${media.lessThan("small")`
  width: ${props => (props.wide ? "52rem" : "25em")};
  font-size: 1rem;
  `};
`

const BigInput = styled.textarea`
  padding: 1.5rem 1.5rem;
  margin: 0.5rem 1rem;
  height: 20vh;
  display: flex;
  flex: 1;
  width: 50rem;
  border-radius: 7px;
  border: 1px solid black;
  outline: 0px;
  font-size: 1.1rem;
  ${media.lessThan("large")`
  width: 43rem;
  font-size: 1.1rem;
  `};
  ${media.lessThan("medium")`
 width: 35rem;
  font-size: 1rem;
  `};
  ${media.lessThan("small")`
width: 25.5rem;
  font-size: 1rem;
  `};
`

const Text: any = styled.p`
  font-family: calibri;
  text-align: ${props => (props.center ? "center" : null)};
  font-size: ${props => (props.small ? "1.05rem" : "1.2rem")};
  color: ${props => (props.white ? "white" : "black")};
  font-weight: ${props => (props.bold ? "600" : "normal")};
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
    return "#00e676"
  }
  if (props.isDragReject) {
    return "#ff1744"
  }
  if (props.isDragActive) {
    return "#2196f3"
  }
  return "#eeeeee"
}

const UploadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => (props.unpadded ? "1em 1rem" : "2rem")};
  border: ${props =>
    props.upload ? `7px solid ${getColor(props)}` : "7px solid #eeeeee"};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  margin: 2em;
  border-radius: 10px;
  transition: border 0.24s ease-in-out;
`

const Title = styled.h5`
  padding-left: ${props => (props.small ? "3px" : "15px")};
  padding-right: 10px;
  text-align: ${props => (props.center ? "center" : null)};
  font-size: ${props => (props.small ? "1.7rem" : "2rem")};
  font-weight: ${props => (props.bold ? "600px" : "normal")};
  ${media.lessThan("large")`
  font-size: ${props => (props.small ? "1.6em" : "2em")};
  `};
  ${media.lessThan("medium")`
  font-size: ${props => (props.small ? "1.5em" : "2em")};
`};
  ${media.lessThan("small")`
  font-size: ${props => (props.small ? "1.3em" : "2em")};
`};
`

const Label = styled.label`
padding-left: 10px
font-weight: 500;
font-size: ${props => (props.small ? "1.2em" : "1.3em")};
${media.lessThan("large")`
font-size: ${props => (props.small ? "1.1em" : "1.3em")};
  `};
  ${media.lessThan("medium")`
 font-size: ${props => (props.small ? "1em" : "1.3em")};
`};
  ${media.lessThan("small")`
 font-size: ${props => (props.small ? "1em" : "1.3em")};
`};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
`

const CustomImage = styled(Image)`
  height: auto;
  width: ${props => (props.small ? "25rem" : null)};
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
  width: ${props => (props.team ? "22em" : "23em")};
  border-radius: ${props => (props.team ? "7px" : "5px")};
  padding: 1rem 0.5rem;
  margin : 1rem
  box-shadow: 0px 2px 6px grey;
  background: transparent;
  color: black;
  cursor: pointer;
  ${media.lessThan("large")`
    margin : 0.7rem
      height: ${props => (props.team ? "20vh" : "33vh")};
    width: ${props => (props.team ? "22em" : "20em")};
  `};
  ${media.lessThan("medium")`
    margin : 0.7rem
   height: ${props => (props.team ? "20vh" : "26vh")};
  width: ${props => (props.team ? "22em" : "17em")};
`};
  ${media.lessThan("small")`
      height: ${props => (props.team ? "20vh" : "23vh")};
      width: ${props => (props.team ? "22em" : "15em")};
`};
`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  grid-gap: 1rem;
  ${media.lessThan("medium")`
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
`};
`

const Notification = styled.div`
  padding: 0.5rem 1rem;
  background: ${props => props.color};
  color: ${props => (props.white ? "#fff" : "#000")};
`

const Switch = styled.div`
  padding: 0rem 0rem;
  border: 2.5px solid #401364;
  width: ${props => (props.two ? "29rem" : "36rem")};
  background: transparent;
  transition: transform 2s;
  border-radius: 6px;
  &: hover {
    transform: ease-in;
  }
  ${media.lessThan("large")`
    width:  ${props => (props.two ? "29.5rem" : "36rem")};
    border-radius: 2.5px;
    border: 1.5px solid #401364;
  `};
  ${media.lessThan("medium")`
    width:  ${props => (props.two ? "20.5rem" : "24rem")};
    border-radius: 2.5px;
  border: 1.5px solid #401364;
`};
  ${media.lessThan("small")`
   width: 19rem;
    border-radius: 2.5px;
  border: 1px solid #401364;
`};
`

const SwitchBtn = styled.button`
  padding: 0.6rem 4rem;
  border: 0px;
  background: transparent;
  color: #401364;
  outline: none;
  font-weight: bold;
  transition: all 600ms;
  font-size: 1.1rem;
  &: hover {
    background: #401364;
    color: #fff;
  }
  ${media.lessThan("medium")`
      padding: 0.5rem 2.25rem;
`};
  ${media.lessThan("small")`
       padding: 0.5rem 1.6rem;
`};
`

const InputBox = styled.div`
  padding: ${props => (props.modal ? "0.5rem 2rem" : "0rem 1rem")};
  border: ${props => (props.modal ? "1px solid #000" : "1px solid #fff")};
  border-radius: 5px;
  height: auto;
`

// HEADER STYLES =================>
const Header = styled.nav`
  padding: 0.8em 1rem;
  background: #444444;
  position: fixed;
  width: 100%;
  ${media.lessThan("medium")`
          padding: 0.1rem 1rem;
`};
  ${media.lessThan("small")`
            padding: 0.1rem 1rem;
`};
`

const HeaderLinks = styled.a`
  text-decoration: none;
  font-size: 2em;
  font-family: monospace;
`

const FormCard = styled.div`
  box-shadow: 0px 3px 4px grey;
  padding: 0rem 0.5rem;
  background: #fff;
  border-radius: 5px;
`

const List = styled.ul`
  list-style: none;
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
  width: ${props => (props.talk ? "25rem" : "100%")};
  margin: ${props => (props.talk ? "0ren 1ren" : null)};
  padding: ${props => (props.padded ? "1rem" : null)};
`

const FormBody = styled.div`
  padding: 0rem 10rem;
  ${media.lessThan("huge")`
  padding: 0rem 6rem;
  `};
  ${media.lessThan("large")`
  padding: 0rem 1rem;
`};
  ${media.lessThan("medium")`
  padding: 0rem 0.7rem;
`};
  ${media.lessThan("small")`
 padding : 0rem 0.5rem;
`};
`

const BigTitle = styled.h2`
  padding: 0.1rem 1rem;
  font-size: ${props => (props.small ? "1.8em" : "2.5em")};
  text-align: ${props => (props.center ? "center" : null)};
  font-weight: ${props => (props.bold ? "600px" : "normal")};
  ${media.lessThan("large")`
      font-size: ${props => (props.small ? "1.8em" : "2.1em")};
  `};
  ${media.lessThan("medium")`
font-size: ${props => (props.small ? "1.5em" : "2em")};
`};
  ${media.lessThan("small")`
font-size: ${props => (props.small ? "1.3em" : "1.6em")};
`};
`

const MyCard = styled.div`
  padding: 1rem 1rem;
  width: 38rem;
  box-shadow: 0px 2px 6px grey;
  border-radius: 10px;
  border: 0px;
  outline: 0px;
  background: #fff;
  position: absolute;
  margin: ${props => (props.center ? "4rem 0rem" : "1rem 10rem")};
  transition: ease-in-out 700ms;
  ${media.lessThan("medium")`
  width: 33rem;
  `};
`

export {
  MyCard,
  BigTitle,
  FormBody,
  ScheduleCard,
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
  Input,
}
