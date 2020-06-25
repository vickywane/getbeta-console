import React, { useState } from "react"
import styled from "styled-components"

const Check = styled.input`
	opacity: 0;
`

const CheckBody = styled.div`
		border-radius : 5px;
	svg {
		transition: all 400ms;
		width: 2rem;
		stroke: blue;
		stroke-width: 3rem;
		fill: white;
		border-radius : 5px;
		padding: 0.2rem 0.2rem;
	transition: all 300ms;

		rect {
			fill: ${props => (props.active ? "#f2f2f2" : "#fff")};
		}
		polyline {
			transition: all 300ms;
			opacity: ${props => (props.active ? 1 : 0)};
		}
	}
`

interface CustomProps {
	name: string
	handleClick: any
	backgroundColor?: string
}

const CheckBox = props => {
	const [Clicked, Click] = useState<boolean>(false)

	const { name, handleClick, backgroundColor } = props

	function handleChange(e, name) {
		e.preventDefault()
		let value: string

		// Clicked is false by default hence an inverse logic.
		if (Clicked) {
			value = "off"
		} else {
			value = "on"
		}

		Click(!Clicked)
		handleClick(value, name)
	}

	return (
		<div onClick={e => handleChange(e, name)}>
			<CheckBody
				backgroundColor={backgroundColor === undefined ? null : backgroundColor}
				active={Clicked}
			>
				<svg viewBox="0 0 475 446">
					<defs></defs>
					<title>Check box</title>
					<g id="Layer_2" data-name="Layer 2">
						<g id="Layer_1-2" data-name="Layer 1">
							<rect x="6" y="6" width="463" height="434" rx="6.47" />
							<path
								style={{ fill: "#2f00a8" }}
								d="M462.53,12a.47.47,0,0,1,.47.47V433.53a.47.47,0,0,1-.47.47H12.47a.47.47,0,0,1-.47-.47V12.47a.47.47,0,0,1,.47-.47H462.53m0-12H12.47A12.47,12.47,0,0,0,0,12.47V433.53A12.47,12.47,0,0,0,12.47,446H462.53A12.47,12.47,0,0,0,475,433.53V12.47A12.47,12.47,0,0,0,462.53,0Z"
							/>
							<polyline
								style={{
									padding: "1rem",
									stroke: "#2f00a8",
									strokeLinecap: "square",
									strokeLinejoin: "bevel",
									strokeWidth: "15px",
								}}
								points="105.53 216.26 213.18 307.99 392.57 91.97"
							/>
						</g>
					</g>
				</svg>
			</CheckBody>
		</div>
	)
}

export default CheckBox
