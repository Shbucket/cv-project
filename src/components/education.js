import React, { Component } from "react";
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uni: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
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
          <label for="university">University:</label>
          <input
            type="text"
            id="uni"
            name="uni"
            value={this.state.uni}
            onChange={this.handleInputChange}
          />
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <label for="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={this.state.degree}
            onChange={this.handleInputChange}
          />
          <label for="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
          />
          <label for="from">From:</label>
          <input
            type="text"
            id="from"
            name='from'
            value={this.state.from}
            onChange={this.handleInputChange}
          />
          <label for="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            value={this.state.to}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}
export default Education;
