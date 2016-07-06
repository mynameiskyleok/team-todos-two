import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  toggleChecked() {
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, !this.props.task.private);
  }

  componentDidMount() {
    $("#" + this.props.task._id + "-checkbox").after("<label for=" + this.props.task._id + "-checkbox" + "></label>");
  }

  render() {
    const taskClassName = classnames({
      'grey lighten-3': this.props.task.checked,
      private: this.props.task.private,
    });

    return (
      <li className={taskClassName + " collection-item row"}>
        <div className="col s1">
          <input type="checkbox" id={this.props.task._id + "-checkbox"} readOnly checked={this.props.task.checked} onClick={this.toggleChecked.bind(this)} />
        </div>

        <div className="col s1">
          { this.props.showPrivateButton ? (
            <button className="toggle-private btn-flat waves-effect waves-light" onClick={this.togglePrivate.bind(this)}>
              { this.props.task.private ? <i className="material-icons">lock_outline</i> : <i className="material-icons">lock_open</i> }
            </button>
          ) : ''}
        </div>
        <div className="col s9">
          <span className="text">
            {this.props.task.text} <br />
            <strong>{this.props.task.username}</strong>
          </span>
        </div>

        <div className="col s1">
          <button className="delete btn-flat waves-effect waves-light secondary-content" onClick={this.deleteThisTask.bind(this)}>
            <i className="material-icons">close</i>
          </button>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired,
}
