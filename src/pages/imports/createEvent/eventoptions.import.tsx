import React from "react"
import styled from "styled-components"

import { Text, Body, Title, Button } from "../../../styles/style"

const Card = styled.div`
	width : auto;
	border-radius: 7px
	padding : 2rem 1.5rem;
	border : 0px
	background:  #fff
	box-shadow : 0px 2px 3px grey

`

const Items = styled.div`
	li {
		display: flex;
		justify-content: space-between;
		margin: 0.5rem 0.5rem;
	}
`

const Eventoptions = () => {
	return (
		<Body
			style={{
				height: window.innerHeight - 130,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card>
				<Title small> External Integrations</Title>
				<Text small color="grey">
					Connect and re-use your exisiting event data{" "}
				</Text>
				<hr />

				<Items>
					<li>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<Title small>Event Brite</Title>
							<Text>
								Connect to event brite Connect to event brite Connect to event
								brite
							</Text>
						</div>

						<div 
							style={{
								margin : '0rem 1rem',
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button>Select</Button>
						</div>
					</li>
					<hr />
					<li>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<Title small>Event Brite</Title>
							<Text>
								Connect to event brite Connect to event brite Connect to event
								brite
							</Text>
						</div>

						<div 
							style={{
								margin : '0rem 1rem',
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button>Select</Button>
						</div>
					</li>
				</Items>
			</Card>
		</Body>
	)
}

export default Eventoptions
