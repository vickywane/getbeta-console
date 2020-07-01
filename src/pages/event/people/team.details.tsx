import React from "react"
import Flex from "styled-flex-component"
import { GiChecklist } from "react-icons/gi"
import { FiCalendar, FiPlus } from "react-icons/fi"
import styled from "styled-components"

import { Text, Title, Body, Button, Hover } from "../../../styles/style"

const HoverCircle = styled(Hover)`
	background: #C0C0C0;
	border-radius: 50%;
	padding: 0.7rem 0.7rem;
	margin: 0px;
`

const Circle  = styled.div`
  height: 20px;
  width: 20px;
  margin : 0.3rem 0.5rem;
  background-color: ${props => props.background};
  border-radius: 50%;
  display: inline-block;
`

const TeamDetails = props => {
	const { name , members, createdByName, goal, createdAt ,  openCreateTaskModal } = props

	return (
		<Body
			style={{
				background: "transparent",
			}}
		>
			<Flex justifyBetween>
				<Title> {name} </Title>

				<div style={{ display: "flex" }}>
					<Hover style={{ margin: "0rem 0.7rem" }}>
						<FiCalendar style={{ fontSize: "1.7rem", color: "#000" }} />
					</Hover>
					<Text center>Created: {createdAt} </Text>
				</div>
			</Flex>
			<Text color="grey" style={{ margin: "0rem 1rem" }}>
				{goal}
			</Text>
			<Body>
				<img
					alt="team mates"
					style={{ height: "55px", width: "55px" }}
					src={require("../../../assets/images/developer.png")}
				/>
			</Body>

			<hr style={{ background: "#fff" }} />
			<Flex justifyBetween>
				<div style={{ display: "flex" }} onClick={() => openCreateTaskModal()}>
					<Title small style={{ margin: "0.5rem 0rem" }}>
						Tasks
					</Title>

					<HoverCircle style={{ margin: "0rem 0.5rem" }}>
						<FiPlus style={{ fontSize: "1.6rem", color: "#fff" }} />
					</HoverCircle>
				</div>

				<Flex>
					<div style={{ display: "flex", margin: "0rem 0.7rem" }}>
						<Circle background="violet" />
						<Text> Idle</Text>
					</div>

					<div style={{ display: "flex", margin: "0rem 0.7rem" }}>
						 <Circle background="blue" />
						 <Text> In Progress</Text>
					</div>

					<div style={{ display: "flex", margin: "0rem 0.7rem" }}>
						<Circle background="green" />						
						 <Text> Finished</Text>
					</div>
				</Flex>
			</Flex>
		</Body>
	)
}

export default TeamDetails
