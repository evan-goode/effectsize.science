import React from "react";
import styled from "styled-components";
import _ from "lodash";

import { Row, Column, Flexed, Spacer } from "../components/common";
import Controls from "../components/Controls";
import Patterns from "../components/Patterns";
import LargeChart from "../components/LargeChart";
import EffectSize from "../components/EffectSize";
import ExportCsv from "../components/ExportCsv";
import SmallChart from "../components/SmallChart";
import Comparator from "../components/Comparator";
import * as constants from "../constants";

const INITIAL_CONTROLS = {
	["a-mean"]: 175,
	["b-mean"]: 162,
	["a-sd"]: 7.1,
	["b-sd"]: 6.5,
	["a-n"]: 100,
	["b-n"]: 100,
	["use-se"]: false
};

const parseFloatFallback = (value, fallback, positive = false) => {
	const parsed = parseFloat(value);
	return isNaN(parsed) || (positive && parsed <= 0) ? fallback : parsed;
};
const parseSd = (sd, se, n, useSe) => {
	if (useSe) {
		return (
			parseFloatFallback(se, 1, true) *
			Math.sqrt(parseFloatFallback(n, 1, true))
		);
	}
	return parseFloatFallback(sd, 1, true);
};
const processControls = controls => {
	return {
		a: {
			mean: parseFloatFallback(controls["a-mean"], 0),
			sd: parseSd(
				controls["a-sd"],
				controls["a-se"],
				controls["a-n"],
				controls["use-se"]
			)
		},
		b: {
			mean: parseFloatFallback(controls["b-mean"], 0),
			sd: parseSd(
				controls["b-sd"],
				controls["b-se"],
				controls["b-n"],
				controls["use-se"]
			)
		}
	};
};

export default class Visualization extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			controls: {
				["a-mean"]: INITIAL_CONTROLS["a-mean"].toString(),
				["b-mean"]: INITIAL_CONTROLS["b-mean"].toString(),
				["a-sd"]: INITIAL_CONTROLS["a-sd"].toString(),
				["b-sd"]: INITIAL_CONTROLS["b-sd"].toString(),
				["a-se"]: (
					INITIAL_CONTROLS["a-sd"] / Math.sqrt(INITIAL_CONTROLS["a-n"])
				).toString(),
				["b-se"]: (
					INITIAL_CONTROLS["b-sd"] / Math.sqrt(INITIAL_CONTROLS["b-n"])
				).toString(),
				["a-n"]: INITIAL_CONTROLS["a-n"],
				["b-n"]: INITIAL_CONTROLS["b-n"],
				["use-se"]: INITIAL_CONTROLS["use-se"]
			}
		};
		this.patternIds = {
			a: _.uniqueId(),
			b: _.uniqueId(),
			intersect: _.uniqueId()
		};
	}
	setControls = controls => {
		this.setState({ controls });
	};
	render() {
		const processedControls = processControls(this.state.controls);
		const smallPatternIdsA = {
			sample: this.patternIds.a,
			intersect: this.patternIds.intersect
		};
		const smallPatternIdsB = {
			sample: this.patternIds.b,
			intersect: this.patternIds.intersect
		};
		return (
			<>
				<Patterns patternIds={this.patternIds} />
				<Row>
					<Controls
						controls={this.state.controls}
						setControls={this.setControls}
						colors={constants.COLORS}
					/>
					<Flexed>
						<LargeChart
							samples={processedControls}
							patternIds={this.patternIds}
						/>
					</Flexed>
					<div>
						<EffectSize samples={processedControls} />
						<ExportCsv samples={processedControls} />
					</div>
				</Row>
				<Spacer />
				<Row spacing="4rem">
					<Column>
						<p>Sample 1</p>
						<SmallChart
							sample={processedControls.a}
							other={processedControls.b}
							patternIds={smallPatternIdsA}
						/>
						<Comparator
							sample={processedControls.a}
							other={processedControls.b}
							labels={{ sample: "sample 1", other: "sample 2" }}
						/>
					</Column>
					<Column>
						<p>Sample 2</p>
						<SmallChart
							sample={processedControls.b}
							other={processedControls.a}
							patternIds={smallPatternIdsB}
						/>
						<Comparator
							sample={processedControls.b}
							other={processedControls.a}
							labels={{ sample: "sample 2", other: "sample 1" }}
						/>
					</Column>
				</Row>
			</>
		);
	}
}
