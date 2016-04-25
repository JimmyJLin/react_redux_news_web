import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBusinessNews } from '../actions/index';
import { Link } from 'react-router';
import * as actions from '../actions';
import _ from 'lodash';

class Business extends Component {
  constructor(props) {
    super(props);

    this.state = { business: this.props.fetchBusinessNews()};
  }

  // componentWillMount() {
  //   this.props.fetchUsNews();
  //
  // }

  renderNews() {
    return this.props.business.map((results) => {
      console.log('state', this.state.business)
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
        <h3>Business News Section</h3>
        <ul className="list-group">
          {this.renderNews()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { business: state.business };
}

export default connect(mapStateToProps, actions)(Business);
