import './app.styl';
import * as state from '../state';
import Component from '../components/component.react';
import Footer from './footer.react';
import Menu from './menu.react';
import React from 'react';
import {RouteHandler} from 'react-router';
import {measureRender} from '../console';

// Remember to import all app stores here.
import '../auth/store';
import '../mindmap/store';
import '../users/store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  getState() {
    return {
      // add cursors from state in order to pass them via state to pages
      auth: state.authCursor(),
      mindmap: state.mindmapCursor(),
      pendingActions: state.pendingActionsCursor(),
      users: state.usersCursor(),
      viewer: state.usersCursor().get('viewer')
    };
  }

  // Why componentWillMount instead of componentDidMount.
  // https://github.com/steida/este/issues/274
  componentWillMount() {
    if (!process.env.IS_BROWSER) return;
    state.appState.on('change', () => {
      measureRender(done => this.setState(this.getState(), done));
    });
  }

  render() {
    return (
      <div className="page">
        <Menu viewer={this.state.viewer} />
        <RouteHandler {...this.state} />
        <Footer />
      </div>
    );
  }

}

export default App;
