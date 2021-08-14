import {merge} from 'uinix-fp';

import {ItemQualityType, MagicPropertyType} from '../../enums/index.js';
import {fillNull} from '../../utils/fp.js';
import {resolveItemPropertyValue} from '../../utils/resolvers/resolve-item-property-value.js';

export const createItems = (items) =>
  Object.entries(items).reduce((acc, [id, item]) => {
    acc[id] = createItem(items)(item);
    return acc;
  }, {});

const createItem = (items) => (initialItem) => {
  // Create baseItem and unset blacklisted properties
  const baseItem = items[initialItem.baseId] || {};
  baseItem.imageId = undefined;
  baseItem.variants = undefined;

  const item = merge(baseItem)(initialItem);

  switch (item.quality) {
    case ItemQualityType.Set:
    case ItemQualityType.Unique:
      item.basename = baseItem.name;
      break;
    default:
      break;
  }

  const addSockets = resolveItemPropertyValue(
    'magic',
    MagicPropertyType.Socketed,
  )(item);
  if (addSockets) {
    const socketCount = Array.isArray(addSockets)
      ? Math.max(...addSockets)
      : addSockets;
    item.sockets = fillNull(socketCount);
  }

  return item;
};
