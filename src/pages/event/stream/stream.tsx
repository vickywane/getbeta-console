import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import useScrollPosition from '../.././../utils/scrollTrackerHook'
import { Header, Footer, Portal } from '../../../components/'
import Image from '../../../assets/images/2.jpg'

const Container = styled.div`
    background-image: url(${props => props.img});
    background-size : cover;
    width : 100%;
    height: 88.5vh;
    position: relative;
    div {
      color: #fff
      bottom : 0;
      font-size : 2rem
      padding: 1rem 1rem;
      width : 100%;
      height: 88.5vh;
      position: absolute;
      background: linear-gradient(to top,#1a1e43ed, transparent) ;
      text-align :center
    }
   `

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0)
  const elementPosition = useRef({ x: 10, y: 150 })
  const viewportPosition = useRef({ x: 0, y: 0 })
  let throttleTimeout = null

  const getPos = (el, axis) => Math.round(el.current[axis])

  const setPos = (el, pos) => {
    el.current = pos
    if (throttleTimeout !== null) return
    // Only re-render the component every 0.1s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
  }

  return {
    getElementX: () => getPos(elementPosition, 'x'),
    getElementY: () => getPos(elementPosition, 'y'),
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    setElementPosition: pos => setPos(elementPosition, pos),
    setViewportPosition: pos => setPos(viewportPosition, pos),
    renderCount
  }
}

const Stream = () => {
  const positionsStore = PositionStore()
  const [Position, setcurrPos] = useState(null)

  const viewRef = useRef()

  useScrollPosition(
    ({ currPos }) => {
      setcurrPos(currPos)

      positionsStore.setViewportPosition(currPos)
      if (currPos.y === 0) {
        alert('page top')
      }

      // @ts-ignore
      const style = viewRef !== undefined && viewRef.current.style
      style.top = `${150 + currPos.y}px`
      style.left = `${10 + currPos.x}px`
    },
    [positionsStore],
    null,
    true
  )

  console.log(Position)
  return (
    <div>
      <Header />
      <br />
      <div style={{ height: '60px', background: 'blue', width: '100%' }} />

      <div>
        <p>some niffty text </p>
      </div>

      <div ref={viewRef} style={{ height: '100vh' }}>
        <p>some niffty text below </p>
      </div>

      <Footer />
    </div>
  )
}

export default Stream
