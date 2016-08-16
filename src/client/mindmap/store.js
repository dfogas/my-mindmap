import {register} from '../dispatcher';
import * as mindmapActions from './actions';
import {mindmapCursor} from '../state';

export const dispatchToken = register(({action, data}) => {

  if (action === mindmapActions.changeHead) {
    console.log('store:' + data.message);
    mindmapCursor(mindmap => {
      return mindmap.set('head', data.message);
    });
  }

  if (action === mindmapActions.updateFormField)
    mindmapCursor(mindmap => {
      return mindmap.setIn(['form', data.name], data.value);
    });

});
