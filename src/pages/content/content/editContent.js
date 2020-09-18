import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiMoreVertical } from 'react-icons/fi'
import { Text, Body, MdTitle, Hover, center } from '../../../styles/style'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'

import Header from '../../../components/headers/header'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 2rem;
`

const EditContent = props => {
  const { getContent, content } = props.ContentStore
  const { contentId } = props.location.state

  useEffect(() => {
    getContent(contentId)
  }, [])

  console.log(toJS(content), 'id')
  let data = toJS(content)

  return (
    <div>
      <Header />
      <Body style={{ padding: '1rem 1rem' }}>
        <Head>
          <div style={{ ...center }}>
            <MdTitle> {data.title} </MdTitle>
          </div>

          <div style={{ ...center }}>
            <Hover>
              <FiMoreVertical style={{ fontSize: '1.6rem' }} />
            </Hover>
          </div>
        </Head>
        <hr />
      </Body>
    </div>
  )
}

export default observer(EditContent)
