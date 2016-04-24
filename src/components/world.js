import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorldNews } from '../actions/index';
import { Link } from 'react-router';
import * as actions from '../actions';

class World extends Component {
  componentWillMount() {
    this.props.fetchWorldNews();
  }

  render() {
    return (
      <div>
        <h3>World News Section</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { world: state.world };
}

export default connect(mapStateToProps, actions)(World);
