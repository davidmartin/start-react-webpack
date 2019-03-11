import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Input extends Component {
	static propTypes = {
		label: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		handleChange: PropTypes.func.isRequired
	};

	render () {
		let { label, text, type, id, value, handleChange } = this.props;
		return (
			<div className="form-group">
				<label htmlFor={label}>{text}</label>
				<input
				type={type}
				className="form-control"
				id={id}
				value={value}
				onChange={handleChange}
				required
				/>
		  </div>
		);
	}
}