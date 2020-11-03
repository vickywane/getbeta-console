import React, { useState, useEffect } from 'react'
import Player from 'react-player'
import { FiX, FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import media from 'styled-media-query'
import { saveAs } from 'file-saver'

import { PageHead, Title, Text, Hover, Body, center, Button } from '../../../styles/style'

const ContentImage = styled.img`
  height: 60%;
  width: 100%;
  object-fit: contain;
  ${media.lessThan('large')`
      height: 100%;
      text-align : center;
      width: 100%;
  `}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 30%;
  ${media.lessThan('large')`
      display : flex;
      flex-direction : column;
  `};
`

const ContentPlayer = props => {
  const { goBack, contentDetails } = props
  const [contentFileType, setContentFileType] = useState('')
  // const { name, url, description } = contentDetails

  const url = 'https://storage.googleapis.com/get-beta/Screenshot_from_2020-10-31_21-33-00.png'
  const name = 'Screenshot_from_2020-10-31_21-33-00.png'
  const description =
    'Content file description is lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam optio perferendis magni  beatae in.'

  const [contentName, setContentName] = useState('')

  useEffect(() => {
    const file = url.split('.')
    const fileType = file[file.length - 1]

    setContentName(name.split('.')[0])

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

  const handleDownload = () => {}

  return (
    <div>
      {/* <PageHead>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Hover onClick={() => goBack()} style={{ margin: '0 .5rem' }}>
            <FiX style={{ fontSize: '1.4rem' }} />
          </Hover>
          <Title style={{ paddingTop: '6px' }}> {contentName} </Title>.
        </div>
      </PageHead> */}

      <div>
        {contentFileType === 'video' ? (
          <Grid>
            <Player width="100%" height="500px" style={{}} controls={true} url={url} />
            <Body>
              <Title> {contentName} </Title>
              <Text> {description} </Text>
            </Body>
          </Grid>
        ) : (
          <Grid>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ContentImage src={url} alt="a content file" />
            </div>
            <Body style={{ backgroundColor: '#f2f2f2' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ ...center, paddingTop: '10px' }}>
                    <Title small> {contentName} </Title>
                  </div>

                  <Button
                    onClick={() => {
                      saveAs(url, 'image.png')
                    }}
                    small
                  >
                    Download File
                  </Button>
                </div>
                <hr />
                <Text> {description} </Text>
              </div>
              <br />

              <div style={{}}>
                <Title> 0 Reviews </Title>
              </div>
            </Body>
          </Grid>
        )}
      </div>
    </div>
  )
}

export default ContentPlayer
