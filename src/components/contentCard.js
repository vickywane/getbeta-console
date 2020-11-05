import React from 'react'
import { Badge, Box } from '@chakra-ui/core'
import styled from 'styled-components'
import moment from 'moment'
import { navigate } from '@reach/router'
import { FiCalendar, FiTrash2, FiMousePointer } from 'react-icons/fi'
import { IoMdCalendar, IoMdShareAlt } from 'react-icons/io'

import { Hover, Text, center } from '../styles/style'
import media from 'styled-media-query'
import { inject, observer } from 'mobx-react'

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

const StarIcon = styled.div`
  color: ${props => props.color};
`

const ImageBody = styled.div`
  height: 220px;
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
  ${media.lessThan('medium')`
  width: 17rem;
`};
  ${media.lessThan('small')`
     width: 20rem;
  `};
`

function ContentCard(props) {
  const { id, createdAt, descrp, price, type, contentfiles, vendorId, subscribers, title } = props
  const { deleteContent } = props.ContentStore
  const userId = localStorage.getItem('userId')

  return (
    <Card style={{ border: '1px solid #c0c0c0' }}>
      <ImageBody objectFit="cover" src={property.imageUrl} alt={property.imageAlt}>
        <div style={{ textAlign: 'right', paddingRight: '.5rem' }}>
          {vendorId === userId && (
            <Hover onClick={() => deleteContent(id)}>
              <FiTrash2 style={{ fontSize: '1.3rem' }} />
            </Hover>
          )}
        </div>

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
      </ImageBody>
      <section>
        <Box
          onClick={() =>
            navigate('/content', {
              state: {
                contentId: id
              }
            })
          }
          style={{ cursor: 'pointer' }}
          fontWeight="normal"
          as="h6"
          textAlign="center"
          lineHeight="tight"
          isTruncated
        >
          {title}
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
                ${price}
              </Box>
            </Box>
          </div>

          <div style={{ display: 'flex' }}>
            <Hover>
              <IoMdCalendar />
            </Hover>

            <div style={{ padding: '.6rem .2rem' }}>
              <Text small> {moment(createdAt).format('DD, MMM, YY')} </Text>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Hover style={{ display: 'flex' }}>
            <Text small style={{ margin: '.2rem .3rem' }}>
              Share Content
            </Text>

            <IoMdShareAlt />
          </Hover>
        </div>
      </section>
    </Card>
  )
}

export default inject('ContentStore')(observer(ContentCard))
