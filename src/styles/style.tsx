import styled from "styled-components"
import posed from "react-pose"
import media from "styled-media-query"
import { Image } from "react-bootstrap"

const Head = styled.div`
  padding: 0.7em;
`

const Body = styled.div`
  padding: 1em;
`

const Button = styled.button`
  background: ${props => (props.transparent ? "transparent" : "#0e2f5a")};
  border-radius: 5px;
  height: auto;
  outline: 0px;
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
  padding: ${props => (props.bottomPadding ? "1rem 3rem" : "0rem 5rem")}
  background-image: url('${props => props.img}');
  ${media.lessThan("large")`
  padding-left: 1.5em;
  padding-right: 1.5em;
  `};
  ${media.lessThan("medium")`
  padding-left: 1.5em;
  padding-right: 1.5em;
  `};
  ${media.lessThan("small")`
  padding-left: 0.4em;
  padding-right: 0.4em;
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
  width: ${props => (props.wide ? "60rem" : "25em")};
  `};
  ${media.lessThan("medium")`
  width: ${props => (props.wide ? "52rem" : "24em")};
  `};
  ${media.lessThan("small")`
  width: ${props => (props.wide ? "52rem" : "21em")};
  `};
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
  width: ${props => (props.wide ? "46rem" : "21.5em")};
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

const Text: any = styled.p`
  text-align: ${props => (props.center ? "center" : null)};
  font-size: ${props => (props.small ? "1.05rem" : "1.2rem")};
  color: ${props => (props.white ? "white" : "black")};
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
  padding: 1em;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  margin: 1.5em;
  border-radius: 10px;
  transition: border 0.24s ease-in-out;
`

const Title = styled.h4`
  padding-left: ${props => (props.small ? "3px" : "15px")};
  padding-right: 10px;
  text-align: ${props => (props.center ? "center" : null)};
  font-size: ${props => (props.small ? "1.5em" : "2em")};
  font-weight: ${props => (props.bold ? "600px" : "normal")};
  ${media.lessThan("large")`
font-size: ${props => (props.small ? "1.4em" : "2em")};
  `};
  ${media.lessThan("medium")`
font-size: ${props => (props.small ? "1.3em" : "2em")};
`};
  ${media.lessThan("small")`
font-size: ${props => (props.small ? "1.2em" : "2em")};
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
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 1rem;
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
  box-shadow: 0px 2px 6px grey;
  background: transparent;
  color: black;
  cursor: pointer;
  ${media.lessThan("large")`
      height: ${props => (props.team ? "20vh" : "30vh")};
    width: ${props => (props.team ? "22em" : "20em")};
  `};
  ${media.lessThan("medium")`
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
`

const Switch = styled.div`
  padding: 0rem 0rem;
  border: 2.5px solid #401364;
  width: 36rem;
  background: transparent;
  transition: transform 2s;
  border-radius: 6px;
  &: hover {
    transform: ease-in;
  }
  ${media.lessThan("large")`
     width: 36rem;
    border-radius: 2.5px;
     border: 1.5px solid #401364;  
  `};
  ${media.lessThan("medium")`
     width: 24rem;
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
  padding: 0.5rem 4.35rem;
  border: 0px;
  background: transparent;
  color: #401364;
  outline: none;
  font-weight: bold;
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
      background : #444444
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

export {
  FormCard,
  List,
  Header,
  HeaderLinks,
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
