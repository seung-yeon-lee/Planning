import React, { PureComponent } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect, ReactReduxContext } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends PureComponent {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
//docs.react-redux-firebase.com/history/v3.0.0/docs/v3-migration-guide.html

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};
// export default compose(
//   firebaseConnect((props) => [{ path: "projects" }]),
//   connect(mapStateToProps)
// )(Dashboard);

// export default compose(
//   firebaseConnect(["projects"]),
//   connect(mapStateToProps)
// )(Dashboard);

export default compose(
  firestoreConnect([{ collection: "projects" }]),
  connect(mapStateToProps)
)(Dashboard);
