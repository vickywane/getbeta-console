import React, { useState } from "react"
import styled from "styled-components"

const SwitchContainer = styled.input`
	border: none;
	-webkit-appearance: none;
	width: 75px;
	height: 37px;
	position: relative;
	border-radius: 20px;
	background: ${props => (props.active ? props.color : "#F9F9FA")};
	outline: none;
	transition: all 300ms;
	box-shadow: inset 0 0 5px grey;
	&: hover {
		cursor: pointer;
	}
	:after {
		content: "";
		position: absolute;
		width: 40px;
		height: 41px;
		border-radius: 50%;
		top: 0;
		left: 0;
		background: #fbfbfb;
	}
`

interface properties {
	color: string
	handleClick: any
	name: string
}

const Switch = (props: properties) => {
	const [Active, makeActive] = useState(false)

	function handleChange(e, name) {
		e.preventDefault()

		// console.log(e.target.value, "event")

		const { value } = e.target

		makeActive(!Active)
		handleClick(value, name)
	}

	const { color, handleClick, name } = props
	return (
		<div>
			<SwitchContainer
				color={color}
				active={Active}
				onChange={e => handleChange(e, name)}
				type="checkbox"
			/>
		</div>
	)
}

export default Switch
