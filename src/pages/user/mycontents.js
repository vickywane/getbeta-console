import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiSearch, FiX } from 'react-icons/fi'
import { Link, navigate } from '@reach/router'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import { Planet } from 'react-kawaii'
import { Spinner } from 'react-bootstrap'
import media from 'styled-media-query'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
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
  place-items: center;
  ${media.lessThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`}
  ${media.lessThan('medium')`
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  `}
  ${media.lessThan('small')`
    grid-gap: .5rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));  
  `}
`

const ContentHead = styled.div`
  background: #e0e9f5;
  display: flex;
  height: 65px;
  padding: 0.5rem 0.7rem;
  justify-content: space-between;
  border-bottom: 1px solid #c0c0c0;
  ${media.lessThan('medium')`
    height: 55px;
  `};
`

const MyContent = props => {
  const { getUserContents, contents, isLoadingContents, userSubscribedContent } = props.ContentStore
  const { userId, showAllPublicContent } = props

  const [searchVisiblity, setSearchVisiblity] = useState(false)
  const [TabState, setTabState] = useState('created-content')

  const Width = useWindowWidth()
  useEffect(() => {
    getUserContents(userId)
  }, [])

  let userContents = toJS(contents)

  const getUserContent = () => userSubscribedContent(userId)

  useEffect(() => {
    if (Width >= 1200) {
      setSearchVisiblity(true)
    } else {
      setSearchVisiblity(false)
    }
  }, [Width])

  return (
    <Body>
      {Width >= 600 ? (
        <ContentHead>
          <div style={{ display: 'flex', paddingTop: '12px' }}>
            {!showAllPublicContent ? (
              <Title
                onClick={() =>
                  navigate(TabState === 'created-content' ? '/create-content' : '/contents')
                }
                small
                style={{ cursor: 'pointer', color: '#0072CE', margin: 0, padding: 0 }}
              >
                Create Content
              </Title>
            ) : (
              <Title style={{ color: '#0072CE', margin: 0, padding: 0 }}>All Contents</Title>
            )}
          </div>

          {searchVisiblity ? (
            <StyledSearchbox>
              <Hover>
                <FiSearch />
              </Hover>

              <input placeholder="Find your contents" />
            </StyledSearchbox>
          ) : (
            <Hover>
              <FiSearch onClick={() => setSearchVisiblity(true)} style={{ color: '#0072ce' }} />
            </Hover>
          )}
        </ContentHead>
      ) : (
        <ContentHead>
          <div style={{ ...center }}>
            {!searchVisiblity && (
              <div style={{ display: 'flex', paddingTop: '5px' }}>
                {!showAllPublicContent ? (
                  <Title
                    onClick={() =>
                      navigate(TabState === 'created-content' ? '/create-content' : '/contents')
                    }
                    small
                    style={{ cursor: 'pointer', color: '#0072CE', margin: 0, padding: 0 }}
                  >
                    Create Content
                  </Title>
                ) : (
                  <Title style={{ color: '#0072CE', margin: 0, padding: 0 }}>All Contents</Title>
                )}
              </div>
            )}
          </div>

          {searchVisiblity ? (
            <StyledSearchbox>
              <Hover>
                <FiSearch />
              </Hover>

              <input placeholder="Find your contents" />

              <Hover onClick={_ => setSearchVisiblity(!searchVisiblity)}>
                <FiX />
              </Hover>
            </StyledSearchbox>
          ) : (
            <Hover>
              <FiSearch onClick={() => setSearchVisiblity(true)} style={{ color: '#0072ce' }} />
            </Hover>
          )}
        </ContentHead>
      )}

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
              <Tab style={{ fontSize: '.85rem' }} onClick={() => setTabState('created-content')}>
                My Content
              </Tab>
              <Tab
                style={{ fontSize: '.85rem' }}
                onClick={() => {
                  getUserContent()
                  setTabState('purchased-content')
                }}
              >
                Puchased Content
              </Tab>
            </TabList>
            {TabState}
            <HomeList>
              <div>
                <Text small> {userContents.length} Contents </Text>
              </div>

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
                      coverImage,
                      vendorId,
                      title
                    }) => {
                      return (
                        <li key={_id}>
                          <ContentCard
                            id={_id}
                            coverImage={coverImage}
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
          </Tabs>
        )}
      </section>
    </Body>
  )
}

export default inject('ContentStore')(observer(MyContent))
