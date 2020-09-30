import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlus, FiTrash2, FiX, FiAlignCenter } from 'react-icons/fi'
import { navigate, Link } from '@reach/router'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import { Planet } from 'react-kawaii'
import { Spinner, Dropdown } from 'react-bootstrap'
import media from 'styled-media-query'
import { Tab, Tabs } from 'react-bootstrap'

import useWindowWidth from '../../utils/hook_style'
import { Text, HomeList, Hover, center, StyledSearchbox } from '../../styles/style'

const Body = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 3px grey;
  section {
    padding: 0.5rem 1.5rem;
  }
  ${media.lessThan('medium')`
  section {
    padding: 0.5rem 0.5rem;
  }
  `};
  ${media.lessThan('small')`
  section {
    padding: 0.5rem 0.3rem;
  }
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
  const { getUserContents, contents, deleteContent, isLoadingContents } = props.ContentStore
  const [searchVisiblity, setSearchVisiblity] = useState(false)
  const [TabState, setTabState] = useState('created-content')

  const Width = useWindowWidth()
  useEffect(() => {
    getUserContents()
  }, [])

  let userContents = toJS(contents)

  useEffect(() => {
    if (Width >= 1200) {
      setSearchVisiblity(true)
    } else {
      setSearchVisiblity(false)
    }
  }, [Width])

  return (
    <Body>
      <div
        style={{
          background: '#E0E9F5',
          display: 'flex',
          height: '65px',
          padding: '0.5rem 0.7rem',
          justifyContent: 'space-between',
          borderBottom: '1px solid #c0c0c0'
        }}
      >
        <div style={{ ...center, display: Width >= 1200 && !searchVisiblity && 'none' }}>
          <div style={{ display: 'flex', paddingTop: '10px' }}>
            <Text style={{ color: '#0072CE', margin: 0, padding: 0 }}>All Contents</Text>

            <Link to="/create-content">
              <Hover style={{ margin: '0 0.3rem', padding: 0 }}>
                <FiPlus style={{ fontSize: '1.5rem', padding: 0 }} />
              </Hover>
            </Link>
          </div>
        </div>

        {searchVisiblity ? (
          <StyledSearchbox>
            <div>
              <FiSearch style={{ fontSize: '1.4rem' }} />
            </div>

            <input placeholder="Find your contents" />

            <div style={{ ...center }} onClick={() => setSearchVisiblity(false)}>
              <FiX style={{ fontSize: '1.35rem' }} />
            </div>
          </StyledSearchbox>
        ) : (
          <Hover>
            <FiSearch
              onClick={() => setSearchVisiblity(true)}
              style={{ color: '#0072ce', fontSize: '1.5rem' }}
            />
          </Hover>
        )}
      </div>

      <section>
        <Tabs
          id="contents-tab"
          activeKey={TabState}
          eventKey={'created-content'}
          onSelect={k => setTabState(k)}
        >
          <Tab eventKey="created-content" title="Created Content">
            <HomeList>
              {isLoadingContents ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <br />
                  <Spinner variant="primary" animation="grow" role="loading" />
                  <br />
                </div>
              ) : userContents.length === 0 ? (
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
              ) : (
                userContents.map(({ _id, dateCreated, descrp, price, type, vendorId, title }) => {
                  console.log(dateCreated)
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
                              <Text style={{ margin: 0 }}> 12 - 12 - 12 </Text>
                            </Date>

                            <Hover
                              onClick={() => {
                                deleteContent(_id)
                              }}
                              style={{ ...FiAlignCenter }}
                            >
                              <FiTrash2 style={{ fontSize: '1.4rem' }} />
                            </Hover>
                          </div>
                        </div>
                      </ContentContainer>
                    </li>
                  )
                })
              )}
            </HomeList>
          </Tab>

          <Tab eventKey="purchased-content" title="Purchased Content">
            <HomeList>
              {isLoadingContents ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <br />
                  <Spinner variant="primary" animation="grow" role="loading" />
                  <br />
                </div>
              ) : userContents.length === 0 ? (
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
          </Tab>
        </Tabs>
      </section>
    </Body>
  )
}

export default inject('ContentStore')(observer(MyContent))
