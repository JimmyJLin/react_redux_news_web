import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorldNews } from '../actions/index';
import { Link } from 'react-router';
import * as actions from '../actions';
import _ from 'lodash';

class World extends Component {
  constructor(props) {
    super(props);

    this.state = { world: this.props.fetchWorldNews()};
  }

  // componentWillMount() {
  //   this.props.fetchWorldNews();
  //   // _.debounce(fetchWorld, 300)
  //   // this.setState({
  //   //   world: this.props.fetchWorldNews()
  //   // })
  // }


  // delayedRender() { _.debounce(()=>{
  //   renderNews()
  // }, 300)
  // }

  renderNews() {
    // console.log("promise", this.props.world)
    return this.props.world.map((results) => {
      console.log('state', this.state.world)
      return (
        <li className='list-group-item' key={results.id}>
        <span>Title: {results.title}</span>
        </li>
      )
    })
  }

  // _.debounce(renderNews, 300)

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

export default connect(mapStateToProps, actions)(World);
