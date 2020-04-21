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

const Pane = styled.div`
  padding: 0.5em;
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

const Card = styled.div`
  height: ${props => (props.team ? "15vh" : "25vh")};
  place-items: center;
  width: ${props => (props.team ? "15em" : "17em")};
  border-radius: ${props => (props.team ? "7px" : "5px")};
  padding-top: ${props => (props.team ? "3px" : null)};
  box-shadow: 0px 2px 6px grey;
  background: transparent;
  color: black;
  cursor: pointer;
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
  padding-left: 5em;
  padding-right: 5em;
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

const Name = styled.h2`
font-weight : 500
text-align : center
`

const Detail = styled.div`
  padding-left: 5px;
`

const Bio = styled.p`
  text-align: center;
`

const Hover = styled.div`
  cursor: pointer;
  color: ${props => (props.white ? "#fff" : null)};
`

const Input = styled.input`
  height: ${props => (props.long ? "10vh" : "50px")};
  width: ${props => (props.wide ? "52rem" : "30em")};
  padding: 0.5em;
  border: ${props => (props.unbordered ? "0px" : " 1px solid black")};
  outline: 0px;
  color: ${props => (props.white ? "#fff" : "#000")}
  margin: ${props => (props.unmargined ? "0rem" : "0.4rem 1rem")};
  padding-left: 10px;
  border-radius: 4px;
  background: ${props => (props.transparent ? "transparent" : null)};
`

const Box = styled.div`
    padding : 0.5em
    border  : 1px solid black
  `

const Text = styled.p`
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

const autoGrid = (minColumnWidth, gridGap) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Items = styled.div({
  ...autoGrid(255, 30),
  padding: "1em",
})

const SmallItems = styled.div({
  ...autoGrid(170, 20),
  padding: "0.5em",
  margin: "0.5em",
})

const Title = styled.h4`
  padding-left: ${props => (props.small ? "3px" : "15px")};
  padding-right: 10px;
  text-align: ${props => (props.center ? "center" : null)};
  font-size: ${props => (props.small ? "1.5em" : "2em")};
  font-weight: ${props => (props.bold ? "600px" : "normal")};
`

const Label = styled.label`
padding-left: 10px
font-size: ${props => (props.small ? "1.2em" : "1.3em")}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 1rem;
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

const CustomImage = styled(Image)`
  height: auto;
  width: ${props => (props.small ? "25rem" : null)};
  transition: transform 1s;
  &: hover {
    cursor: pointer;
    transform: translateY(-25px);
  }
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

// HEADER STYLES =================>
const Header = styled.nav`
      padding: 0.8em 1rem;
      background : #444444
      position: fixed;
      width: 100%;
    `

const HeaderLinks = styled.a`
  text-decoration: none;
  font-size: 2em;
  font-family: monospace;
`

export {
  Header,
  HeaderLinks,
  Hover,
  Switch,
  SwitchBtn,
  GalleryGrid,
  Notification,
  Grid,
  Label,
  CustomImage,
  Box,
  SmallItems,
  Title,
  getColor,
  UploadContainer,
  Text,
  Bio,
  Name,
  Section,
  Items,
  Contain,
  Bounce,
  Card,
  UploadBtn,
  Button,
  Pane,
  Detail,
  Head,
  Body,
  Input,
}
