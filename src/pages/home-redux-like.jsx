import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Projects from 'components/project';

import { connect } from 'state/store';
import { addProject } from 'state/projects/projects.actions';
import { increment, decrement } from 'state/count/count.actions';

class HomeReduxLike extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };

    this.handleProjectAdd = this.handleProjectAdd.bind(this);
  }

  handleProjectAdd() {
    this.props.addProject({
      name: Date.now(),
      description: 'My Project'
    });
  }

  render() {
    const { projects, count } = this.props;
    
    return (
      <div>
        <div>Home Redux Like</div>
        <Link to="/">
          Go to home
        </Link>
        <p>Count: {count}</p>
        <button onClick={this.props.decrement}>- Decrement Count</button>
        <button onClick={this.props.increment}>+ Increment Count</button>
        <hr />
        <button onClick={this.handleProjectAdd}>Add Project</button>
        {projects && projects.map((project, key) =>
          <Projects
            key={key}
            name={project.name}
            description={project.description}
            status={project.status}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (...args) => dispatch(increment(...args)),
    decrement: (...args) => dispatch(decrement(...args)),
    addProject: (...args) => dispatch(addProject(...args))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeReduxLike);