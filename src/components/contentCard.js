import React, { useState, useEffect } from 'react'
import { Badge, Box } from '@chakra-ui/core'
import styled from 'styled-components'
import moment from 'moment'
import { navigate } from '@reach/router'
import { FiCalendar, FiTrash2, FiMousePointer, FiTwitter } from 'react-icons/fi'
import { IoMdCalendar, IoMdShareAlt, IoIosLock } from 'react-icons/io'
import { Spinner } from 'react-bootstrap'
import Dropdown from '../components/dropdown'

import ModalWrapper from '../components/modals/modalWrapper'
import { Hover, Text, center, Button, Title } from '../styles/style'
import media from 'styled-media-query'
import { inject, observer } from 'mobx-react'
import { Login } from '../navigation/authentication'
import { toJS } from 'mobx'

const property = {
  imageUrl:
    'https://res.cloudinary.com/dkfptto8m/image/upload/v1603528071/freelance/placeholer.png',
  imageAlt: 'placeholder for a content file',
  beds: 3,
  baths: 2,
  formattedPrice: '$1,900.00',
  reviewCount: 0,
  rating: 4
}

const ImageBody = styled.div`
  height: 220px;
  padding: 0.5rem 0.5rem;
  width: 100%;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 10px 10 0px 0px;
  object-fit: cover;
  ${media.lessThan('small')`
    height: 170px;
  `};
`

const Card = styled.div`
  width: 20rem;
  border-radius: 5px;
  section {
    padding: 0.5rem 0.1rem;
  }

  &: hover {
    box-shadow: 0 1px 2px grey;
  }
  ${media.lessThan('medium')`
  width: 17rem;
`};
  ${media.lessThan('small')`
     width: 20rem;
  `};
`

const HoverCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: transparent;
  transition: all 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  &: hover {
    color: #fff;
    background: #b21b00;
  }
`

const StyledTitle = styled(Title)`
  &: hover {
    color: #0072ce;
  }
`

const ShareComponent = ({ handleDropdown, showDropdown }) => (
  <Dropdown show={showDropdown}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ ...center }}>
        <Hover onClick={() => handleDropdown()} style={{ display: 'flex' }}>
          <Text small style={{ margin: '.1rem .3rem' }}>
            Share Content
          </Text>

          <IoMdShareAlt />
        </Hover>
      </div>
    </div>
    <section>
      <ul>
        <a
          style={{ textDecoration: 'none' }}
          data-size="large"
          data-text="custom share text"
          data-url="https://dev.twitter.com/web/tweet-button"
          data-hashtags="example,demo"
          data-via="twitterdev"
          data-related="twitterapi,twitter"
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="no-opener"
        >
          <li>
            <div style={{ ...center }}>
              <Hover>
                <FiTwitter />
              </Hover>
            </div>
            <Text style={{ marginTop: '10px' }}> Share to Twitter</Text>{' '}
          </li>
        </a>

        <li>
          <div style={{ ...center }}>
            <Hover>
              <FiTwitter />
            </Hover>
          </div>
          <Text style={{ marginTop: '10px' }}> Share to WhatsApp </Text>{' '}
        </li>
        <li>
          <div style={{ ...center }}>
            <Hover>
              <FiTwitter />
            </Hover>
          </div>
          <Text style={{ marginTop: '10px' }}> Share to Instagram </Text>{' '}
        </li>
      </ul>
    </section>
  </Dropdown>
)

function ContentCard(props) {
  const {
    id,
    createdAt,
    price,
    coverImage,
    type,
    showSubscribeModal,
    contentfiles,
    vendorId,
    subscribers,
    title
  } = props
  const { deleteContent, isLoading, subscribeToContent } = props.ContentStore
  const userId = localStorage.getItem('userId')
  const [showDropdown, setDropdownVisibility] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(false)
  const { userDetail } = props.UserStore

  useEffect(() => {
    subscribers.forEach(({ subscriberId }) => {
      if (subscriberId === userId) {
        setSubscribeStatus(true)
      } else if (userId === vendorId) {
        setSubscribeStatus(true)
      }
    })

    if (userId === vendorId) {
      setSubscribeStatus(true)
    }
  }, [])

  return (
    <Card style={{ border: '1px solid #c0c0c0' }}>
      <ImageBody
        objectFit="cover"
        src={coverImage ? coverImage : property.imageUrl}
        alt={property.imageAlt}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 .6rem' }}>
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="5" fontSize={12} variantColor="teal">
              {type}
            </Badge>
          </Box>

          <Box as="span" color="gray.800" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ opacity: 0 }}> . </p>
          {vendorId === userId && (
            <HoverCircle onClick={() => deleteContent(id)}>
              <FiTrash2 style={{ fontSize: '1.3rem' }} />
            </HoverCircle>
          )}
        </div>
      </ImageBody>
      <section>
        <Box
          onClick={() => {
            subscribeStatus &&
              navigate('/content', {
                state: {
                  contentId: id
                }
              })
            // : showSubscribeModal(true)
          }}
          style={{ cursor: 'pointer' }}
          fontWeight="normal"
          as="h6"
          textAlign="center"
          lineHeight="tight"
          isTruncated
        >
          <StyledTitle>{title} </StyledTitle>
        </Box>
        <div style={{ display: 'flex', padding: '.3rem .5rem', justifyContent: 'space-between' }}>
          <Box
            color="gray.700"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {contentfiles && contentfiles.length} Files
          </Box>

          <Box
            color="gray.700"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {subscribers.length} Subscribers
          </Box>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ ...center }}>
            <Box d="flex" alignItems="center">
              <Box as="span" color="gray.600" fontSize="sm">
                ₦{price}.00
              </Box>
            </Box>
          </div>

          <div style={{ display: 'flex' }}>
            <Hover>
              <IoMdCalendar />
            </Hover>

            <div style={{ padding: '.5rem .2rem' }}>
              <Text small> {moment(createdAt).format('DD, MMM, YY')} </Text>
            </div>
          </div>
        </div>

        {vendorId === userId ? (
          <ShareComponent
            showDropdown={showDropdown}
            handleDropdown={() => setDropdownVisibility(!showDropdown)}
          />
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              disabled={subscribeStatus}
              onClick={() => subscribeToContent(id)}
              style={{
                background: subscribeStatus && 'grey',
                border: subscribeStatus && '1px solid grey'
              }}
              small
            >
              {!subscribeStatus && (
                <Hover style={{ paddingBottom: '5px', paddingRight: '5px' }}>
                  <IoIosLock style={{ color: 'white' }} />
                </Hover>
              )}
              {subscribeStatus ? 'Subscribed' : isLoading ? 'Subscribing' : 'Subscribe'}
              {isLoading && (
                <div style={{ paddingLeft: '.7rem' }}>
                  <Spinner size="sm" animation="border" role="status" />
                </div>
              )}
            </Button>

            <div style={{ ...center }}>
              <ShareComponent
                showDropdown={showDropdown}
                handleDropdown={() => setDropdownVisibility(!showDropdown)}
              />
            </div>
          </div>
        )}
      </section>
    </Card>
  )
}

export default inject('ContentStore', 'UserStore')(observer(ContentCard))
