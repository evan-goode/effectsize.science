import React from "react";
import styled from "styled-components";

import { Row } from "../components/common";
import Visualization from "../components/Visualization";

export default props => {
	return (
		<>
			<div>
				<h1>effectsize.science</h1>
				<h2>An interactive tool for visualizing effect sizes</h2>
				<p>
					This tool allows you to see the effect size (d) and percent overlap
					for any comparison between two samples. Enter the mean and standard
					deviation below for each group. If you have the standard error instead
					of the standard deviation, check the box to enter it and the sample
					size (n).
				</p>
			</div>
			<Visualization />
		</>
	);
};
