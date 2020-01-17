import styled from "styled-components"
import posed from "react-pose"
import media from "styled-media-query"

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
    background: #0e2f5a
    text-align: right;
    border-radius: 5px;
    height: 45px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: ${props => (props.long ? "0.50em 3.5em" : "0.50em 1.5em")};
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `

const Card = styled.div`
  height:    ${props => (props.team ? "6.5vh" : "7.5vh")}
  padding:  0.5em
  padding-top:  0.2em
    width: ${props => (props.team ? "5em" : "5em")}
  border-radius:  5px
  box-shadow:  0px 2px 6px grey
  background:  black
  color:  white
  cursor:  pointer
 `

const Bounce = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    textAlign: "center",
  },
  hover: {
    scale: 1.1,
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
})

const Contain = styled.div`
    padding-left:   5em
  padding-right:   5em
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
  font-weight: normal;
`

const Name = styled.h2`font-weight : 500
text-align : center
`

const Detail = styled.div`
padding-left : 10px
width :  20em
`

const Bio = styled.p`
  text-align: center;
`

const Hover = styled.div`
  cursor: pointer;
  color: ${props => (props.white ? "#fff" : null)};
`

const Input = styled.input`
height  : 55px
width : 30em
padding : 0.5em
border : 1px solid black
margin : 0 1em
padding-left : 10px
border-radius : 4px
`

const Box = styled.div`
    padding : 0.5em
    border  : 1px solid black
  `

const Text = styled.p``

const UploadBtn = styled.button`
  background: #1a1c28;
  text-align: right;
  border-radius: 30px;
  height: 40px;
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

export {
  Hover,
  Box,
  getColor,
  UploadContainer,
  Text,
  Bio,
  Name,
  Section,
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
