import styled from 'styled-components'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiSettings, FiSearch } from 'react-icons/fi'
import media from 'styled-media-query'

const StyledMenu = styled.nav`
  display: flex;
  color: white;
  flex-direction: column;
  background: #0072ce;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  margin-top: 3.45em;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 60%;
  left: 0;
  transition: all 250ms;
`

const StyledBurger = styled.button`
  position: right;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 1.7rem;
  margin-right  : 10px
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? '#fff' : '#fff')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const StyledNotification = styled(IoIosNotificationsOutline)`
  position: right;
  left: 2rem;
  font-size: 3.3rem;
  color: #fff;
  margin-right : 5px
  transition: all 250ms
  border: none;
  padding: 0.7rem 0.7rem;
  border-radius: 50%
  z-index: 10;
  &: hover {
      color : #401364;
      background: #fff;
      cursor: pointer;
    }
`

const Hover = styled.div`
  cursor: pointer;
  color: ${props => (props.white ? '#fff' : null)};
`

export { StyledMenu, StyledBurger, StyledNotification, Hover }
