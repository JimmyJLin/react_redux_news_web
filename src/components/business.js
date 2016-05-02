import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBusinessNews } from '../actions/index';
import { Link } from 'react-router';

class Business extends Component {


  componentWillMount() {
    this.props.fetchBusinessNews();

  }

  renderNews() {

    return this.props.business.map((result) => {
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

export default connect(mapStateToProps, {fetchBusinessNews})(Business);
