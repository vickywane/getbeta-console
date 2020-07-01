import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FiHome, FiLogOut, FiImage, FiX   , FiUser} from "react-icons/fi"
import { IoIosPaper , IoIosAlarm} from "react-icons/io"

import { Hover, Body as Bod } from "../../styles/style"

const Body = styled(Bod)`
	padding: 0.8em 1.4rem;
	display: flex;
	background: #401364;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	li {
		margin: 1.3rem 0rem;
		list-style: none;
		color: #fff;
	}
`

const ActionBar = (props): JSX.Element => {
	const { screen , logout } = props

	return (
		<Body>
			{screen !== "profile" && (
				<li>
					<Link to="/console"  style={{ borderBottom: screen === "reminders" && "3px dashed #fff" }}>
						<Hover>
							<FiUser style={{ fontSize: "2em" }} />
						</Hover>
					</Link>
				</li>
			)}

			<li>
				<Link to="/" style={{ textDecoration: "none" }}>
					<Hover>
						<FiImage style={{ fontSize: "2em" }} />
					</Hover>
				</Link>
			</li>

			<li style={{ borderBottom: screen === "drafts" && "3px dashed #fff" }}>
				<Link to="/drafts" style={{ textDecoration: "none" }}>
					<Hover>
						<IoIosPaper style={{ fontSize: "2em" }} />
					</Hover>
				</Link>
			</li>

			<li style={{ borderBottom: screen === "reminders" && "3px dashed #fff" }}>
				<Link to="/reminders" style={{ textDecoration: "none" }}>
					<Hover>
						<IoIosAlarm style={{ fontSize: "2em" }} />
					</Hover>
				</Link>
			</li>

			{screen === "profile" && (
				<li>
					<Hover
						onClick={() => {
							logout()
						}}
					>
						<FiLogOut style={{ fontSize: "2em" }} />
					</Hover>
				</li>
			)}
		</Body>
	)
}

export default ActionBar
