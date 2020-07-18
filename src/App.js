import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "react-bootstrap/Form";
import axios from 'axios';



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`http://localhost:3000/`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input id= "name" type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
     </form>
    );
  }
}
export default NameForm;