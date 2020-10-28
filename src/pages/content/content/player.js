import React, { useState, useEffect } from 'react'
import Player from 'react-player'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import media from 'styled-media-query'

import { PageHead, Title, Text, Hover, Body } from '../../../styles/style'

const testUrl =
  'https://res.cloudinary.com/dkfptto8m/video/upload/v1603000479/WhatsApp_Video_2020-08-25_at_11.54.12_PM.mp4'

const ContentImage = styled.img`
  height: 50%;
  width: 60%;
  object-fit: contain;
  ${media.lessThan("large")`
  height: 100%;
  width: 100%;
  `}
`

const ContentPlayer = props => {
  const { goBack, contentDetails } = props
  const [contentFileType, setContentFileType] = useState('')
  const { name, url, description } = contentDetails

  console.log(name, "name");

  useEffect(() => {
    const file = url.split('.')
    const fileType = file[file.length - 1]

    const getFileType = extension => {
      const imageFormats = ['png', 'jpg', 'jpeg', 'svg']
      const videoFormats = ['mp4', 'mkv', 'avi']

      if (imageFormats.includes(extension)) {
        return setContentFileType('image')
      } else if (videoFormats.includes(extension)) {
        return setContentFileType('video')
      }
    }

    getFileType(fileType)

    return () => getFileType(fileType)
  }, [])

  return (
    <div>
      <PageHead>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Hover onClick={() => goBack()} style={{ margin: '0 .5rem' }}>
            <FiX style={{ fontSize: '1.4rem' }} />
          </Hover>
          <Title style={{ paddingTop: '6px' }}> {name} </Title>.
        </div>
      </PageHead>

      {contentFileType === 'video' ? (
        <div>
          <Player width="100%" height="500px" style={{}} controls={true} url={url} />
        </div>
      ) : (
        <div>
          <ContentImage src={url} alt="a content file" />

          <Body>
            <Title> {name} </Title>
            <Text> {description} </Text>
          </Body>
        </div>
      )}
    </div>
  )
}

export default ContentPlayer
