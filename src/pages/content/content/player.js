import React, { useState, useEffect } from 'react'
import Player from 'react-player'
import { FiX, FiDownload, FiClock } from 'react-icons/fi'
import { IoMdDownload } from 'react-icons/io'
import styled from 'styled-components'
import media from 'styled-media-query'
import { saveAs } from 'file-saver'
import { Box } from '@chakra-ui/core'
import moment from 'moment'

import useWindowWidth from '../../../utils/hook_style'
import { Title, Text, Hover, Body, center, Button } from '../../../styles/style'

const ContentImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  ${media.lessThan('large')`
      height: 100%;
      text-align : center;
      width: 100%;
  `}
`

const ContentContainer = styled.div``

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 30%;
  ${media.lessThan('large')`
      display : flex;
      flex-direction : column;
  `};
`

const StyledBody = styled(Body)`
  background-color: #f2f2f2;
  border-left: 1px solid #c0c0c0;
  ${media.lessThan('large')`
    border-left: 0;
  `};
`

const ContentPlayer = props => {
  const { goBack, contentDetails } = props
  const [contentFileType, setContentFileType] = useState('')
  // const { name, url, description  , dateCreated} = contentDetails

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

  const ReviewInput = styled.div`
    display: flex;
    flex-direction: column;
    label {
      font-size: 0.9rem;
    }
    textarea {
      font-size: 0.9rem;
      border: 1px solid grey;
      border-radius: 5px;
      height: 15vh;
      padding: 0.5rem 1rem;
      background: #fff;
    }
  `

  const Width = useWindowWidth()

  const handleDownload = () => {}

  return (
    <div>
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
            <ContentContainer
              style={{
                height: Width >= 1500 && window.innerHeight - 50,
                display: 'flex',
                backgroundColor: '#f2f2f2',
                justifyContent: 'center'
              }}
            >
              <ContentImage src={url} alt="a content file" />
            </ContentContainer>
            <StyledBody>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ ...center, paddingTop: '10px' }}>
                    <Box
                      color="gray.700"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="1"
                      isTruncated
                    >
                      {contentName}
                    </Box>
                  </div>

                  <Hover>
                    <IoMdDownload />
                  </Hover>
                </div>
                <hr />

                <div style={{ display: 'flex' }}>
                  <Hover style={{ margin: '0 .3rem' }}>
                    <FiClock />
                  </Hover>

                  <Text style={{ paddingTop: '5px' }}>
                    {' '}
                    {moment('Wed Nov 04 2020 00:02:23 GMT+0100').format('dddd-yy-mm')}{' '}
                  </Text>
                </div>
                <Text> {description} </Text>
              </div>
              <br />

              <div style={{}}>
                <Title small> 0 Content Reviews </Title>

                <hr />
              </div>

              <ReviewInput>
                <label> Your content review</label>

                <textarea placeholder="Your own content review" />
              </ReviewInput>
            </StyledBody>
          </Grid>
        )}
      </div>
    </div>
  )
}

export default ContentPlayer
