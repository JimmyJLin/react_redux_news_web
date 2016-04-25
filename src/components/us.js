import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsNews } from '../actions/index';
import { Link } from 'react-router';
// import * as actions from '../actions';
import _ from 'lodash';

class Us extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this.state = { us: this.props.fetchUsNews()};
  // }

  componentWillMount() {
    this.props.fetchUsNews();

  }

  renderNews() {
    return this.props.us.map((results) => {
      console.log('props', this.props.us)
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
        <h3>US News Section</h3>
        <ul className="list-group">
          {this.renderNews()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { us: state.us };
}

export default connect(mapStateToProps, {fetchUsNews})(Us);
