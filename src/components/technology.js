import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechnologyNews } from '../actions/index';
import { Link } from 'react-router';

class Technology extends Component {

  componentWillMount() {
    this.props.fetchTechnologyNews();

  }

  renderNews() {
    return this.props.technology.map((result) => {

      return result.results.map((oneNews) => {
        return (
          <li className='list-group-item' key={oneNews.created_date}>
            <a href={oneNews.url} target="_blank">
              <strong>{oneNews.title}</strong>
              <p>{oneNews.byline}</p>
              <p>{oneNews.abstract}</p>
            </a>
          </li>
        )
      })

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

export default connect(mapStateToProps, {fetchTechnologyNews})(Technology);
