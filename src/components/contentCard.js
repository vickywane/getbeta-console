import React from 'react'
import { Box, Image, Badge } from '@chakra-ui/core'
import styled from 'styled-components'
import moment from 'moment'
import { navigate } from '@reach/router'

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

function ContentCard(props) {
  const { id, createdAt, descrp, price, type, contentfiles, vendorId, subscribers, title } = props

  return (
    <div>
      <Box
        style={{ border: '1px solid #c0c0c0' }}
        maxW="sm"
        w={'80%'}
        borderWidth="2px"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          height={150}
          objectFit="cover"
          size={'100%'}
          src={property.imageUrl}
          alt={property.imageAlt}
        />

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
            as="h6"
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
            {/* THROWS ERROR FOR USERS WHO USED THE APP BEFORE CONTENTFILES WHERE ADDED */}
            {/* {contentfiles && contentfiles.length} Files &bull; {subscribers.length} Subscribers */}
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
