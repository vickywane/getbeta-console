import React from 'react'
import Player from 'react-player'

import { FiX } from 'react-icons/fi'
import { PageHead, Title, Text, Hover } from '../../../styles/style'

const ContentPlayer = props => {
  const { goBack, title, url } = props

  return (
    <div>
      <PageHead>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Hover onClick={() => goBack()} style={{ margin: '0 .5rem' }}>
            <FiX style={{ fontSize: '1.4rem' }} />
          </Hover>
          <Title style={{ paddingTop: '6px' }}> {title} </Title>.
        </div>
      </PageHead>

      <Player
        width="100%"
        height="500px"
        style={{}}
        controls={true}
        url={
          'https://res.cloudinary.com/dkfptto8m/video/upload/v1603000479/WhatsApp_Video_2020-08-25_at_11.54.12_PM.mp4'
        }
      />
    </div>
  )
}

export default ContentPlayer
