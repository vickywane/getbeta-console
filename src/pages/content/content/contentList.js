import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import media from 'styled-media-query'
import ModalWrapper from '../../../components/modals/modalWrapper'

import ContentCard from '../../../components/contentCard'
import useWindowWidth from '../../../utils/hook_style'
import Header from '../../../components/headers/header'
import { Text, Searchbox, Hover, center, Button } from '../../../styles/style'

const Body = styled.div`
  padding: 1rem 1rem;
  height: calc(100vh - 55px);
  overflow: auto;
  ${media.lessThan('medium')`
  padding: 0.5rem 1rem;
  `};
  ${media.lessThan('small')`
  padding: 0.2rem 0.3rem;
  `};
`

const FilterButton = styled(Button)`
  display: none;
  ${media.lessThan('small')`
      display : flex;
      height : 35px;
  `};
`

const FilterBody = styled.div`
  section {
    display: none;
  }

  &: hover {
    section {
      background: #fff;
      position: absolute;
      display: flex;
      height: auto;
      width: auto;
      padding: 0.5rem 0.5rem;
      border-radius: 5px;
      box-shadow: 0 2px 3px grey;
      ul {
        list-style: none;
        padding: 0;
        li {
          display: flex;
          margin: 0.1rem 0.5rem;
          cursor: pointer;
          div {
            margin-right: 10px;
          }
        }
      }
    }
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  ${media.lessThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  `};
  ${media.lessThan('medium')`
   grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  `};
  ${media.lessThan('small')`
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  `};
  li {
    list-style: none;
  }
`

const Contents = props => {
  const { fetchContents, isLoadingContents, contents } = props.ContentStore
  const [showModal, setModal] = useState(false)
  const [filter, setFilter] = useState('')
  const [Data, setData] = useState([])

  useEffect(() => {
    fetchContents()
  }, [])

  let contentList = toJS(contents)

  useEffect(() => {
    // DATA FILTERING HERE
    setData(contentList)

    if (filter.length > 2) {
      const filtered = contentList.filter(data => data.vendorId === filter)

      setData(filtered)
    }
  }, [contents, filter])

  const Width = useWindowWidth()

  const Grid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${media.lessThan('medium')`
      display : flex;
      flex-direction : column;
      justify-content : space-between;
    `};
  `

  return (
    <div style={{ height: '100%' }}>
      <Header backgroundColor="rgba(233, 241, 251, 0.81)" showSearch={true} />
      <ModalWrapper
        visibility={showModal}
        size="lg"
        closeModal={() => setModal(false)}
        title="Filter Contents"
      >
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input style={{ width: '1.5rem', height: '1.3rem' }} type="radio" />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> By Content Release Date </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input style={{ width: '1.5rem', height: '1.3rem' }} type="radio" />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> By Content Viewer's Rating </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input style={{ width: '1.5rem', height: '1.3rem' }} type="radio" />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> By Content Rating </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input
                onClick={() => setFilter(localStorage.getItem('userId'))}
                style={{ width: '1.5rem', height: '1.3rem' }}
                type="radio"
              />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> Show only content created by me</Text>
          </div>

          <hr />
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ opacity: '0' }}> .</p>

              <Button
                onClick={() => {
                  setModal(false)
                }}
              >
                Apply Filter
              </Button>
            </div>
          </div>
        </div>
      </ModalWrapper>

      <Body>
        <Grid style={{ margin: '0.5rem 0' }}>
          <div style={{ display: 'flex' }}>
            {/* <FilterButton onClick={() => setModal(true)}>
              <FiFilter style={{ fontSize: '1.1rem' }} />
            </FilterButton> */}
            {/* <StyledFilter onClick={() => setModal(true)}>
              <Text style={{ margin: '0 0.5rem' }}> Filter Content </Text>
              <FiFilter style={{ fontSize: '1.3rem' }} />
            </StyledFilter> */}

            <div style={{ display: 'flex' }}>
              <FilterBody>
                <Text style={{ marginLeft: '10px' }}>
                  Sort By :{' '}
                  <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                    Recently Added
                  </span>
                  <section>
                    <ul>
                      <li>
                        <div style={{ ...center }}>
                          <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
                        </div>
                        <Text style={{ marginTop: '10px' }}> Recently Added Contents </Text>{' '}
                      </li>
                      <li>
                        <div style={{ ...center }}>
                          <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
                        </div>
                        <Text style={{ marginTop: '10px' }}> Most Viewed Content </Text>{' '}
                      </li>
                      <li>
                        <div style={{ ...center }}>
                          <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
                        </div>
                        <Text style={{ marginTop: '10px' }}> My Created Contents </Text>{' '}
                      </li>
                      <li>
                        <div style={{ ...center }}>
                          <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
                        </div>
                        <Text style={{ marginTop: '10px' }}> My Created Contents </Text>{' '}
                      </li>
                    </ul>
                  </section>
                </Text>
              </FilterBody>
            </div>
          </div>

          <div style={{ ...center }}>
            <Searchbox>
              <div style={{ paddingTop: '5px' }}>
                <FiSearch style={{ fontSize: '1.3rem' }} />
              </div>

              <input placeholder="Seach for a content" type="text" />
            </Searchbox>
          </div>
        </Grid>

        <CardGrid style={{ paddingLeft: '1rem', overflow: 'auto' }}>
          {Data.length < 1 ? (
            <div style={{ ...center }}>
              <Spinner variant="primary" animation="grow" role="loading" />
            </div>
          ) : (
            Data.map(
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
            )
          )}
        </CardGrid>
      </Body>
    </div>
  )
}

export default observer(Contents)
