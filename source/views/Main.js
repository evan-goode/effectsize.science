import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { Row, Spacer, Link } from "../components/common";
import Visualization from "../components/Visualization";

const color = lighten(1 / 5, "black");

const Container = styled.div`
	font-family: Lato, sans-serif;
	margin: 3em auto;
	width: 960px;
	color: ${color};
	line-height: 1.4;
	font-size: 1.2em;
`;
const H1 = styled.h1`
	font-size: 4em;
	font-weight: bold;
`;
const H2 = styled.h2`
	font-size: 1.5em;
	font-weight: bold;
`;
const Header = styled.div`
	text-align: center;
`;
const FinePrint = styled.p`
	color: ${lighten(1 / 4, color)};
`;

export default props => {
	return (
		<Container>
			<div>
				<Header>
					<H1>effectsize.science</H1>
					<H2>An interactive tool for visualizing effect sizes</H2>
				</Header>
				<Spacer />
				<p>
					This tool allows you to see the effect size (<em>d</em>) and percent
					overlap for any comparison between two samples. Enter the mean and
					standard deviation below for each group. If you have the standard
					error instead of the standard deviation, check the box to enter it and
					the sample size (<em>n</em>).
				</p>
				<Spacer />
			</div>
			<Visualization />
			<Spacer />
			<FinePrint>
				This tool assumes both distributions are normal. Effect size is based on
				Cohen’s d. Overlap is based on Weitzman’s ∆. This site is brought to you
				by the developers of{" "}
				<Link href="https://sexdifference.org">SexDifference.org</Link>. The
				source code is available at{" "}
				<Link href="https://github.com/evan-goode/effectsize.science">
					GitHub
				</Link>{" "}
				under AGPLv3. If you use this tool to prepare a publication, please cite:
				Maney DL. 2016 Perils and pitfalls of reporting sex differences. Phil.
				Trans. R. Soc. B 371: 20150119.{" "}
				<Link href="https://dx.doi.org/10.1098/rstb.2015.0119">
					https://dx.doi.org/10.1098/rstb.2015.0119
				</Link>
			</FinePrint>
		</Container>
	);
};
