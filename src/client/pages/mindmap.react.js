import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {msg} from '../intl/store';
import Entry from '../mindmap/entry.react';
import SearchField from '../mindmap/search.field.react';

class MindMap extends Component {
  render() {
    const {mindmap} = this.props;
    return (
      <DocumentTitle title={msg('mindmap.title')}>
        <div className="mindmap-page">
          <Entry
            head={mindmap.get('head')}
            />
          <SearchField
            mindmap={mindmap}
            />
        </div>
      </DocumentTitle>
    );
  }
}

export default MindMap;
