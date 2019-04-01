import React from "react";
import styled from "styled-components";

const HiddenSvg = styled.svg`
	width: 0;
	height: 0;
	position: absolute;
`;

const Pattern = props => {
	return (
		<pattern id={props.id} patternUnits="userSpaceOnUse" width="1" height="1">
			{props.children}
		</pattern>
	);
};

export default props => {
	return (
		<HiddenSvg>
			<defs>
				<Pattern id={props.patternIds.a}>
					<rect x="0" y="0" width="1" height="1" fill="blue" />
				</Pattern>
				<Pattern id={props.patternIds.b}>
					<rect x="0" y="0" width="1" height="1" fill="lime" />
				</Pattern>
				<Pattern id={props.patternIds.intersect}>
					<rect x="0" y="0" width="1" height="1" fill="cyan" />
				</Pattern>
			</defs>
		</HiddenSvg>
	);
};
