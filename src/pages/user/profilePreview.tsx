import React from 'react'
import { Body, Tab, Head, Section, TabColumn } from '../../styles/style'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import { Footer, Header, Loader, Tip } from '../../components'
import { GET_USER } from '../../data/queries'
import ProfileSidebar from './profileSidebar'
import { inject, observer } from 'mobx-react'
import Organizing from '../console/organizing'
import Volunteering from '../console/volunteering'
import useWindowWidth from '../../hook_style'
import ActionBar from './userActionBar'
import { IoIosTabletPortrait } from 'react-icons/all'

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 0rem;
  grid-template-columns: 26rem auto;
`

const ProfilePreview = (props): JSX.Element => {
  const id = props.match.params.id
  const userId = localStorage.getItem('user_id')

  const isUser = id === userId

  const { authenticated } = props.AuthStore
  const Width = useWindowWidth()
  const { activeConsoleView, setConsoleView, toggleProfilePane } = props.ConsoleStore
  console.log(Width)

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      id: id,
      name: ''
    }
  })

  if (loading) {
    return <Loader type={'loading'} />
  }

  if (error) {
    return (
      <Loader
        type={'error'}
        error={error.graphQLErrors[0].message}
        path={error.graphQLErrors[0].path[0]}
      />
    )
  }

  if (data) {
    return (
      <div>
        <Header />
        <br />
        <Grid style={{ height: window.innerHeight - 130 }}>
          <ProfileSidebar auth={authenticated} data={data.user} />

          <div>
            <Head header>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Section>{activeConsoleView}</Section>
              </div>

              <Tab>
                <TabColumn
                  active={activeConsoleView === 'organizing'}
                  onClick={() => setConsoleView('organizing')}
                >
                  Organizing
                </TabColumn>

                <TabColumn
                  active={activeConsoleView === 'volunteering'}
                  onClick={() => setConsoleView('volunteering')}
                >
                  Volunteering
                </TabColumn>
              </Tab>
            </Head>

            {Width <= 1000 && (
              <Tip
                icon1={<IoIosTabletPortrait style={{ fontSize: '2rem' }} />}
                message={'You now using your Oasis console with the tablet mode enabled.'}
                timeout={3000}
              />
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'auto 5rem' }}>
              <div>
                <Body style={{ paddingRight: '3rem' }}>
                  <Organizing
                    width={Width}
                    isUser={isUser}
                    activeSection={activeConsoleView}
                    events={data.user.events}
                    streams={data.user.streams}
                  />
                </Body>

                <Body style={{ paddingRight: '3rem' }}>
                  <Volunteering
                    width={Width}
                    data={data}
                    isUser={isUser}
                    eventVolunteered={data.user.volunteering}
                    activeSection={activeConsoleView}
                  />
                </Body>
              </div>

              {isUser && (
                <div
                  style={{
                    position: 'absolute',
                    top: '35%',
                    right: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <ActionBar screen="friends" />
                </div>
              )}
            </div>
          </div>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default inject('AuthStore', 'ConsoleStore')(observer(ProfilePreview))
