import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class Menu extends Component {

  render() {
    const userIsLoggedIn = !!this.props.viewer;

    return (
      <header>
        <span className='app-name'>
          <FormattedHTMLMessage message={msg('menu.headerHtml')} />
        </span>
        <ul>
          <li><Link to="home">{msg('menu.home')}</Link></li>
          &nbsp;|&nbsp;
          <li><Link to="me">{msg('menu.me')}</Link></li>
          &nbsp;|&nbsp;
          {!userIsLoggedIn &&
            <li><Link to="login">{msg('menu.login')}</Link></li>
          }
        </ul>
      </header>
    );
  }

}

Menu.propTypes = {
  viewer: React.PropTypes.instanceOf(immutable.Record)
};

export default Menu;
