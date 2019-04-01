import React from "react";
import _ from "lodash";

const MeanControl = props => {
	const meanName = `${props.sample}-mean`;
	const meanId = _.uniqueId();
	return (
		<tr>
			<td>
				<label htmlFor={meanId}>{props.label} Mean</label>
			</td>
			<td>
				<input id={meanId} name={meanName} value={props.controls[meanName]} onChange={props.handleChange}/>
			</td>
		</tr>
	);
};

const SpreadControls = props => {
	if (props.controls["use-se"]) {
		const seName = `${props.sample}-se`;
		const nName = `${props.sample}-n`;
		const seId = _.uniqueId();
		const nId = _.uniqueId();
		return (
			<>
				<tr>
					<td>
						<label htmlFor={seId}>{props.label} SEM</label>
					</td>
					<td>
						<input
							id={seId}
							name={seName}
							value={props.controls[seName]}
							onChange={props.handleChange}
						/>
					</td>
				</tr>
				<tr>
					<td>
						<label htmlFor={nId}>
							{props.label} <em>n</em>
						</label>
					</td>
					<td>
						<input
							id={nId}
							name={nName}
							value={props.controls[nName]}
							onChange={props.handleChange}
						/>
					</td>
				</tr>
			</>
		);
	}
	const sdName = `${props.sample}-sd`;
	const sdId = _.uniqueId();
	return (
		<tr>
			<td>
				<label htmlFor={sdId}>{props.label} SD</label>
			</td>
			<td>
				<input id={sdId} name={sdName} value={props.controls[sdName]} onChange={props.handleChange} />
			</td>
		</tr>
	);
};

const UseSeControl = props => {
	const useSeName = "use-se";
	const useSeId = _.uniqueId();
	return (
		<tr>
			<td>
				<label htmlFor={useSeId}>Use Standard Error</label>
			</td>
			<td>
				<input id={useSeId} name={useSeName} checked={props.controls[useSeName]} onChange={props.handleChange} type="checkbox"/>
			</td>
		</tr>
	);
};

export default class extends React.PureComponent {
	handleChange = event => {
		this.props.setControls(
			Object.assign({}, this.props.controls, {
				[event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
			})
		);
	};
	render() {
		return (
			<fieldset>
				<table>
					<tbody>
						<MeanControl controls={this.props.controls} label="Sample 1" sample="a" handleChange={this.handleChange}/>
						<SpreadControls controls={this.props.controls} label="Sample 1" sample="a" handleChange={this.handleChange}/>
						<MeanControl controls={this.props.controls} label="Sample 2" sample="b" handleChange={this.handleChange}/>
						<SpreadControls controls={this.props.controls} label="Sample 2" sample="b" handleChange={this.handleChange}/>
						<UseSeControl controls={this.props.controls} handleChange={this.handleChange}/>
					</tbody>
				</table>
			</fieldset>
		);
	}
}
