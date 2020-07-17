import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Flex from 'styled-flex-component'
import { FiSearch } from 'react-icons/fi'
import { inject, observer } from 'mobx-react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Hover, Header as Head, HeaderLinks, Text, InputBox } from '../../styles/style'
import { StyledSetting, StyledSearch } from '../../styles/navigation'
import { SettingsPane } from '../'
import { Burger, Notification } from './'
import useWindowWidth from '../../hook_style'
import '../../App.css'

const Input = styled.input`
  height: 4vh
  width: 40rem;
  padding: 0.7em 1.5rem;
  display : flex;
  flex: 1;
  border: 0px
  outline: 0px;
  color:  #fff;
  margin: ${props => (props.unmargined ? '0rem' : '0.1rem 1rem')};
  padding-left: 10px;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: all 300ms;
  background: ${props => (props.transparent ? 'transparent' : null)};
    ${media.lessThan('huge')`
    width: ${props => (props.wide ? '60rem' : '30rem')};
    `};
    ${media.lessThan('large')`
  width: 27rem;
  height: 3.5vh
  `};
  ${media.lessThan('medium')`
  width: ${props => (props.wide ? '52rem' : 'auto')};
  `};
  ${media.lessThan('small')`
  width: ${props => (props.wide ? '52rem' : 'auto')};
  `};
  &: hover {
     
  }
`

const Header = (props): JSX.Element => {
  const hooks: number = useWindowWidth()
  const [SettingsVisibility, setSettingsVisibility] = useState<boolean>(false)
  const { showSearchBar, searchText }: any = props
  const { showProfilePane }: any = props.ConsoleStore
  const [open, setOpen] = useState(false)
  const menuId: string = 'main-menu'

  if (props.page === 'non-app') {
    return (
      <Head
        style={{
          boxShadow: props.unshadowed ? null : '0px 5px 5px grey',
          paddingTop: '2%'
        }}
      >
        <Flex justifyCenter>
          <HeaderLinks target={'_blank'} href="https://my-event.netlify.com">
            Oasis
          </HeaderLinks>
        </Flex>
      </Head>
    )
  }

  // console.log(props)

  return (
    <div>
      <Head
        style={{
          boxShadow: props.unshadowed ? null : '0px 5px 5px grey'
        }}
      >
        {hooks >= 720 ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h4 style={{ paddingTop: '10px' }}>
                <HeaderLinks
                  style={{ textDecoration: 'none' }}
                  target={'_blank'}
                  href="https://my-event.netlify.com"
                >
                  OASIS
                </HeaderLinks>
              </h4>

              {props.screen !== 'home' && (
                <Link
                  to="/console"
                  style={{
                    paddingLeft: '10px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.5rem'
                  }}
                >
                  | Home
                </Link>
              )}
            </div>

            <HeaderLinks
              style={{
                paddingLeft: '5px',
                color: 'white',
                fontSize: '1.6em',
                paddingTop: '5px'
              }}
            >
              {props.event}
            </HeaderLinks>

            {showSearchBar ? (
              <div>
                {hooks >= 1000 ? (
                  <InputBox>
                    <Flex>
                      <Hover style={{ paddingTop: '10px ' }}>
                        <FiSearch style={{ fontSize: '1.6rem', color: '#fff' }} />
                      </Hover>

                      <Input tiny white placeholder={searchText} transparent unbordered />
                    </Flex>
                  </InputBox>
                ) : null}
              </div>
            ) : null}

            {props.middleText ? (
              <Text white bold>
                {props.text}
              </Text>
            ) : null}

            <Flex>
              {hooks >= 1000 ? null : (
                <StyledSearch
                  onClick={() => {
                    setSettingsVisibility(!SettingsVisibility)
                  }}
                />
              )}
              <div>
                <Burger type="Notification" open={open} setOpen={setOpen} aria-controls={menuId} />
                <Notification open={open} setOpen={setOpen} id={menuId} />
              </div>

              <StyledSetting
                onClick={() => {
                  setSettingsVisibility(!SettingsVisibility)
                }}
              />

              <CSSTransition
                timeout={30000}
                in={SettingsVisibility === true}
                unmountOnExit={true}
                classNames={'setting'}
                onEnter={() => {}}
              >
                <SettingsPane />
              </CSSTransition>
            </Flex>
          </div>
        ) : (
          <Flex justifyBetween style={{ padding: '0.5em', paddingRight: '1%' }}>
            <Link to="/console">
              <HeaderLinks>Oasis</HeaderLinks>
            </Link>

            {props.screen === 'Docs' ? null : (
              <div>
                <Burger type="Burger" open={open} setOpen={setOpen} aria-controls={menuId} />
                <Notification open={open} setOpen={setOpen} id={menuId} />
              </div>
            )}
          </Flex>
        )}
      </Head>
      <br />
      <br />
    </div>
  )
}

export default inject('AuthStore', 'ConsoleStore')(observer(Header))
