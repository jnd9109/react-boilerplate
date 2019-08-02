// @flow

import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import routes from '../routes';
import Loading from './shared/Loading';

type Props = {
  i18n: {
    language: string,
    changeLanguage(lang: string): void,
  },
};

type State = {
  loading: boolean,
};

class App extends Component<Props, State> {
  state = {
    loading: true,
  };

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const { i18n } = this.props;
    const { language } = i18n;

    this.setLoading(false);
  }

  changeLanguage = (lang: string) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  };

  setLoading = (loading: boolean = true): void => {
    this.setState({ loading });
  };

  render() {
    const { loading } = this.state;
    const { setLoading } = this;

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
                render={props => (
                  <C {...props} {...rest} setLoading={setLoading} />
                )}
              />
            ))}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default withTranslation()(App);
