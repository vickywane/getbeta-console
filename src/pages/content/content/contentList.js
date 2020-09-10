import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { Spinner } from 'react-bootstrap'
import { FaMoneyBill } from 'react-icons/fa'

import Header from '../../../components/headers/header'
import { Text, Title, Searchbox, StyledHover, Button, CardGrid, Card } from '../../../styles/style'
import { FiSearch, FiFilter } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 3rem;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Contents = props => {
  const [contents, setContents] = useState([])
  const [cp, setCP] = useState([])

  const { fetchContents, isLoadingContents } = props.ContentStore

  useEffect(() => {
    setCP(fetchContents())
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setContents(cp)
    }, 1000)
  }, [cp])

  return (
    <div>
      <Header
        backgroundColor="rgba(233, 241, 251, 0.81)"
        showSearch={true}
        searchText="Search For A Content Material"
      />

      <Body>
        <div style={{ margin: '0.5rem 0', justifyContent: 'space-between', display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <StyledHover onClick={() => {}}>
              <Text style={{ margin: '0 0.5rem' }}> Filter Content </Text>

              <FiFilter style={{ fontSize: '1.7rem' }} />
            </StyledHover>
          </div>

          <div style={{ ...center }}>
            <Searchbox>
              <div>
                <FiSearch style={{ fontSize: '1.6rem' }} />
              </div>

              <input placeholder="Seach for a content" />
            </Searchbox>
          </div>
        </div>
        <br />

        <CardGrid style={{ height: window.innerHeight - 190, overflow: 'auto' }}>
          {contents.length < 1 ? (
            <div style={{ ...center }}>
              <Spinner variant="primary" animation="grow" role="loading" />
            </div>
          ) : (
            contents[0].map(({ _id, title, descrp, type, price }) => {
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

export default Contents
