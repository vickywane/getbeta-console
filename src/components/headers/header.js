import React from 'react'
import styled from 'styled-components'
import { FiHome, FiSearch } from 'react-icons/fi'

import { SmallUserImage, Title } from '../../styles/style'

const Body = styled.div`
  height: 70px;
  width: 100%;
  dsplay: flex;
  jusfity-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #c0c0c0;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  border-radius: 5px;
  padding: 0.5rem 0.5rem;
  &: hover {
    cursor: pointer;
    color: #fff;
    background: #0072ce;
  }
`

const Searchbox = styled.div`
width  : 42rem;
border : 0px;
border-radius : 3px;
display : flex;
padding   : 0.6rem 0.5rem;
justify-content: space-between;
background : #fff;
box-shadow : 0 2px 3px #0072ce;
input {
  color : #0072ce;
     padding : 0.2rem 1rem;
    background : transparent;
    width  : 42rem
    font-size: 1rem;
    outline : 0;
    border : 0;
  }
  div {
    color : #0072ce;
    display  : flex;
    justify-content : center;
    align-items : center;
  }
`

const Header = props => {
  const { screen, showSearch, searchText, backgroundColor } = props
  return (
    <Body
      style={{
        background: backgroundColor
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Icon>
          <FiHome style={{ color: '#0072ce', fontSize: '1.8rem' }} />
        </Icon>

        {screen && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Title color="#0072ce"> {screen} </Title>
          </div>
        )}

        {showSearch && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Searchbox>
              <div>
                <FiSearch style={{ fontSize: '1.6rem' }} />
              </div>

              <input placeholder={searchText} />
            </Searchbox>
          </div>
        )}

        <SmallUserImage small src={require('../../assets/images/img.jpg')} />
      </div>
    </Body>
  )
}

export default Header
