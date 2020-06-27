import React, { useState, useCallback } from "react"
import styled from "styled-components"

import { Hover, Text } from "../styles/style"

const TipBody = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	background: #fbfbfb;
	width: 35rem;
	transition: all 400ms;
	color: #0e2f5a;
	position : absolute;
	border-radius: 6px;
	box-shadow: 0px 1px 3px grey;
	div {
		display: flex;
	}
`

interface TipProperties {
	message: string
	icon1?: any
	icon2?: any
	timeout?: number
}

const Tip = (props ) : JSX.Element => {
	const [Tip, showTip] = useState(true)

	const { message, icon1, icon2, timeout } = props

	if (icon2 === undefined) {
		setTimeout(() => {
			showTip(false)
		}, timeout)
	}

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				transition: "all 300ms",
			}}
		>
			{Tip && (
				<TipBody style={{ transition: "all 300ms" }}>
					<Text style={{ padding: "0rem 1rem" }}>{message}</Text>

					<div>
						<Hover style={{ padding: "0.3rem 1rem" }}>{icon1}</Hover>

						<Hover
							style={{ padding: "0.3rem 0.1rem" }}
							onClick={() => showTip(false)}
						>
							{icon2}
						</Hover>
					</div>
				</TipBody>
			)}
		</div>
	)
}

export default Tip
