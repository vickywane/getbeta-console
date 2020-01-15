import styled from "styled-components"
import posed from "react-pose"

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
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.50em 1.5em;
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
  padding: 0.5em;
`

const Section = styled.h3`
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

export {
  Hover,
  Bio,
  Name,
  Section,
  Contain,
  Bounce,
  Card,
  Button,
  Pane,
  Detail,
  Head,
  Body,
}
