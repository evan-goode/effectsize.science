import React, { useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";

import { Input } from "./common";
import * as constants from "../constants";

const Td = styled.td`
	padding: 0.5em;
`;

const ColorControl = (props) => {
	const id = _.uniqueId();
	return (
		<tr>
			<Td>
				<label htmlFor={id}>{props.label}</label>
			</Td>
			<Td>
				<Input
					id={id}
					name={props.name}
					value={props.value}
					onChange={props.handleChange}
					color={props.value}
					width="5em"
				/>
			</Td>
		</tr>
	);
};

export default class extends React.PureComponent {
	handleChange = (event) => {
		this.props.setColors(
			Object.assign({}, this.props.colors, {
				[event.target.name]: event.target.value,
			})
		);
	};
	render() {
		console.log(this.props);
		return (
			<table>
				<tbody>
					<ColorControl
						label="Sample 1 Color"
						name="a-color"
						value={this.props.colors["a-color"]}
						handleChange={this.handleChange}
					/>
					<ColorControl
						label="Sample 2 Color"
						name="b-color"
						value={this.props.colors["b-color"]}
						handleChange={this.handleChange}
					/>
					{constants.HATCH || (
						<ColorControl
							label="Intersect Color"
							name="intersect-color"
							value={this.props.colors["intersect-color"]}
							handleChange={this.handleChange}
						/>
					)}
				</tbody>
			</table>
		);
	}
}
