import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import media from 'styled-media-query'
import ModalWrapper from '../../../components/modals/modalWrapper'

import Dropdown from '../../../components/dropdown'
import ContentCard from '../../../components/contentCard'
import useWindowWidth from '../../../utils/hook_style'
import Header from '../../../components/headers/header'
import { Text, Searchbox, center, Button, Hover } from '../../../styles/style'

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

const FilterBtn = styled.div`
  height: auto;
  width: auto;
  padding: 0.8rem 1.5ren;
  display: flex;
  &: hover {
    background: rgba(233, 241, 251, 0.81);
    cursor: pointer;
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

      <Body>
        <Grid style={{ margin: '0.5rem 0' }}>
          <div style={{ ...center }}>
            <Searchbox>
              <div style={{ paddingTop: '5px' }}>
                <FiSearch style={{ fontSize: '1.3rem' }} />
              </div>

              <input placeholder="Seach for a content" type="text" />
            </Searchbox>
          </div>

          <div style={{ display: 'flex' }}>
            <Dropdown>
              <div style={{ display: 'flex' }}>
                <Text style={{ marginLeft: '10px' }}>Sort By : </Text>

                <FilterBtn style={{ marginLeft: '5px' }}>
                  <Text>Recently Adxded </Text>

                  <div style={{ m, arginLeft: '' }}>
                    <FiChevronDown style={{ fontSize: '1.2rem}' }} />
                  </div>
                </FilterBtn>
              </div>

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
                    <Text
                      style={{ marginTop: '10px' }}
                      onClick={() => setFilter(localStorage.getItem('userId'))}
                    >
                      My Created Contents
                    </Text>{' '}
                  </li>
                  <li>
                    <div style={{ ...center }}>
                      <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
                    </div>
                    <Text style={{ marginTop: '10px' }}> My Created Contents </Text>{' '}
                  </li>
                </ul>
              </section>
            </Dropdown>
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
