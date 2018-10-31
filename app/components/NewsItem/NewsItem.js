/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import defaultMultimedia from './images/default-multimedia.jpg';
// import ReposList from 'components/ReposList';
import './style.scss';

export default class NewsItem extends React.PureComponent {
  componentDidMount() {}
  render() {
    const {
      snippet, source, pubDate, multimedia, isDetail
    } = this.props;
    return (
      <div className="news-card" style={isDetail ? { margin: '0px' } : {}}>
        <img
          src={_.isEmpty(multimedia) ? defaultMultimedia : multimedia}
          alt="Nature"
          style={{ width: '100%' }}
        />
        <div className="title-container">
          <h5>
            {source}, <span className="opacity">{pubDate}</span>
          </h5>
        </div>
        <div className="content">
          <p>{snippet}</p>
        </div>
        {!isDetail && (
          <button onClick={this.props.onPress}>
            <b>{'Detail >>'}</b>
          </button>
        )}
      </div>
    );
  }
}

NewsItem.propTypes = {
  snippet: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  multimedia: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isDetail: PropTypes.bool.isRequired,
};
