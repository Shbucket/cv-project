import React, { Component } from "react";
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Universty: "",
      City: "",
        Degree: "",
      Subject: "",
      From: "",
      To: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
        <div>
        <h1>Education</h1>
      <form>
        <label for="University">University:</label>
        <input
          type="text"
          id="fName"
          name="first"
          value={this.state.first}
          onChange={this.handleInputChange}
        />
        <label for="lName">Last name:</label>
        <input
          type="text"
          id="lName"
          name="last"
          value={this.state.last}
          onChange={this.handleInputChange}
        />
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label for="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={this.state.phone}
          onChange={this.handleInputChange}
        />
        <label for="git">Git:</label>
        <input
          type="text"
          id="git"
          name="git"
          value={this.state.git}
          onChange={this.handleInputChange}
        />
        <label for="port">Portfoilo:</label>
        <input
          type="text"
          id="port"
          name="port"
          value={this.state.port}
          onChange={this.handleInputChange}
        />
      </form>
      </div>
    );
  }
}
export default Education