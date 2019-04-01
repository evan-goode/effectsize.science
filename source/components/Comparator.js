import React from "react";
import gaussian from "gaussian";

export default props => {
	const isGreater = props.sample.mean > props.other.mean;
	const comparisonWord = isGreater ? "below" : "above";
	const normal = gaussian(props.sample.mean, props.sample.sd * props.sample.sd);
	const cdf = normal.cdf(props.other.mean);
	const percentage = `${Math.round(100 * (isGreater ? cdf : 1 - cdf))}%`;
	return (
		<p>
			{percentage} of the values from {props.labels.sample} are {comparisonWord}{" "}
			the average for {props.labels.other}
		</p>
	);
};
