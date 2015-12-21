import setToString from '../lib/settostring';
import {dispatch} from '../dispatcher';

export function changeHead(entry) {
  dispatch(changeHead, {message: entry});
}

setToString('mindmap', {
  changeHead
});
