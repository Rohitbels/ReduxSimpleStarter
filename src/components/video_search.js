import React, {Component} from 'react';


class Searchbar extends Component {

  constructor(props)
  {
    super(props);
    this.state={
        term :''
    }
  }

  onInputChange(term){
    this.setState({term:term});
    this.props.onSearch(term);

  }

  render(){
        return <input type="text" className="col-md-10" onChange={event=>{this.onInputChange(event.target.value)  }}/>

  }


  handleChange(event){
    console.log(event.target.value);
  }
}




export default Searchbar;
