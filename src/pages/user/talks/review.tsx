import React from 'react'
import {
  FiMail,
  FiClock,
  FiCheck,
  FiCalendar,
  FiEdit,
  FiArrowLeft,
} from "react-icons/fi"
import styled from "styled-components"
import { IoIosPeople } from "react-icons/io"

import { Header, Footer, Loader } from "../../../components/"
import { GET_TALK } from "../../../data/queries"
import {
  Body as Bod ,
  Text,
  Head,
  Button,
  Title,
  Hover,
} from "../../../styles/style"

const Body = styled(Bod)`
              background: #fbfbfb
	padding : 0.5rem 0.8rem
`

const Review = props => {
	return (
		<Body>
				<Text color="white" >
					reviews body
				</Text>
		</Body>
	)
}

export default Review