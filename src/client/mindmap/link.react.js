import * as mindmapActions from './actions';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class EntryLink extends Component {
  changeHead() {
    const {entry} = this.props;
    mindmapActions.changeHead(entry);
  }

  render() {
    const {entry} = this.props;
    return (
      <span className='mindmap-link' onClick={this.changeHead.bind(this)}>
        {entry}&nbsp;|&nbsp;
      </span>
    );
  }
}

export default EntryLink;
