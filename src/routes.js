// @flow

import type { ComponentType } from 'react';

type Route = {
  path: string,
  component: ComponentType<*>,
  exact?: boolean,
};

const routes: Array<Route> = [];

export default routes;
