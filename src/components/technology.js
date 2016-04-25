import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechnologyNews } from '../actions/index';
import { Link } from 'react-router';
import * as actions from '../actions';
import _ from 'lodash';

class Technology extends Component {
  constructor(props) {
    super(props);

    this.state = { technology: this.props.fetchTechnologyNews()};
  }

  // componentWillMount() {
  //   this.props.fetchUsNews();
  //
  // }

  renderNews() {
    return this.props.technology.map((results) => {
      console.log('state', this.state.technology)
      return (
        <li className='list-group-item' key={results.id}>
        <span>Title: {results.title}</span>
        </li>
      )
    })
  }


  render() {
    return (
      <div>
        <h3>Technology News Section</h3>
        <ul className="list-group">
          {this.renderNews()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { technology: state.technology };
}

export default connect(mapStateToProps, actions)(Technology);
