import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSportsNews } from '../actions/index';
import { Link } from 'react-router';

class Sports extends Component {

  componentWillMount() {
    this.props.fetchSportsNews();

  }

  renderNews() {
    return this.props.sports.map((result) => {

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

export default connect(mapStateToProps, {fetchSportsNews})(Sports);
