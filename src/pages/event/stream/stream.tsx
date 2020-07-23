import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Header, Footer, Portal } from '../../../components/'
import { Title } from '../../../styles/style'

const Box = styled.div`
  height : 350px
  width : 350px
  margin : 2rem;
  padding : 2rem;
  border : 1px solid grey
  border-radius : 5px;
  position: absolute;
  transition : all 400ms;
  animation: onTop 12s 2s ease infinite;
  background: linear-gradient(to bottom, rgba(235,236,240,1) 0%,rgba(255,255,255,1) 60%);
 &: hover {
cursor : pointer;
    top : 5rem;
}
 `

const Second = styled.div`
  left: 0;
  top: 10px;
  z-index: 5;
  height : 350px
  width : 350px
  margin : 2rem;
  padding : 2rem;
  border : 1px solid grey
  border-radius : 5px;
  background: linear-gradient(to bottom, rgba(235,236,240,1) 0%,rgba(255,255,255,1) 60%);
&: hover {
cursor : pointer;
    top : 5rem;
}
`

const Third = styled.div`
  left: 0;
  top: 10px;
  z-index: 5;
  height : 350px
  width : 350px
  margin : 2rem;
  padding : 2rem;
  border : 1px solid grey
  border-radius : 5px;
  background: linear-gradient(to bottom, rgba(235,236,240,1) 0%,rgba(255,255,255,1) 60%);

`

const Data = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]

const Stream = () => {
  const [Position, setcurrPos] = useState(null)

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div style={{ height: '100vh' }}>
        <p>some boxes text below </p>

        {Data.map(({ id }) => {
          return (
            <Box>
              <Title> {id} </Title>
            </Box>
          )
        })}

        <Second />
        <Third />
      </div>

      <Footer />
    </div>
  )
}

export default Stream
