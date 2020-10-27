import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlus, FiTrash2, FiX, FiAlignCenter } from 'react-icons/fi'
import { Link, navigate } from '@reach/router'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import { Planet } from 'react-kawaii'
import { Spinner, Dropdown } from 'react-bootstrap'
import media from 'styled-media-query'
import { IoMdCalendar } from 'react-icons/io'
import moment from 'moment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Box, Image, Badge } from '@chakra-ui/core'
import ContentCard from '../../components/contentCard'

import useWindowWidth from '../../utils/hook_style'
import { Text, HomeList, Hover, Title, center, StyledSearchbox } from '../../styles/style'

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 1rem 1rem;
  place-items : center;
`

const MyContent = props => {
  const {
    getUserContents,
    contents,
    deleteContent,
    isLoadingContents,
    userSubscribedContent
  } = props.ContentStore
  const { userId, showAllPublicContent } = props

  const [searchVisiblity, setSearchVisiblity] = useState(false)
  const [TabState, setTabState] = useState('created-content')

  const Width = useWindowWidth()
  useEffect(() => {
    getUserContents(userId)
    userSubscribedContent(userId)
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
            <Title style={{ color: '#0072CE', margin: 0, padding: 0 }}>All Contents</Title>

            {!showAllPublicContent && (
              <Hover
                onClick={() =>
                  navigate(TabState === 'created-content' ? '/create-content' : '/contents')
                }
                style={{ margin: '0 0.3rem', padding: 0 }}
              >
                <FiPlus />
              </Hover>
            )}
          </div>
        </div>

        {searchVisiblity ? (
          <StyledSearchbox>
            <div>
              <FiSearch style={{ fontSize: '1.35rem' }} />
            </div>

            <input placeholder="Find your contents" />

            <div style={{ ...center }} onClick={() => setSearchVisiblity(false)}>
              <FiX style={{ fontSize: '1.35rem' }} />
            </div>
          </StyledSearchbox>
        ) : (
          <Hover>
            <FiSearch onClick={() => setSearchVisiblity(true)} style={{ color: '#0072ce' }} />
          </Hover>
        )}
      </div>

      <section>
        {showAllPublicContent ? (
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
                  <br />
                  <div style={{ ...center }}>
                    <Planet color="#0072ce" mood="sad" size={140} />
                  </div>
                  <br />
                  <Text align="center"> You currently do not have any created content. </Text>
                  <Link to="/create-content">
                    <Text align="center"> Create Content</Text>
                  </Link>
                </div>
              </div>
            ) : (
              <Grid>
                {userContents.map(
                  ({
                    _id,
                    subscribers,
                    contentfiles,
                    createdAt,
                    descrp,
                    price,
                    type,
                    vendorId,
                    title
                  }) => {
                    return (
                      <li key={_id}>
                        <ContentCard
                          id={_id}
                          createdAt={createdAt}
                          descrp={descrp}
                          price={price}
                          contentfiles={contentfiles}
                          subscribers={subscribers}
                          type={type}
                          vendorId={vendorId}
                          title={title}
                        />
                      </li>
                    )
                  }
                )}
              </Grid>
            )}
          </HomeList>
        ) : (
          <Tabs>
            <TabList>
              <Tab style={{ fontSize: '.95rem' }} onClick={() => setTabState('created-content')}>
                My Content
              </Tab>
              <Tab style={{ fontSize: '.95rem' }} onClick={() => setTabState('purchased-content')}>
                Puchased Content
              </Tab>
            </TabList>

            <TabPanel>
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
                        <Planet color="#0072ce" mood="sad" size={140} />
                      </div>
                      <br />
                      <Text align="center"> You currently do not have any created content. </Text>
                      <Link to="/create-content">
                        <Text align="center"> Create Content</Text>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Grid>
                    {userContents.map(
                      ({
                        _id,
                        subscribers,
                        contentfiles,
                        createdAt,
                        descrp,
                        price,
                        type,
                        vendorId,
                        title
                      }) => {
                        return (
                          <li key={_id}>
                            <ContentCard
                              id={_id}
                              createdAt={createdAt}
                              descrp={descrp}
                              price={price}
                              contentfiles={contentfiles}
                              type={type}
                              subscribers={subscribers}
                              vendorId={vendorId}
                              title={title}
                            />
                          </li>
                        )
                      }
                    )}
                  </Grid>
                )}
              </HomeList>
            </TabPanel>
            <TabPanel>
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
                        <Planet color="#0072ce" mood="sad" size={140} />
                      </div>
                      <br />
                      <Text align="center"> You currently do not have any created content. </Text>
                      <Link to="/create-content">
                        <Text align="center"> Create Content</Text>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Grid>
                    {userContents.map(
                      ({
                        _id,
                        subscribers,
                        contentfiles,
                        createdAt,
                        descrp,
                        price,
                        type,
                        vendorId,
                        title
                      }) => {
                        return (
                          <li key={_id}>
                            <ContentCard
                              id={_id}
                              createdAt={createdAt}
                              descrp={descrp}
                              price={price}
                              contentfiles={contentfiles}
                              type={type}
                              subscribers={subscribers}
                              vendorId={vendorId}
                              title={title}
                            />
                          </li>
                        )
                      }
                    )}
                  </Grid>
                )}
              </HomeList>
            </TabPanel>
          </Tabs>
        )}
      </section>
    </Body>
  )
}

export default inject('ContentStore')(observer(MyContent))
