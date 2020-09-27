import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { Spinner } from 'react-bootstrap'
import { FaMoneyBill } from 'react-icons/fa'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import media from 'styled-media-query'

import useWindowWidth from '../../../utils/hook_style'
import Header from '../../../components/headers/header'
import { Text, Searchbox, StyledHover, center, CardGrid, Card } from '../../../styles/style'
import { FiSearch, FiFilter } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 2rem;
  ${media.lessThan('medium')`
  padding: 0.5rem 1rem;
  `};
  ${media.lessThan('small')`
  padding: 0.5rem 0.5rem;
  `};
`

const StyledFilter = styled(StyledHover)`
  ${media.lessThan('medium')`
  display : none;
`};
`

const Contents = props => {
  const { fetchContents, isLoadingContents, contents } = props.ContentStore

  useEffect(() => {
    fetchContents()
  }, [])

  const contentList = toJS(contents)
  const Width = useWindowWidth()
  return (
    <div>
      <Header backgroundColor="rgba(233, 241, 251, 0.81)" showSearch={true} />

      <Body>
        <div style={{ margin: '0.5rem 0', justifyContent: 'space-between', display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <StyledFilter onClick={() => {}}>
              <Text style={{ margin: '0 0.5rem' }}> Filter Content </Text>
              <FiFilter style={{ fontSize: '1.5rem' }} />
            </StyledFilter>
          </div>

          <div style={{ ...center }}>
            <Searchbox>
              <div>
                <FiSearch style={{ fontSize: '1.5rem' }} />
              </div>

              <input placeholder="Seach for a content" type="text" />
            </Searchbox>
          </div>
        </div>
        <br />

        <CardGrid style={{ height: window.innerHeight - 170, overflow: 'auto' }}>
          {contentList.length < 1 ? (
            <div style={{ ...center }}>
              <Spinner variant="primary" animation="grow" role="loading" />
            </div>
          ) : (
            contentList.map(({ _id, title, descrp, type, price }) => {
              return (
                <Card key={_id}>
                  <img
                    style={{ height: '170px', width: '400px', objectFit: 'cover' }}
                    alt="courses ilustration detail"
                    src={require('../../../assets/images/college-chemistry.jpg')}
                  />
                  <br />
                  <div>
                    <Link to={`course/${_id}`}>
                      <h4> {title} </h4>
                    </Link>
                    <Text> {descrp} </Text>

                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text> {type} </Text>

                      <span style={{ display: 'flex' }}>
                        <FaMoneyBill style={{ fontSize: '1.7rem' }} />

                        <Text style={{ margin: '0 0.5rem' }}> {price} </Text>
                      </span>
                    </span>
                  </div>
                </Card>
              )
            })
          )}
        </CardGrid>
      </Body>
    </div>
  )
}

export default observer(Contents)
