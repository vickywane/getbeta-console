import React, { useState } from 'react'
import { Textarea, Checkbox } from '@chakra-ui/core'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { FiMail } from 'react-icons/fi'

import { Body, Text, Button, PageHead, MdTitle, InputBody } from '../../styles/style'

const Box = styled.div`
  width: auto;
  padding : .5rem
  height: 47px;
  border-radius: 2px;
  border: 1px solid #c0c0c0;
  display : flex;
  justify-content : center;
  align-items : center;
  div {
    width : 100%;
    display : flex;
    justify-content : space-between;
    text-align : center;
  }
`

const industries = [
  { id: 1, name: 'Entertainment' },
  { id: 2, name: 'Formal Education' },
  { id: 3, name: 'Vocational Skill' },
  { id: 4, name: 'Health & Wellness' }
]

const literature = [
  { id: 1, name: 'Fiction Writer' },
  { id: 2, name: 'Newsletter writer' },
  { id: 3, name: 'News writer' }
]

const formalEducation = [
  { id: 1, name: 'School Teacher' },
  { id: 2, name: 'Private Tutor' },
  { id: 3, nmame: 'Student Tutor' }
]

const vocational = [
  { id: 1, name: 'Software' },
  { id: 2, name: 'Hardware' },
  { id: 3, name: 'Non - IT' }
]

const Health = [
  { id: 1, name: 'Medical Expert' },
  { id: 2, name: 'Distributor' }
]

const expertise = ['Professional', 'Certified Professional', 'Intermediate', 'Beginner']

const audience = [
  { id: 1, name: 'Whatsapp', icon: <FiMail style={{ fontSize: '1.3rem' }} /> },
  { id: 1, name: 'Email List', icon: <FiMail style={{ fontSize: '1.3rem' }} /> },
  { id: 1, name: 'Social Media Followers', icon: <FiMail style={{ fontSize: '1.3rem' }} /> }
]

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem 2rem;
  li {
    list-style: none;
  }
`

const StyledCheckbox = styled(Checkbox)`
  width: 25px;
  height: 25px;
  margin-top: 15px;
  border: 2px solid #c0c0c0;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EntertainmentQuestions = props => (
  <Grid>
    {industries.map(({ id, name }) => (
      <li>
        <Box key={id}>
          <div>
            <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
            <StyledCheckbox
              style={{ width: '20px' }}
              size="lg"
              onChange={() => props.setCategories(name)}
              variantColor="blue"
            />
          </div>
        </Box>
      </li>
    ))}
  </Grid>
)

const LiteratureQuestions = props => (
  <Grid>
    {industries.map(({ id, name }) => (
      <li>
        <Box key={id}>
          <div>
            <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
            <StyledCheckbox
              style={{ width: '20px' }}
              size="lg"
              onChange={() => props.setCategories(name)}
              variantColor="blue"
            />
          </div>
        </Box>
      </li>
    ))}
  </Grid>
)

const FormalQuestions = props => (
  <Grid>
    {industries.map(({ id, name }) => (
      <li>
        <Box key={id}>
          <div>
            <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
            <StyledCheckbox
              style={{ width: '20px' }}
              size="lg"
              onChange={() => props.setCategories(name)}
              variantColor="blue"
            />
          </div>
        </Box>
      </li>
    ))}
  </Grid>
)

const VocationalQuestions = props => (
  <Grid>
    {industries.map(({ id, name }) => (
      <li>
        <Box key={id}>
          <div>
            <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
            <StyledCheckbox
              style={{ width: '20px' }}
              size="lg"
              onChange={() => props.setCategories(name)}
              variantColor="blue"
            />
          </div>
        </Box>
      </li>
    ))}
  </Grid>
)

const HealthQuestions = props => (
  <Grid>
    {industries.map(({ id, name }) => (
      <li>
        <Box key={id}>
          <div>
            <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
            <StyledCheckbox
              style={{ width: '20px' }}
              size="lg"
              onChange={() => props.setCategories(name)}
              variantColor="blue"
            />
          </div>
        </Box>
      </li>
    ))}
  </Grid>
)

function CompleteProfileDetails(props) {
  const {} = props

  const [name, setName] = useState('')
  const [industry, setIndustry] = useState('')

  return (
    <Body
      style={{
        display: 'flex',
        height: window.innerHeight - 80,
        overflow: 'auto',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: '70rem' }}>
        <br />
        <MdTitle align="center"> Let's know you better</MdTitle>
        <Text align="center">
          We would like to know more about you through the following questions :
        </Text>
        <hr />
        <InputBody>
          <label>
            What's your industry ? <br />
            <span style={{ fontSize: '.8rem', color: 'grey' }}>
              Select one option from the categories
            </span>
          </label>
          <Grid>
            {industries.map(({ id, name }) => (
              <li>
                <Box key={id}>
                  <div key={id}>
                    <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
                    <StyledCheckbox
                      onChange={_ => setIndustry(name)}
                      size="lg"
                      variantColor="blue"
                    />
                  </div>
                </Box>
              </li>
            ))}
          </Grid>
        </InputBody>

        {industry.length > 1 && (
          <div>
            <InputBody>
              <label>
                What's your role ? <br />
                <span style={{ fontSize: '.8rem', color: 'grey' }}>
                  Select one option from the categories
                </span>
              </label>

              <CSSTransition in={industry === 'Enterainment'} unmountOnExit timeout={300}>
                <EntertainmentQuestions setCategories={val => setIndustry(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Literature'} unmountOnExit timeout={300}>
                <EntertainmentQuestions setCategories={val => setIndustry(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Formal Education'} unmountOnExit timeout={300}>
                <EntertainmentQuestions setCategories={val => setIndustry(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Vocational Skill'} unmountOnExit timeout={300}>
                <EntertainmentQuestions setCategories={val => setIndustry(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Health & Wellnes'} unmountOnExit timeout={300}>
                <EntertainmentQuestions setCategories={val => setIndustry(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Literature'} unmountOnExit timeout={300}>
                <EntertainmentQuestions setCategories={val => setIndustry(val)} />
              </CSSTransition>
            </InputBody>
          </div>
        )}

        <InputBody>
          <label>
            What's your expertise level ? <br />
            <span style={{ fontSize: '.8rem', color: 'grey' }}>
              Select one option from the categories
            </span>
          </label>

          <Grid>
            {expertise.map(name => (
              <li>
                <Box key={name}>
                  <div>
                    <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
                    <StyledCheckbox size="lg" variantColor="blue" />
                  </div>
                </Box>
              </li>
            ))}
          </Grid>
        </InputBody>
        <InputBody>
          <label>
            What's your focus ? <br />
            <span style={{ fontSize: '.8rem', color: 'grey' }}>
              Select one option from the categories
            </span>
          </label>

          <input type="text" placeholder="An example focus is ...." />
        </InputBody>
        <InputBody>
          <label>
            What kind of audience ? <br />
            <span style={{ fontSize: '.8rem', color: 'grey' }}>
              Select one option from the categories
            </span>
          </label>

          <Grid>
            {audience.map(({ id, name, icon }) => (
              <li>
                <Box key={id}>
                  <div>
                    <span style={{ display: 'flex' }}>
                      <span style={{ margin: '.8rem .5rem' }}>{icon}</span>
                      <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
                    </span>
                    <StyledCheckbox size="lg" variantColor="blue" />
                  </div>
                </Box>
              </li>
            ))}
          </Grid>
        </InputBody>
        <InputBody>
          <label>
            What's your industry ? <br />
            <span style={{ fontSize: '.8rem', color: 'grey' }}>
              Select one option from the categories
            </span>
          </label>

          <div style={{ display: 'flex' }}>
            <div style={{ margin: '0 1rem' }}>
              <StyledCheckbox>Yes</StyledCheckbox>
            </div>

            <div style={{ margin: '0 1rem' }}>
              <StyledCheckbox>No</StyledCheckbox>
            </div>
          </div>
        </InputBody>
        <InputBody>
          <label>
            What kind of audience ? <br />
            <span style={{ fontSize: '.8rem', color: 'grey' }}>
              Select one option from the categories
            </span>
          </label>

          <Grid>
            {industries.map(({ id, name }) => (
              <li>
                <Box key={id}>
                  <div>
                    <Text style={{ paddingTop: '15px' }}> {name} </Text>{' '}
                    <StyledCheckbox style={{ width: '20px' }} size="lg" variantColor="blue" />
                  </div>
                </Box>
              </li>
            ))}
          </Grid>
        </InputBody>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button> Submit Later </Button>
          <Button> Submit My Answers </Button>
        </div>
      </div>
    </Body>
  )
}

export default CompleteProfileDetails
