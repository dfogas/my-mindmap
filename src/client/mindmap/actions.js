import setToString from '../lib/settostring';
import {dispatch} from '../dispatcher';

export function changeHead(entry) {
  dispatch(changeHead, {message: entry});
}

export function updateFormField({target: {name, value}}) {
  value = value.slice(0, 100);
  dispatch(updateFormField, {name, value});
}

setToString('mindmap', {
  changeHead,
  updateFormField
});
