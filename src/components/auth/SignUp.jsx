import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class SignUp extends PureComponent {
  state = {
    email: "",
    password: "",
    nickName: "",
    phoneNumber: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" onChange={this.onChange} />
          </div>
          <div className="input-field">
            <label htmlFor="nickName">Nick Name</label>
            <input type="text" id="nickName" onChange={this.onChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Phone Number">Phone Number</label>
            <input type="number" id="phoneNumber" onChange={this.onChange} />
          </div>
          <div className="input-filed">
            <button className="btn pink lighten-1 z-depth-0">sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(SignUp);
