import React from 'react'
import { Badge, Box } from '@chakra-ui/core'
import styled from 'styled-components'
import moment from 'moment'
import { navigate } from '@reach/router'
import { FiCalendar, FiTrash2, FiMousePointer } from 'react-icons/fi'
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
    height: 150px;
  `};
`

const Card = styled.div`
  width: 20rem;
  border-radius: 5px;
  span {
    padding: 0 0.5rem;
  }
  ${media.lessThan('medium')`
  width: 17rem;
`};
  ${media.lessThan('small')`
     width: 22rem;
  `};
`

function ContentCard(props) {
  const { id, createdAt, descrp, price, type, contentfiles, vendorId, subscribers, title } = props
  const { deleteContent } = props.ContentStore
  const userId = localStorage.getItem('userId')

  return (
    <div>
      <Card
        style={{ border: '1px solid #c0c0c0' }}
        maxW="sm"
        borderWidth="1px"
        rounded="md"
        overflow="hidden"
      >
        <ImageBody objectFit="cover" src={property.imageUrl} alt={property.imageAlt}>
          <div style={{ textAlign: 'right', paddingRight: '.5rem' }}>
            {vendorId === userId && (
              <Hover onClick={() => deleteContent(id)}>
                <FiTrash2 style={{ fontSize: '1.3rem' }} />
              </Hover>
            )}
          </div>
        </ImageBody>

        <span>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {contentfiles && contentfiles.length} Files
            </Box>

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {subscribers.length} Subscribers
            </Box>
          </div>

          <Box p="1">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box d="flex" alignItems="baseline">
                <Badge rounded="full" px="2" variantColor="teal">
                  {type}
                </Badge>
              </Box>

              <div style={{ display: 'flex' }}>
                <Hover>
                  <FiCalendar style={{ fontSize: '1rem' }} />
                </Hover>

                <div style={{ padding: '.5rem .3rem' }}>
                  <Text> {moment(createdAt).format('DD, MMM')} </Text>
                </div>
              </div>
            </div>

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

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box d="flex" mt="1" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  ${price}
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon key={i} color={i < property.rating ? 'teal.500' : 'gray.300'} />
                  ))}
                <Box as="span" ml="1" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </div>
          </Box>
        </span>
      </Card>
    </div>
  )
}

export default inject('ContentStore')(observer(ContentCard))
