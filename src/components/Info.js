import React, { Component } from "react";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      phone: "",
      git: "",
      portfoilo: "",
    };

    this.firstChange = this.firstChange.bind(this)
    this.lastChange = this.lastChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.phoneChange = this.phoneChange.bind(this)
    this.gitChange = this.gitChange.bind(this)
    this.portChange = this.portChange.bind(this)
  }


  firstChange(event) {
    this.setState({ first: event.target.value });
  }
  lastChange(event) {
    this.setState({last: event.target.value});
  }
  emailChange(event) {
    this.setState({last: event.target.value});
  }
  phoneChange(event) {
    this.setState({phone: event.target.value});
  }
  gitChange(event) {
    this.setState({git: event.target.value});
  }
  portChange(event) {
    this.setState({portfoilo: event.target.value});
  }

  render() {
    return (
      <form>
        <label for="fName">First name:</label>
        <input
          type="text"
          id="fName"
          name="fName"
          value={this.state.first}
          onChange={this.firstChange}
        />
        <label for="lName">Last name:</label>
        <input
          type="text"
          id="lName"
          name="lName"
          value={this.state.last}
          onChange={this.lastChange}
        />
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.emailChange}
        />
        <label for="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={this.state.phone}
          onChange={this.phoneChange}
        />
        <label for="git">Git:</label>
        <input
          type="text"
          id="git"
          name="git"
          value={this.state.git}
          onChange={this.gitChange}
        />
        <label for="port">Portfoilo:</label>
        <input
          type="text"
          id="port"
          name="port"
          value={this.state.port}
          onChange={this.portChange}
        />
      </form>
    );
  }
}

export default Info 