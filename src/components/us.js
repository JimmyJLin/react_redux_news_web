import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsNews } from '../actions/index';
import { Link } from 'react-router';

class Us extends Component {

  componentWillMount() {
    this.props.fetchUsNews();

  }

  renderNews() {
    // const newsFeed = this.props.us[0]
    return this.props.us.map((result) => {
      // console.log('props.results', this.props.us[0].results)
      return result.results.map((oneNews) => {
        // console.log("multimedia[1]", oneNews.multimedia[0])
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
