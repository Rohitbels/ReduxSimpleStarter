import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
import rootReducer from '../reducers/index';






export default class App extends Component {

	constructor(props){
		super(props);
		this.state={
			current:''
		};
	}



	


  render() {
    return (
      <div><br/><BookList setBook={current=>this.setState({current})}  /><BookDetail /></div>
    );
  }
}
