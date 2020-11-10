import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const DropdownBody = styled.div`
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
      padding: 0.1rem 0.5rem;
      border-radius: 5px;
      box-shadow: 0 2px 3px grey;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
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

const Dropdown = ({ children }) => <DropdownBody>{children}</DropdownBody>

export default Dropdown
