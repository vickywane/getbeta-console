import React from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FcCustomerSupport } from "react-icons/fc"
import { FiLock, FiX } from "react-icons/fi"
import styled from "styled-components"

import {
	Hover,
	Contain,
	Text,
	Body,
	Label,
	Title,
	Button,
	BigTitle,
} from "../../../styles/style"

const Items = styled.div`
	padding: 0rem 1rem;
	li {
		margin: 1rem 0rem;
		list-style: none;
	}
`

const TeamIntsruction = (props): JSX.Element => {
	const {
		showTeamInstruction,
		openTeamInstruction,
		closeTeamInstruction,
	} = props.ModalStore

	return (
		<Modal
			show={showTeamInstruction}
			onHide={() => closeTeamInstruction()}
			size="lg"
			style={{ marginTop: "3rem" }}
		>
			<div style={{ display: "grid", gridTemplateColumns: "4rem auto" }}>
				<div
					style={{
						padding: "1rem 1rem",
						height: "auto",
						width: "auto",
						background: "#0e2f5a",
					}}
				>
					<FcCustomerSupport style={{ fontSize: "2.5rem" }} />
				</div>

				<Body>
					<div>
						<Hover
							onClick={() => closeTeamInstruction()}
							style={{
								textAlign: "right",
								color: "grey",
								padding: "0rem 1rem",
							}}
						>
							<FiX style={{ fontSize: "1.6rem" }} />
						</Hover>

						<div
							style={{
								margin: "1rem 0rem",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<FiLock style={{ fontSize: "4rem" }} />
						</div>

						<Title center bold>
							Team Based Console Access
						</Title>

						<Text center style={{ padding: "0rem 1rem" }}>
							Teams are a great way to manage what's being done by others while
							organizing your event.
						</Text>
						<hr />

						<Text small center style={{ padding: "0rem 1rem" }}>
							You can now grant a specific acces level to volunteers based on
							the team they belong to. <br />
						</Text>

						<Title small> Sample Event Teams </Title>
						<hr />

						<Items>
							<li>
								<Label small> Media Team </Label>
								<Text small>
									Each member manages and has access to your event gallery and
									media assets.
								</Text>
							</li>

							<li>
								<Label small> Talk Submissions Team </Label>
								<Text small>
									Each member manages Call For Papers setting and review
									incoming talk drafts.
								</Text>
							</li>

							<li>
								<Label small> Attendee Support Team </Label>
								<Text small>
									Each member manages the feedback channel and also the event
									Invitations.
								</Text>
							</li>
						</Items>

						<div style={{ justifyContent: "center", display: "flex" }}>
							<Button> Launch Sample Teams </Button>
						</div>

						<br />
					</div>
				</Body>
			</div>
		</Modal>
	)
}

export default inject("ModalStore")(observer(TeamIntsruction))
