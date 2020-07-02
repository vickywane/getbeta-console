import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FiHome, FiLogOut, FiImage, FiX, FiUser } from "react-icons/fi"
import { IoIosPaper, IoIosAlarm } from "react-icons/io"

import useWindowWidth from "../../hook_style"
import { Hover, Body as Bod } from "../../styles/style"

const Body = styled(Bod)`
	padding: 0.8em 1.4rem;
	display: flex;
	background: #401364;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;

	position: ${props => props.absolute};
	transition: all 300ms;
	opacity: ${props => (props.visible ? "1" : "0")};

	li {
		margin: 1.3rem 0rem;
		list-style: none;
		color: #fff;
	}
`

const RoundedBody = styled(Body)`
	border-radius: 0px 50px 50px 0px;
`

const ActionBar = (props): JSX.Element => {
	const { screen, logout } = props
	const [BarVisibility, setBarVisibility] = useState(false)

	const Width = useWindowWidth()

	return (
		<div>
			{Width >= 700 && (
				<Body
					onMouseEnter={() => setBarVisibility(true)}
					onMouseLeave={() => {
						setTimeout(() => {
							setBarVisibility(!BarVisibility)
						}, 1000)
					}}
					visible={Width >= 1000 ? true : BarVisibility}
					position={Width >= 1000 ? null : "absolute"}
				>
					{screen !== "profile" && (
						<li>
							<Link
								to="/console"
								style={{
									borderBottom: screen === "reminders" && "3px dashed #fff",
								}}
							>
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

					<li
						style={{ borderBottom: screen === "drafts" && "3px dashed #fff" }}
					>
						<Link to="/drafts" style={{ textDecoration: "none" }}>
							<Hover>
								<IoIosPaper style={{ fontSize: "2em" }} />
							</Hover>
						</Link>
					</li>

					<li
						style={{
							borderBottom: screen === "reminders" && "3px dashed #fff",
						}}
					>
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
			)}
		</div>
	)
}

export default ActionBar
