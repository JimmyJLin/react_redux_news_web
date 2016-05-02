import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorldNews } from '../actions/index';
import { Link } from 'react-router';

class World extends Component {

  componentWillMount() {
    this.props.fetchWorldNews();

  }

  renderNews() {
    // console.log("promise", this.props.world)
    return this.props.world.map((result) => {

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
        <h3>World News Section</h3>
        <ul className="list-group">
          {this.renderNews()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { world: state.world };
}

export default connect(mapStateToProps, {fetchWorldNews})(World);
