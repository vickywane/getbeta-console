import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {
	FiClock,
	FiSend,
	FiEdit,
	FiTrash2,
	FiMail,
	FiMoreVertical,
} from "react-icons/fi"

import { Header, Footer } from "../../components/"
import {
	Hover,
	Title,
	Body,
	Button,
	Contain,
	Text,
	MessageInputBody,
} from "../../styles/style"
import ActionBar from "./userActionBar"

const Grid = styled.div`
	display: grid;
	grid-gap: 1rem 2rem;
	grid-template-columns: 2rem auto;
`

const ReminderCard = styled.div`
	border-radius: 5px;
	width: 32rem;
	box-shadow: 0px 1px 3px 3px grey;
`

const Head = styled(Body)`
	display : flex
	justify-content  : space-between		
`

const Data = [
	{
		id: 1,
		name: "Buy Sweet Coffee for Mum",
		due: "Tommorrow 11:50pm",
	},
	{
		id: 2,
		name: "Attend Concatenate Conference Tommorrow",
		due: "Tommorrow 11:50am",
	},

	{
		id: 3,
		name: "Review all Talk proposals",
		due: "Firday 1:50am",
	},

	{
		id: 4,
		name: "Review design submissions",
		due: "Firday 1:50am",
	},

	{
		id: 5,
		name: "Review all Talk proposals",
		due: "Firday 1:50am",
	},

	{
		id: 6,
		name: "Review all Talk proposals",
		due: "Firday 1:50am",
	},
	{
		id: 4,
		name: "Review design submissions",
		due: "Firday 1:50am",
	},

	{
		id: 5,
		name: "Review all Talk proposals",
		due: "Firday 1:50am",
	},

	{
		id: 6,
		name: "Review all Talk proposals",
		due: "Firday 1:50am",
	},
]

const Reminders = (): JSX.Element => {
	const [ReminderName, setReminderName] = useState("")

	return (
		<div>
			<Header
				showSearchBar={true}
				screen="reminders"
				page={"reminders"}
				searchText={"Find Reminders"}
			/>
			<br />
			<br />

			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Button>Filter</Button>

				<Button>Create New Reminder</Button>
			</div>

			<Contain>
				<Grid>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<ActionBar screen="reminders" />
					</div>

					<div
						style={{
							overflow: "auto",
							height: window.innerHeight - 240,
							margin: "0rem 1rem",
						}}
					>
						<Title small> Upcoming Reminders </Title>
						<hr />
						<div
							style={{
								margin: "1rem 0rem",
								display: "grid",
								gridGap: "4rem 0rem",
								gridTemplateColumns: "repeat(auto-fit , minmax(33rem , 1fr))",
							}}
						>
							{Data.map(({ id, due, name }) => {
								return (
									<ReminderCard
										key={id}
										style={{
											display: "grid",
											gridGap: "1rem 0rem",
											gridTemplateColumns: "12rem auto",
										}}
									>
										<div style={{ height: "auto", background: "#0e2f5a" }}>
											<Title style={{ color: "white" }}> {id} </Title>
										</div>

										<div>
											<br />
											<hr />

											<Body>
												<Title small center>
													{name}
												</Title>
												<br />
												<div
													style={{ display: "flex", justifyContent: "center" }}
												>
													<Hover style={{ margin: "0rem 1rem" }}>
														<FiEdit style={{ fontSize: "1.5rem" }} />
													</Hover>

													<Hover style={{ margin: "0rem 1rem" }}>
														<FiMail style={{ fontSize: "1.5rem" }} />
													</Hover>

													<Hover style={{ margin: "0rem 1rem" }}>
														<FiTrash2 style={{ fontSize: "1.5rem" }} />
													</Hover>
												</div>
											</Body>
											<br />

											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												.
												<div
													style={{
														justifyContent: "center",
														display: "flex",
														paddingTop: "5px",
														paddingLeft: "5px",
														margin: "1rem 0rem",
														borderRadius: "30px 0px 0px 30px",
														border: "1px solid grey",
														textAlign: "center",
														width: "15rem",
													}}
												>
													<Hover style={{ margin: "0rem 0.7rem" }}>
														<FiClock style={{ fontSize: "1.5rem" }} />
													</Hover>

													<Text small center>
														{due}
													</Text>
												</div>
											</div>
										</div>
									</ReminderCard>
								)
							})}
						</div>
					</div>
				</Grid>
			</Contain>

			<Footer />
		</div>
	)
}

export default Reminders
