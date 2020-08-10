import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import renderer from 'react-test-renderer'

import Main from '../Main'

describe('Index.js test', () => {
  it('It renders the Apollo Provider without crashing', () => {
    renderer.create(
      <MockedProvider addTypename={false}>
        <Main />
      </MockedProvider>
    )
  })
})
