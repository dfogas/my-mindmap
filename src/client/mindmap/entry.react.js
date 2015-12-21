import './mindmap.styl';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';
import EntryLink from './link.react';

import links from '../links';

class Entry extends Component {
  render() {
    const {head} = this.props;
    return (
      <div className='mindmap-entry'>
        <FormattedHTMLMessage message={msg('mindmap.' + head)} />
        {' '}
        <div id='ListOfLinks'>
          {links[head].map(link => {
            return (
              <EntryLink
                entry={link}
                />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Entry;
