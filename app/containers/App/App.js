/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <div className="content">
      <Helmet
        titleTemplate="News App"
        defaultTitle="News App"
      >
        <meta name="description" content="The New York news" />
      </Helmet>
    </div>

    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
