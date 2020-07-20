import * as React from 'react'
import styled from 'styled-components'
import { FiShoppingCart, FiUsers, FiAlignJustify, FiImage, FiLayers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { Tab, TabColumn } from '../../styles/style'
import { Hover } from '../../styles/style'

// TODO : This component should be a reusable component using props!

const HoverCircle = styled(Hover)`
  width: 45px;
  height: 40px;
  transition: all 300ms;
  display: flex;
  justify-content: center;
  color: #0e2f5a;
  align-items: center;
  border-radius: 5px;
  &: hover {
    background: #0e2f5a;
    color: #fff;
  }
`

const EventTabs = props => {
  const { dispatch, state, data } = props

  const { id } = data.event

  const bucketName = 'lucid-shirly' // remove later!!!!
  return (
    <div
      style={{
        display: 'flex',
        padding: '1rem 0rem 0rem 0rem',
        justifyContent: 'space-between'
      }}
    >
      <HoverCircle
        onClick={() => {
          state.showEventDetails
            ? dispatch({ type: 'CLOSE_EVENT_PANE' })
            : dispatch({ type: 'SHOW_EVENT_PANE' })
        }}
        style={{ padding: '0.5rem 0rem' }}
      >
        <FiChevronUp
          style={{
            transition: 'all 400ms',
            transform: !state.showEventDetails && 'rotate(180deg)',
            fontSize: '2.2rem'
          }}
        />
      </HoverCircle>
      <Tab style={{ justifyContent: 'center' }} key={state.id}>
        <TabColumn
          active={state.activeTab === 'detail'}
          onClick={() => {
            dispatch({ type: 'CLOSE_EVENT_PANE' })
            dispatch({ type: 'SWITCH_DETAIL' })
          }}
        >
          <Hover style={{ padding: '0rem 1rem' }}>
            <FiAlignJustify style={{ fontSize: '1.7rem' }} />
          </Hover>
          About
        </TabColumn>
        <TabColumn
          active={state.activeTab === 'people'}
          onClick={() => {
            dispatch({ type: 'CLOSE_EVENT_PANE' })
            dispatch({ type: 'SWITCH_PEOPLE' })
          }}
        >
          <Hover style={{ padding: '0rem 1rem' }}>
            <FiUsers style={{ fontSize: '1.7rem' }} />
          </Hover>
          People
        </TabColumn>
        <TabColumn
          active={state.activeTab === 'tracks'}
          onClick={() => {
            dispatch({ type: 'CLOSE_EVENT_PANE' })
            dispatch({ type: 'SWITCH_TRACKS' })
          }}
        >
          <Hover style={{ padding: '0rem 1rem' }}>
            <FiLayers style={{ fontSize: '1.7rem' }} />
          </Hover>
          Tracks
        </TabColumn>

        <Link style={{ textDecoration: 'none' }} to={`/media/${id}/${bucketName}`}>
          <TabColumn style={{ padding: '0.3rem 0rem' }}>
            <Hover style={{ padding: '0rem 1rem' }}>
              <FiImage style={{ fontSize: '1.7rem' }} />
            </Hover>
            Gallery
          </TabColumn>
        </Link>

        <TabColumn
          active={state.activeTab === 'shop'}
          onClick={() => {
            dispatch({ type: 'CLOSE_EVENT_PANE' })
            dispatch({ type: 'SWITCH_SHOP' })
          }}
        >
          <Hover style={{ padding: '0rem 1rem' }}>
            <FiShoppingCart style={{ fontSize: '1.7rem' }} />
          </Hover>
          Marketplace
        </TabColumn>
      </Tab>
      .
    </div>
  )
}

export default EventTabs
