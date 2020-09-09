import React from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlus, FiPlay } from 'react-icons/fi'
import { Link } from '@reach/router'

import useWindowWidth from '../../utils/hook_style'
import { CONTENT_DATA } from '../../mockData'
import { Text, Title, Section, HomeList, Hover, Searchbox, Button } from '../../styles/style'

const Body = styled.div`
  padding: 0.5rem 1.5rem;
  background: #fff;
  border-radius: 5px;
`

const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 3px 5px #c0c0c0;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const StyledSearchbox = styled(Searchbox)`
width  : 35rem;
border : 1.7px solid #0072CE;
border-radius : 30px;
display : flex;
background : #fff;
padding   : 0.7rem 0.5rem;
justify-content: space-between;
input {
    padding : 0.2rem 1rem;
    width  : 33rem
    outline : 0;
    color : #0072CE;
    border : 0;
  }
`

const MyContent = props => {
  const { UserStore } = props
  const Width = useWindowWidth()

  return (
    <Body>
      <Section id="#contents">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ ...center }}>
            <div style={{ display: 'flex' }}>
              <Title small style={{ color: '#0072CE' }}>
                Contents
              </Title>

              <Hover style={{ margin: '0 1rem' }}>
                <Link to="/create-content">
                  <FiPlus style={{ fontSize: '1.8rem' }} />
                </Link>
              </Hover>
            </div>
          </div>

          {Width >= 1200 ? (
            <StyledSearchbox>
              <div>
                <FiSearch style={{ fontSize: '1.6rem' }} />
              </div>

              <input placeholder="Search for a course" />
            </StyledSearchbox>
          ) : (
            <Hover>
              <FiSearch style={{ fontSize: '1.6rem' }} />
            </Hover>
          )}
        </div>
        <hr />
        <br />
        <HomeList>
          {CONTENT_DATA.map(({ id, name }) => {
            return (
              <li key={id}>
                <ContentContainer>
                  <div
                    style={{
                      height: '45px',
                      width: '50px',
                      borderRadius: '3px',
                      border: '1px solid #c0c0c0'
                    }}
                  />

                  <Link style={{ textDecoration: 'none' }} to="/">
                    <Text> {name} </Text>
                  </Link>

                  <Text> 12 - 12 - 12 </Text>
                </ContentContainer>
              </li>
            )
          })}
        </HomeList>
      </Section>
    </Body>
  )
}

export default MyContent
