import styled from "styled-components";

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Column = styled(Row)`
	flex-direction: column;
`;
