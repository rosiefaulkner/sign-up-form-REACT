import React from "react";
import "./Form.css";

const emptyForm = {
  firstname: "",
  lastname: "",
  email: ""
};

export class Form extends React.Component {
  state = {};
  componentDidMount() {
    this.setState(emptyForm);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div id="Form">
        <form id="form" onSubmit={this.handleSubmit}>
          <input
            id="firstNameInput"
            name="firstname"
            type="text"
            placeholder="First name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            id="lastNameInput"
            name="lastname"
            type="text"
            placeholder="Last name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            id="emailInput"
            name="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
        <p>By clicking the button, you are agreeing to the <strong>Terms of Service</strong></p>
      </div>
    );
  }
}
