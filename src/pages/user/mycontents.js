import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlus, FiTrash, FiAlignCenter } from 'react-icons/fi'
import { navigate, Link } from '@reach/router'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import { Planet } from 'react-kawaii'
import { Spinner, Dropdown } from 'react-bootstrap'
import media from 'styled-media-query'
import { FiTrash2 } from 'react-icons/fi'

import useWindowWidth from '../../utils/hook_style'
import { Text, Title, Section, HomeList, Hover, center, StyledSearchbox } from '../../styles/style'

const Body = styled.div`
  padding: 0.5rem 1.5rem;
  background: #fff;
  border-radius: 5px;
  ${media.lessThan('medium')`
    padding: 0.5rem 1rem;
  `};
  ${media.lessThan('small')`
    padding: 0.5rem 0.5rem;
  `};
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

const ContentImage = styled.div`
  height: 45px;
  width: 50px;
  border-radius: 3px;
  border: 1px solid #c0c0c0;
  ${media.lessThan('medium')`
      display : none;
  `};
`

const Date = styled.div`
  ${media.lessThan('medium')`
display : none;
`};
`

const MyContent = props => {
  const { getUserContents, contents, deleteContent } = props.ContentStore

  const Width = useWindowWidth()
  useEffect(() => {
    getUserContents()
  }, [])

  let userContents = toJS(contents)

  return (
    <Body>
      <Section id="#contents">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ ...center }}>
            <div style={{ display: 'flex' }}>
              <Title small style={{ color: '#0072CE', margin: 0, padding: 0 }}>
                Contents
              </Title>

              <Link to="/create-content">
                <Hover style={{ margin: '0 0.6rem', padding: 0 }}>
                  <FiPlus style={{ fontSize: '1.5rem', padding: 0 }} />
                </Hover>
              </Link>
            </div>
          </div>

          {Width >= 1200 ? (
            <StyledSearchbox>
              <div>
                <FiSearch style={{ fontSize: '1.5rem' }} />
              </div>

              <input placeholder="Find your contents" />
            </StyledSearchbox>
          ) : (
            <Hover>
              <FiSearch style={{ color: '#0072ce', fontSize: '1.5rem' }} />
            </Hover>
          )}
        </div>
        <hr />
        <br />

        <HomeList>
          {userContents.length === 0 ? (
            <div style={{ ...center }}>
              <div>
                <div style={{ ...center }}>
                  <Planet color="#0072ce" mood="sad" size={180} />
                </div>
                <br />
                <Text align="center"> You currently do not have any created content. </Text>
                <Link to="/create-content">
                  <Text align="center"> Create Content</Text>
                </Link>
              </div>
            </div>
          ) : userContents.length > 1 ? (
            <Spinner variant="primary" animation="grow" role="loading" />
          ) : (
            userContents.map(({ _id, descrp, price, type, vendorId, title }) => {
              return (
                <li key={_id}>
                  <ContentContainer>
                    <ContentImage />

                    <Text
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        navigate('/edit-content', {
                          state: {
                            contentId: _id
                          }
                        })
                      }}
                    >
                      {title}
                    </Text>

                    <div style={{ ...center }}>
                      <div style={{ display: 'flex' }}>
                        <Date style={{ margin: '0 1rem', ...center }}>
                          <Text> 12 - 12 - 12 </Text>
                        </Date>

                        <Hover
                          onClick={() => {
                            deleteContent(_id)
                          }}
                          style={{ ...FiAlignCenter }}
                        >
                          <FiTrash2 style={{ fontSize: '1.6rem' }} />
                        </Hover>
                      </div>
                    </div>
                  </ContentContainer>
                </li>
              )
            })
          )}
        </HomeList>
      </Section>
    </Body>
  )
}

export default inject('ContentStore')(observer(MyContent))
