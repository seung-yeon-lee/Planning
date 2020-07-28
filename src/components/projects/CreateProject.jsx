import React, { PureComponent } from "react";

class CreateProject extends PureComponent {
  state = {
    title: "",
    content: "",
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
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              rows="10"
              className="materialize-textarea"
              onChange={this.onChange}
            />
          </div>
          <div className="input-filed">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
