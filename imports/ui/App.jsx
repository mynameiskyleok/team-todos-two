import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Blaze from 'meteor/gadicc:blaze-react-component';

import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    //initialize the encapsulated component data
    this.state = {
      hideCompleted: false,
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const text = this.refs.textInput.value.trim();
    Meteor.call('tasks.insert', text);
    this.refs.textInput.value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task key={task._id} task={task} showPrivateButton={showPrivateButton} />
      );
    });
  }

  componentDidMount() {
    $("#hideCompletedCheckbox").after("<label for='hideCompletedCheckbox'></label>");
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="row">
            <div className="col s9">
              <h4>Todo List ({this.props.incompleteCount})</h4>
            </div>
            <div className="col s3">
              <Blaze template="loginButtons" className="right" />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <label className="hide-completed">
                <input type="checkbox" id="hideCompletedCheckbox" readOnly checked={this.state.hideCompleted} onClick={this.toggleHideCompleted.bind(this)} />
                Hide Completed Tasks
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              { this.props.currentUser ?
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input type="text" ref="textInput" placeholder="Type to add new tasks" />
                </form> : ""
              }
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col s12">
            <ul className="collection">
              {this.renderTasks()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object
};

export default createContainer(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: {$ne: true}}).count(),
    currentUser: Meteor.user(),
  };
}, App);
