import React, { useRef, useState } from 'react'
import { inject, observer } from 'mobx-react'
import Flex from 'styled-flex-component'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import useScrollPosition from '../../utils/scrollTrackerHook'

import Explore from './explore'
import Organizing from './organizing'
import Volunteering from './volunteering'
import Profile from '../user/profile'
import { Header, Footer, Loader } from '../../components/'
import { WelcomeModal } from '../../components/modals/'
import { Contain, Switch, SwitchBtn } from '../../styles/style'
import { GET_USER } from '../../data/queries'
import useWindowWidth from '../../hook_style'

import '../../App.css'

const Div = styled.div`
  transition: all 400ms;
  filter: ${props => props.grayed && 'grayscale(75%) blur(0.7px)'};
`

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: localStorage.getItem('user_id'),
      name: ''
    }
  })
  const { LogOut } = props.AuthStore
  const { showWelcomeModal } = props.ModalStore
  const { activeConsoleView, setConsoleView } = props.ConsoleStore
  const Width = useWindowWidth()

  const PositionStore = () => {
    const [renderCount, triggerReRender] = useState(0)
    const elementPosition = useRef({ x: 10, y: 150 })
    const viewportPosition = useRef({ x: 0, y: 0 })
    let throttleTimeout = null

    const getPos = (el, axis) => Math.round(el.current[axis])

    const setPos = (el, pos) => {
      el.current = pos
      if (throttleTimeout !== null) return
      // Only re-render the component every 0.1s
      throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
    }

    return {
      getElementX: () => getPos(elementPosition, 'x'),
      getElementY: () => getPos(elementPosition, 'y'),
      getViewportX: () => getPos(viewportPosition, 'x'),
      getViewportY: () => getPos(viewportPosition, 'y'),
      setElementPosition: pos => setPos(elementPosition, pos),
      setViewportPosition: pos => setPos(viewportPosition, pos),
      renderCount
    }
  }

  const Scroll = useScrollPosition(false, [PositionStore()])

  if (error) {
    return (
      <Loader
        type={'error'}
        error={error.graphQLErrors[0].message}
        path={error.graphQLErrors[0].path[0]}
      />
    )
  }

  if (loading) {
    return <Loader type={'loading'} />
  }

  return (
    <Div grayed={showWelcomeModal}>
      <div>
        <Header screen="home" showSearchBar searchText="Search Home Console" />
      </div>

      <br />

      <div
        style={{
          transition: 'all 400ms',
          filter: showWelcomeModal && 'grayscale(0px) blur(0px)'
        }}
      >
        <WelcomeModal username={data.user.name} />
      </div>

      <Profile User={data} logout={LogOut} />
      <Contain showImage={true}>
        <br />
        <Flex justifyCenter>
          <Switch>
            <Flex>
              <Flex>
                <SwitchBtn
                  active={activeConsoleView === 'organizing'}
                  onClick={() => {
                    setConsoleView('organizing')
                  }}
                >
                  Organizing
                </SwitchBtn>
                <div style={{ borderRight: '4px solid  #401364' }} />
              </Flex>

              <Flex>
                <SwitchBtn
                  color="#0e2f5a"
                  active={activeConsoleView === 'volunteering'}
                  onClick={() => {
                    setConsoleView('volunteering')
                  }}
                >
                  Volunteering
                </SwitchBtn>
                <div style={{ borderRight: '4px solid  #401364' }} />
              </Flex>

              <SwitchBtn
                active={activeConsoleView === 'explore'}
                onClick={() => {
                  setConsoleView('explore')
                }}
              >
                Explore Events
              </SwitchBtn>
            </Flex>
          </Switch>
        </Flex>
        <br />

        <Organizing width={Width} activeSection={activeConsoleView} events={data.user.events} />
        <Volunteering
          width={Width}
          data={data}
          eventVolunteered={data.user.volunteering}
          activeSection={activeConsoleView}
        />
        <Explore width={Width} activeSection={activeConsoleView} />
        <br />
      </Contain>

      <Footer />
    </Div>
  )
}

export default inject('ConsoleStore', 'AuthStore', 'ModalStore')(observer(Console))
