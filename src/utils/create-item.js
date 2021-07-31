import {getItemById} from '../queries/index.js';
import {rollItem} from './roll-item.js';

export const createItem = (data) => {
  const {id, position} = data;

  const item = getItemById(id);

  return rollItem({
    ...item,
    position,
    // TODO remove hardcode and generalize
    sockets: [],
  });
};