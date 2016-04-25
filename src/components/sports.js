import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSportsNews } from '../actions/index';
import { Link } from 'react-router';
import * as actions from '../actions';
import _ from 'lodash';

class Sports extends Component {
  constructor(props) {
    super(props);

    this.state = { sports: this.props.fetchSportsNews()};
  }

  // componentWillMount() {
  //   this.props.fetchUsNews();
  //
  // }

  renderNews() {
    return this.props.sports.map((results) => {
      console.log('state', this.state.sports)
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
        <h3>Sports News Section</h3>
        <ul className="list-group">
          {this.renderNews()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sports: state.sports };
}

export default connect(mapStateToProps, actions)(Sports);
