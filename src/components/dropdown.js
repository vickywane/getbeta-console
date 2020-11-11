import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const DropdownBody = styled.div`
  section {
    background: #fff;
    height: auto;
    width: auto;
    padding: 0.1rem 0.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 3px grey;
    position: absolute;
    display: ${props => (props.show ? 'flex' : 'none')};
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
  &: hover {
    section {
      cursor: pointer;
    }
  }
`

const Dropdown = ({ children, show }) => <DropdownBody show={show}>{children}</DropdownBody>

export default Dropdown
