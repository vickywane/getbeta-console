import React, { useState, useRef, useEffect, useReducer } from 'react'
import { Header, Footer, Portal, Loader } from '../../../components/'
import { Body, Title } from '../../../styles/style'
import { useQuery } from '@apollo/react-hooks'
import { GET_STREAM } from '../../../data/queries'
import { CSSTransition } from 'react-transition-group'
import StreamStatistics from '../stats/streamStats'
import { StreamState } from '../../../state/context/contextState'
import { StreamReducer } from '../../../state/context/reducers'
import StreamPreview from './streamPreview'

const Stream = (props): JSX.Element => {
  const [state, dispatch] = useReducer(StreamReducer, StreamState)
  console.log(state)

  const { data, error, loading } = useQuery(GET_STREAM, {
    variables: {
      id: props.match.params.id
    }
  })

  if (loading) {
    return <Loader type={'loading'} />
  }

  if (error) {
    console.log(error)
    return <Loader type={'error'} />
  }

  if (data) {
    const { title } = data.stream

    return (
      <div>
        <Header />
        <br />
        <CSSTransition timeout={300} in={state.activeView === 'statistics'} unmountOnExit>
          <Body>
            <StreamStatistics dispatch={dispatch} data={data.stream} />
          </Body>
        </CSSTransition>

        <CSSTransition timeout={300} in={state.activeView === 'preview'} unmountOnExit>
          <StreamPreview dispatch={dispatch} data={data.stream} />
        </CSSTransition>
        <Footer />
      </div>
    )
  }
}

export default Stream
