import './search.field.styl';
import * as mindmapActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class SearchField extends Component {
  getForm() {
    return this.props.mindmap.get('form');
  }

  onFormSubmit(e) {
    e.preventDefault();
    mindmapActions.changeHead(this.getForm().get('searchtext'));
  }

  render() {
    const {mindmap} = this.props;
    const defaultform = {searchtext: ''};
    const form = this.getForm() || immutable.fromJS(defaultform);
    return (
      <div id='SearchField'>
        <form onSubmit={(e) => this.onFormSubmit(e)} >
          <fieldset>
            <input
              name='searchtext'
              onChange={mindmapActions.updateFormField}
              value={form.get('searchtext')} />
            <button type='submit'>Search</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchField;
