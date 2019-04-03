import styled from "styled-components";
import * as constants from "../constants";
import { darken } from "polished";

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	> :not(:first-child) {
		margin-left: ${props => props.spacing};
	}
	> :not(:last-child) {
		margin-right: ${props => props.spacing};
	}
`;

export const Column = styled(Row)`
	flex-direction: column;
`;
export const Flexed = styled.div`
	flex: 1;
`;
export const Spacer = styled.div`
	height: 3rem;
`;
export const Input = styled.input`
	font-size: inherit;
	font-family: inherit;
	border: none;
	outline: none;
	border-radius: 0.5em;
	width: 2.5em;
	padding: 0.25em;
	text-align: center;
	transition: background ${constants.ANIMATION_DURATION}ms;
	background: ${props => props.background};
	&:hover {
		background: ${props => darken(0.08, props.background)};
	}
	&:focus {
		background: ${props => darken(0.15, props.background)};
	}
`;
export const Check = styled.input.attrs({ type: "checkbox" })`
	width: 1.5em;
	height: 1.5em;
	vertical-align: middle;
`;
export const Link = styled.a`
	color: ${constants.COLORS.a};
`;
