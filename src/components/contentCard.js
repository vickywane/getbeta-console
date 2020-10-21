import React from 'react'
import { Box, Image, Badge } from '@chakra-ui/core'
import styled from 'styled-components'
import moment from 'moment'
import { subscribe } from 'graphql'
import { navigate } from '@reach/router'

const property = {
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Modern home in city center in the heart of historic Los Angeles',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4
}

const StarIcon = styled.div`
  color: ${props => props.color};
`

function ContentCard(props) {
  const { id, createdAt, descrp, price, type, contentfiles, vendorId, subscribers, title } = props

  return (
    <div>
      <Box
        style={{ border: '1px solid grey' }}
        maxW="sm"
        borderWidth="2px"
        rounded="lg"
        overflow="hidden"
      >
        <Image objectFit="cover" size={'100%'} src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" variantColor="teal">
              {type}
            </Badge>
          </Box>

          <Box
            onClick={() =>
              navigate('/edit-content', {
                state: {
                  contentId: id
                }
              })
            }
            style={{ cursor: 'pointer' }}
            mt="1"
            fontWeight="semibold"
            as="h5"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {contentfiles.length} Files &bull; {subscribers.length} Subscribers
          </Box>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              $ {price}
              <Box as="span" color="gray.600" fontSize="sm">
                {moment(createdAt).format(' DD, MMM')}
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < property.rating ? 'teal.500' : 'gray.300'} />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default ContentCard
