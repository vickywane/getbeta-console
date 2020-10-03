import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <div
      style={{
        height: '27vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Spinner variant="primary" animation="grow" role="loading" />
    </div>
  )
}

export default Loading
