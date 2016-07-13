import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Blaze from 'meteor/gadicc:blaze-react-component';

import Chart from 'chart.js';

class taskReports extends Component {

  constructor(props) {
    super(props);

    //initialize the encapsulated component data
    this.state = {
      // states
    }
  }

  renderCharts() {

      var ctx = document.getElementById("myChart");
      // var myChart = new Chart(ctx, {
      //     type: 'bar',
      //     data: {
      //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      //         datasets: [{
      //             label: '# of Votes',
      //             data: [12, 19, 3, 5, 2, 3],
      //             backgroundColor: [
      //                 'rgba(255, 99, 132, 0.2)',
      //                 'rgba(54, 162, 235, 0.2)',
      //                 'rgba(255, 206, 86, 0.2)',
      //                 'rgba(75, 192, 192, 0.2)',
      //                 'rgba(153, 102, 255, 0.2)',
      //                 'rgba(255, 159, 64, 0.2)'
      //             ],
      //             borderColor: [
      //                 'rgba(255,99,132,1)',
      //                 'rgba(54, 162, 235, 1)',
      //                 'rgba(255, 206, 86, 1)',
      //                 'rgba(75, 192, 192, 1)',
      //                 'rgba(153, 102, 255, 1)',
      //                 'rgba(255, 159, 64, 1)'
      //             ],
      //             borderWidth: 1
      //         }]
      //     },
      //     options: {
      //         scales: {
      //             yAxes: [{
      //                 ticks: {
      //                     beginAtZero:true
      //                 }
      //             }]
      //         }
      //     }
      // });

  }

  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <header>
          <nav className="black">
            <ul id="slide-out" className="side-nav">
              <li><a href="#!">First Sidebar Link</a></li>
              <li><a href="#!">Second Sidebar Link</a></li>
              <li className="no-padding">
                <ul className="collapsible collapsible-accordion">
                  <li>
                    <a className="collapsible-header">Dropdown<i className="material-icons">arrow_drop_down</i></a>
                    <div className="collapsible-body">
                      <ul>
                        <li><a href="#!">First</a></li>
                        <li><a href="#!">Second</a></li>
                        <li><a href="#!">Third</a></li>
                        <li><a href="#!">Fourth</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><img src="http://materializecss.com/images/yuna.jpg" alt="" class="circle" width="25px"/>
                <a href="#!">
                  <Blaze template="loginButtons" className="right" />
                </a>
              </li>
              <li><a href="#!">Second Sidebar Link</a></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="mdi-navigation-arrow-drop-down right"></i></a></li>
              <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">First</a></li>
                <li><a href="#!">Second</a></li>
                <li><a href="#!">Third</a></li>
                <li><a href="#!">Fourth</a></li>
              </ul>
            </ul>
            <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          </nav>
        </header>
        <div className="container">
          <div className="row">
            <div className="col s9">
              <h4>Reports</h4>
            </div>
            <div className="col s3">

            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <canvas id="myChart" width="400" height="400"></canvas>
              {this.renderCharts()}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default createContainer(() => {

  // if(window.location.pathname === '/tasks'){
  //   Meteor.subscribe('myTasks');
  // } else {
  //   Meteor.subscribe('teamTasks');
  // }

  return {
    // tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    // incompleteCount: Tasks.find({ checked: {$ne: true}}).count(),
    // currentUser: Meteor.user(),
  };
}, taskReports);
