import {createElement as h} from 'react';
import {load} from 'uinix-ui';

import config from './src/system/config.js';
import system from './src/system/index.js';

export const wrapRootElement = ({element}) => {
  load({h, config, system});
  return element;
};
