import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiMoreHorizontal, FiTrash2, FiDownload } from 'react-icons/fi'
import { navigate } from '@reach/router'

import { Title, Text, Hover } from '../styles/style'

const List = styled.ul`
  margin: 0.5rem 0;
  list-style: none;
  padding: 0;
  ${media.lessThan('medium')`
   padding: 0rem;
   margin: 0rem;
  `};
`

const File = styled.li`
  margin: 1rem 1rem;
  padding: 5px 5px;
  display: flex;
  transition: all 300ms;
  flex-direction: column;
  border-radius: 7px;
  border: 1px solid #fff;
  span {
    padding: 10px 0;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }
  &: hover {
    border: 1px solid #c0c0c0;
  }
  ${media.lessThan('medium')`
      margin: .5rem 0.5rem;
      span {
        padding-bottom : 5px 0;
      }
  `};
  ${media.lessThan('small')`
      margin: .5rem 0.2rem;
    padding: 1px 1px;
      span {
        padding-bottom : 10px 0;
      }
  `};
`

const ContentTitle = styled(Title)`
  &:hover {
    cursor: pointer;
    color: #0072ce;
  }
`

const ContentFileCard = props => {
  const {
    setContentDetail,
    files,
    data,
    setPreviewUrl,
    Width,
    setHeaderName,
    setCurrentView,
    contentStore
  } = props

  const { deleteContentFile } = contentStore

  return (
    <List>
      {files !== undefined &&
        files.map(({ _id, filename, dateCreated, url }) => {
          const name = filename.split('.')[0]

          return (
            <File key={_id} onClick={() => setPreviewUrl(url)}>
              <span>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #c0c0c0'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ContentTitle
                      small
                      onClick={() => {
                        setHeaderName(data.title)

                        setContentDetail({
                          name: filename,
                          url: url,
                          dateCreated: dateCreated,
                          description:
                            'Content file description is lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam optio perferendis magni  beatae in.'
                        })

                        navigate('/player', {
                          state: {
                            contentDetails: {
                              name: filename,
                              url: url,
                              dateCreated: dateCreated,
                              description:
                                'Content file description is lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam optio perferendis magni  beatae in.'
                            }
                          }
                        })
                        // setCurrentView('player')
                      }}
                      style={{ margin: '0 .5rem' }}
                    >
                      {name}
                    </ContentTitle>

                    {Width >= 600 && <Text color="grey"> Uploaded 5 minutes ago </Text>}
                  </div>

                  <div style={{ display: 'flex' }}>
                    <Hover style={{ margin: '0 .5rem' }}>
                      <FiDownload />
                    </Hover>

                    <Hover onClick={() => deleteContentFile(_id)}>
                      <FiTrash2 />
                    </Hover>
                  </div>
                </div>
              </span>
              <Text style={{ marginLeft: '10px', opacity: 0.9 }}>
                Content file description is lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus aperiam optio perferendis magni beatae in.
              </Text>
            </File>
          )
        })}
    </List>
  )
}

export default ContentFileCard
