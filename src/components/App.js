// @flow

import React, { Fragment, Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import type { Action, ThunkAction, PromiseAction } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import reducers from '../reducers';
import routes from '../routes';
import Loading from './shared/Loading';
import { handleSetLoading } from '../actions/loading';

type Props = {
  i18n: {
    language: string,
    changeLanguage(lang: string): void,
  },
  dispatch(action: Action | ThunkAction | PromiseAction): any,
  loading: boolean,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

class App extends Component<Props> {
  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const { i18n, dispatch } = this.props;
    const { language } = i18n;

    dispatch(handleSetLoading(true));
  }

  changeLanguage = (lang: string) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  };

  render() {
    const { loading } = this.props;

    return (
      <Fragment>
        {loading && <Loading />}
        <BrowserRouter>
          <Switch>
            {routes.map(({ path, exact, component: C, ...rest }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={props => <C {...props} {...rest} />}
              />
            ))}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ loading }) => ({
  loading,
});

const ConnectedApp = withTranslation()(connect(mapStateToProps)(App));

function ProvidedApp() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}

export default ProvidedApp;
