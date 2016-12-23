import React from 'react'

export default class Game extends React.Component {
	render () {
		var styleImage = { float: 'left', marginBottom: 0, marginRight: 20, display: "inline-block", verticalAlign: "middle" };
		var styleText = { display: "inline-block", verticalAlign: "middle" };

		return (
			<div>
				<a href={this.props.link} target="_blank"><img src={this.props.image} width="64px" height="64px" style={styleImage}/></a>
				<span><b>{this.props.title}</b> {this.props.desc} <span><br/></span>
				<a href={this.props.link} target="_blank">Play on {this.props.platform}</a></span>
			</div>			
		);
	}
}