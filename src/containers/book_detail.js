import React,{ Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
		render(){
			return (
					<div className="col-md-5 jumbotron">
						<h1>{this.props.book}</h1>
					</div>
				)
		}
}

function mapStateToProps(state){
    console.log(state);
	return {
		book:state.current
	};
}
export default connect(mapStateToProps)(BookDetail);