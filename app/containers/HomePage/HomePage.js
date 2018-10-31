/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroller';
import NewsItem from 'components/NewsItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Modal from 'react-responsive-modal';
// import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.fetchData(this.props.page);
  }

  toggleModal = (index = 0) => {
    this.props.toggleModal(index);
  };

  render() {
    const {
      isLoading, data, showMobal, detailIndex
    } = this.props;
    return (
      <article className="home-page">
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home page" />
        </Helmet>
        {!_.isEmpty(data) && !_.isEmpty(data[detailIndex]) && (
          <Modal
            open={showMobal}
            onClose={this.toggleModal}
            showCloseIcon={false}
            styles={{
              modal: {
                padding: '0rem',
              }
            }}
          >
            <NewsItem
              snippet={data[detailIndex].snippet}
              source={data[detailIndex].source}
              pubDate={data[detailIndex].pubDate}
              multimedia={data[detailIndex].multimedia}
              onPress={this.props.toggleModal}
              isDetail
            />
          </Modal>
        )}
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <InfiniteScroll
            loadMore={() => {
              this.props.fetchData(this.props.page);
            }}
            hasMore
          >
            {data.map((item, index) => (
              <NewsItem
                key={index.toString()}
                snippet={item.snippet}
                source={item.source}
                pubDate={item.pubDate}
                multimedia={item.multimedia}
                onPress={() => this.toggleModal(index)}
                isDetail={false}
              />
            ))}
          </InfiniteScroll>
        )}
      </article>
    );
  }
}

HomePage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  showMobal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  detailIndex: PropTypes.number,
};
