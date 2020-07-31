import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends PureComponent {
  state = {
    email: "",
    password: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.sign(this.state);
  };
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.onChange} />
          </div>
          <div className="input-filed">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sign: (signData) => dispatch(signIn(signData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
