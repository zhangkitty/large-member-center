import React from 'react';
import Proptypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route as RawRoute, Switch } from 'react-router-dom';
import injectStore from 'rrc-loader-helper/lib/inj-dispatch';


import Nav from './nav/view';
import Login from './login/view';

const Home = () => <div>首页</div>;

/* eslint-disable */
const WrapperComponent = Component => props => <Component {...props} params={props.match.params} />;

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.map = new Map();
  }
  render() {
    const { component } = this.props;
    if (!this.map.has(component)) {
      this.map.set(component, WrapperComponent(component))
    }
    return <RawRoute {...this.props} component={this.map.get(component)} />;
  }
}

// alert!! for loader
import reducers from './index';
let store;
const Loading = () => <div />;
/* eslint-enable */

const NavWrapper = props => (
  <Nav {...props}>
    <Switch>
      <Route exact path="/" component={Home} />
      __ROOT_ROUTE__
    </Switch>
  </Nav>
);

const Routes = ({ history, innerStore }) => {
  store = innerStore;
  injectStore(innerStore);
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={NavWrapper} />
      </Switch>
    </ConnectedRouter>
  );
};
/* eslint-disable */
Routes.propTypes = {
  history: Proptypes.shape(),
  innerStore: Proptypes.shape(),
};

export default Routes;
