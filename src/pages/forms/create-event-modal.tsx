import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import media from 'styled-media-query'

import Sample from '../../assets/ssvg/sample.svg'
import { Text, Title } from '../../styles/style'
import { IoMdBulb } from 'react-icons/all'

const Box = styled.div`
  width: 25rem;
  height: auto;
  background: ${props => props.background};
  border: 3px dashed #22263d;
  border-radius: 7px;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  &: hover {
    box-shadow: 0px 2px 4px grey;
  }
  ${media.lessThan('huge')`

	`};
  ${media.lessThan('large')`
		width : 19rem;
		height : 25vh;
	`};
  ${media.lessThan('medium')`

	`};
`

const Items = [
  {
    id: 1,
    type: 'Conference',
    name: 'Conference Event',
    explaination: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    type: 'Meetup',
    name: 'Meetup Event',
    explaination:
      'Incidunt cupiditate eligendi quisquam quam impedit, reiciendis ex eveniet ad dicta atque perferendis.'
  },
  {
    id: 3,
    type: 'Podcast',
    name: 'PodCast Event',
    explaination:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate eligendi.'
  },
  {
    id: 4,
    type: 'Meetup',
    name: 'Meetup Group',
    explaination:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate eligendi.'
  }
]

const Grid = styled.div`
  display: grid;
  grid-gap: 3rem 3rem;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  ${media.lessThan('huge')`
		grid-template-columns : repeat(auto-fit, minmax(23rem, 1fr));
	`};
  ${media.lessThan('large')`
		grid-template-columns : repeat(auto-fit, minmax(19rem, 1fr));
	`};
  ${media.lessThan('medium')`
		grid-template-columns : repeat(auto-fit, minmax(23rem, 1fr));
	`};
`

const CreateEventModal = (props): JSX.Element => {
  return (
    <div style={{ padding: '0rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text color="blue" style={{ cursor: 'pointer' }}>
          Use existing template
        </Text>

        <Text color="blue" style={{ cursor: 'pointer' }}>
          Launch New Iteration of An Existing Event
        </Text>
      </div>
      <br />

      <Grid>
        {Items.map(({ id, type, name, explaination }) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Box background={'#22263d'} key={id}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <img alt="event illustration" src={Sample} style={{ maxWidth: '30%' }} />
                  </div>
                  <Link to={`create/${type}`}>
                    <Title center color="white" small>
                      {name}{' '}
                    </Title>
                  </Link>
                  <Text center color="white" small>
                    {' '}
                    {explaination}{' '}
                  </Text>
                </div>
              </Box>
            </div>
          )
        })}
      </Grid>
      <br />
      <br />

      <hr />
      <div style={{ textAlign: 'center' }}>
        <IoMdBulb style={{ fontSize: '1.6rem' }} />
      </div>
      <Text small center>
        {' '}
        Still thinking of what event to launch ? <br /> <a href={'/'}> Watch </a> Shedrack
        Akintayo's Talk on Creating Purpose Driven Events.{' '}
      </Text>
    </div>
  )
}

export default CreateEventModal
