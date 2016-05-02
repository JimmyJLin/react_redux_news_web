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
    const newsFeed = this.props.us[0]
    return this.props.us.map((result) => {
      console.log('props.results', this.props.us[0].results)
      return result.results.map((oneNews) => {
        return (
          <li className='list-group-item' key={oneNews.created_date}>
            <a href={oneNews.url} target="_blank">
              <strong>{oneNews.title}</strong>
              <p>By: {oneNews.byline}</p>
              <p>Abstract: {oneNews.abstract}</p>
            </a>
          </li>
        )

      })
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
