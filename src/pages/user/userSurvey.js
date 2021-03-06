import React, { useState } from 'react'
import { Textarea, Checkbox } from '@chakra-ui/core'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { FiMail } from 'react-icons/fi'
import { IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io'
import media from 'styled-media-query'
import { observer, inject } from 'mobx-react'
import { Select } from '@chakra-ui/core'

import Header from '../../components/headers/header'

import {
  Body,
  Text,
  Button,
  CreateCourseInputField as InputField,
  center,
  MdTitle
} from '../../styles/style'

const StyledBody = styled(Body)`
  height: calc(100vh - 70px);
  overflow: auto;
`

const Box = styled.div`
  width: auto;
  padding : .5rem
  height: 45px;
  border-radius: 2px;
  font-size : 1rem;
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
  { id: 3, name: 'Student Tutor' }
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
  { id: 1, name: 'Whatsapp', icon: <IoLogoWhatsapp style={{ fontSize: '1.2rem' }} /> },
  { id: 1, name: 'Email List', icon: <FiMail style={{ fontSize: '1.2rem' }} /> },
  { id: 1, name: 'Social Media Followers', icon: <IoLogoFacebook style={{ fontSize: '1.2rem' }} /> }
]

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem 2rem;
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
  justify-content: center;
  align-items: center;
`

const EntertainmentQuestions = ({ setCategories }) => (
  <InputField>
    <Select onChange={e => setCategories(e.target.value)}>
      {industries.map(({ id, name }) => (
        <option value={name} key={id}>
          {name}
        </option>
      ))}
    </Select>
  </InputField>
)

const LiteratureQuestions = ({ setCategories }) => (
  <InputField>
    <Select onChange={e => setCategories(e.target.value)}>
      {literature.map(({ id, name }) => (
        <option value={name} key={id}>
          {name}
        </option>
      ))}
    </Select>
  </InputField>
)

const FormalQuestions = ({ setCategories }) => (
  <InputField>
    <Select onChange={e => setCategories(e.target.value)}>
      {formalEducation.map(({ id, name }) => (
        <option value={name} key={id}>
          {name}
        </option>
      ))}
    </Select>
  </InputField>
)

const VocationalQuestions = ({ setCategories }) => (
  <InputField>
    <Select onChange={e => setCategories(e.target.value)}>
      {vocational.map(({ id, name }) => (
        <option value={name} key={id}>
          {name}
        </option>
      ))}
    </Select>
  </InputField>
)

const HealthQuestions = ({ setCategories }) => (
  <InputField>
    <Select onChange={e => setCategories(e.target.value)}>
      {Health.map(({ id, name }) => (
        <option value={name} key={id}>
          {name}
        </option>
      ))}
    </Select>
  </InputField>
)

const Container = styled.div`
  width: 70rem;
  ${media.lessThan('large')`
      width : 50rem; 
    `};
  ${media.lessThan('medium')`
    width : 100%; 
    `};
`

export const InputBody = styled.div`
  margin: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.95rem;
  }
  input {
    font-size: 0.9rem;
    height: 55px;
    color: #000;
    background: transparent;
    padding: 0.6rem 1rem;
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    width: 100%;
    flex: 1;
  }
  ${media.lessThan('medium')`
    input , textarea {
      width: 100%;
    }
  `};
  ${media.lessThan('small')`
  input , textarea {
    font-size: 0.8rem;
    width : 100%;
  }
    `};
`

function CompleteProfileDetails(props) {
  const { saveUserSurvey, isLoading } = props.UserStore

  const [industry, setIndustry] = useState('')
  const [role, setRole] = useState('')
  const [literature, setLiterature] = useState('')
  const [education, setEducation] = useState('')
  const [skill, setSkill] = useState('')
  const [health, setHealth] = useState('')
  const [level, setLevel] = useState('')
  const [hasAudience, setHasAudience] = useState(false)
  const [audienceKind, setaudienceKind] = useState('')
  const [referer, setReferer] = useState('')
  const [focus, setFocus] = useState('')

  const handleSurveySave = () => {
    const data = {
      industry: industry,
      role: role,
      literature: literature,
      formalEdu: education,
      skill: skill,
      health: health,
      level: level,
      focus: focus,
      hasAudience: hasAudience,
      audienceKind: audienceKind,
      heardFrom: referer
    }

    saveUserSurvey(data)
  }

  return (
    <div style={{ height: '100%' }}>
      <Header goBack />
      <StyledBody
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Container>
          <br />
          <MdTitle align="center"> Let's know you better</MdTitle>
          <Text align="center">
            We would like to know more about you through the following questions :
          </Text>
          <hr />
          <InputField>
            <label>
              What's your industry ? <br />
              <span style={{ fontSize: '.8rem', color: 'grey' }}>
                Select one option from the categories
              </span>
            </label>
            <Select placeholder="Industry" onChange={e => setIndustry(e.target.value)}>
              {industries.map(({ id, name }) => (
                <option value={name} key={id}>
                  {name}
                </option>
              ))}
            </Select>
          </InputField>

          {industry.length > 1 && (
            <InputBody>
              <label>
                What's your role ? <br />
                <span style={{ fontSize: '.8rem', color: 'grey' }}>
                  Select one option from the categories
                </span>
              </label>

              <CSSTransition in={industry === 'Entertainment'} unmountOnExit timeout={300}>
                <EntertainmentQuestions setCategories={val => setIndustry(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Literature'} unmountOnExit timeout={300}>
                <LiteratureQuestions setCategories={val => setLiterature(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Formal Education'} unmountOnExit timeout={300}>
                <FormalQuestions setCategories={val => setEducation(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Vocational Skill'} unmountOnExit timeout={300}>
                <VocationalQuestions setCategories={val => setSkill(val)} />
              </CSSTransition>

              <CSSTransition in={industry === 'Health & Wellness'} unmountOnExit timeout={300}>
                <HealthQuestions setCategories={val => setHealth(val)} />
              </CSSTransition>
            </InputBody>
          )}

          <InputField>
            <label>
              What's your expertise level ? <br />
              <span style={{ fontSize: '.8rem', color: 'grey' }}>
                Select one option from the categories
              </span>
            </label>

            <Select onChange={e => setLevel(e.target.value)}>
              {expertise.map(name => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </Select>
          </InputField>

          <InputBody>
            <label>
              What's your focus ? <br />
              <span style={{ fontSize: '.8rem', color: 'grey' }}>
                Select one option from the categories
              </span>
            </label>

            <input
              type="text"
              value={focus}
              onChange={({ target }) => setFocus(target.value)}
              placeholder="An example focus is ...."
            />
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
                    </div>
                  </Box>
                </li>
              ))}
            </Grid>
          </InputBody>
          <InputBody>
            <label>
              Do you have an audience? <br />
              <span style={{ fontSize: '.8rem', color: 'grey' }}>
                Select one option from the categories
              </span>
            </label>

            <div style={{ display: 'flex' }}>
              <div style={{ margin: '0 1rem' }}>
                <div style={{ display: 'flex' }}>
                  <StyledCheckbox onClick={() => setHasAudience(true)} />
                  <div style={{ ...center }}>
                    <Text style={{ margin: '0 1rem' }}> Yes </Text>
                  </div>
                </div>
              </div>

              <div style={{ margin: '0 1rem' }}>
                <div style={{ display: 'flex' }}>
                  <StyledCheckbox onClick={() => setHasAudience(false)} />
                  <div style={{ ...center }}>
                    <Text style={{ margin: '0 1rem' }}> No </Text>
                  </div>
                </div>
              </div>
            </div>
          </InputBody>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button> Submit Later </Button>
            <Button onClick={() => handleSurveySave()}> Submit My Answers </Button>
          </div>
        </Container>
      </StyledBody>
    </div>
  )
}

export default inject('UserStore')(observer(CompleteProfileDetails))
