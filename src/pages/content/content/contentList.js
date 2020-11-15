import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiSearch, FiChevronDown, FiX } from 'react-icons/fi'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import media from 'styled-media-query'

import ModalWrapper from '../../../components/modals/modalWrapper'
import { filterData } from '../../../utils/filterData'
import Dropdown from '../../../components/dropdown'
import ContentCard from '../../../components/contentCard'
import SubscribeModal from './subscribeModal'
import useWindowWidth from '../../../utils/hook_style'
import Header from '../../../components/headers/header'
import { Text, Searchbox, center, Button, Hover } from '../../../styles/style'
import BillingAccountModal from '../../../components/billingAccount'

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
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  place-items : center;
  `};
  li {
    list-style: none;
  }
`

const FilterBtn = styled.div`
  height: auto;
  width: auto;
  padding: 0 0.5rem;
  display: flex;
  transition: all 350ms;
  &: hover {
    cursor: pointer;
  }
`

const Contents = props => {
  const {
    fetchContents,
    isLoadingContents,
    contents,
    showBillingAccountModal,
    closeBillingAccountModal
  } = props.ContentStore
  const [showModal, setModal] = useState(false)
  const [filter, setFilter] = useState('')
  const [filterType, setFilterType] = useState('Recently Added')
  const [Data, setData] = useState([])
  const [showDropdown, setDropdownVisibility] = useState(false)
  const [showSubscribeModal, setSubscribeModal] = useState(false)

  useEffect(() => {
    fetchContents()
  }, [])

  let contentList = toJS(contents)

  useEffect(() => {
    // DATA FILTERING HERE
    setData(contentList)
  }, [contents])

  useEffect(() => {
    if (filter.length > 2) {
      filterData(filter, contentList).then(result => {
        setData(result[0])
        setFilterType(result[1])
      })
    }
  }, [filter])

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
        title="Subscribe to content"
        visibility={showSubscribeModal}
        closeModal={() => setSubscribeModal(!showSubscribeModal)}
      >
        <SubscribeModal setSubscribeModal />
      </ModalWrapper>

      <ModalWrapper
        title="Create Billing Account"
        visibility={showBillingAccountModal}
        closeModal={() => closeBillingAccountModal()}
      >
        <BillingAccountModal />
      </ModalWrapper>

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

          <div style={{ display: 'flex', marginRight: '40px' }}>
            <Dropdown show={showDropdown}>
              <div style={{ display: 'flex' }}>
                <Text style={{ marginLeft: '5px' }}>Sort By : </Text>

                <FilterBtn
                  onClick={() => setDropdownVisibility(!showDropdown)}
                  style={{
                    marginLeft: '2px',
                    backgroundColor: showDropdown && 'rgba(233, 241, 251, 0.81)'
                  }}
                >
                  <Text weight="bold">{filterType} </Text>
                </FilterBtn>
              </div>

              <section>
                <ul>
                  <li>
                    <div style={{ ...center }}>
                      <input
                        style={{ width: '1.2rem', height: '1.1rem' }}
                        checked={filter === 'LATEST'}
                        value="LATEST"
                        onChange={e => setFilter(e.target.value)}
                        type="radio"
                      />
                    </div>
                    <Text style={{ marginTop: '10px' }}> Recently Added Contents </Text>{' '}
                  </li>
                  <li>
                    <div style={{ ...center }}>
                      <input
                        style={{ width: '1.2rem', height: '1.1rem' }}
                        checked={filter === 'OLDEST'}
                        value="OLDEST"
                        onChange={e => setFilter(e.target.value)}
                        type="radio"
                      />
                    </div>
                    <Text style={{ marginTop: '10px' }}> Old Contents </Text>{' '}
                  </li>
                  <li>
                    <div style={{ ...center }}>
                      <input
                        checked={filter === 'MOST_VIEWED'}
                        value="MOST_VIEWED"
                        onChange={e => setFilter(e.target.value)}
                        style={{ width: '1.2rem', height: '1.1rem' }}
                        type="radio"
                      />
                    </div>
                    <Text style={{ marginTop: '10px' }}> Most Viewed Content </Text>{' '}
                  </li>
                  <li>
                    <div style={{ ...center }}>
                      <input
                        style={{ width: '1.2rem', height: '1.1rem' }}
                        checked={filter === 'MY_CONTENT'}
                        value="MY_CONTENT"
                        onChange={e => setFilter(e.target.value)}
                        type="radio"
                      />
                    </div>
                    <Text style={{ marginTop: '10px' }}>My Created Contents</Text>{' '}
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
                coverImage,
                vendorId,
                title
              }) => {
                return (
                  <li key={_id}>
                    <ContentCard
                      id={_id}
                      createdAt={createdAt}
                      descrp={descrp}
                      coverImage={coverImage}
                      price={price}
                      contentfiles={contentfiles}
                      type={type}
                      showSubscribeModal={val => setSubscribeModal(val)}
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

export default inject('UserStore')(observer(Contents))
