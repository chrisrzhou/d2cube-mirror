import {Layout} from 'uinix-ui';

import Item from './item.js';
import BrandText from './ui/brand-text.js';

const Rune = ({count, disabled, rune}) => (
  <Layout
    align="center"
    direction="column"
    opacity={disabled ? 'inactive' : undefined}
    spacing="-s"
  >
    <Item item={rune} />
    <BrandText
      color="item.rune"
      fontSize="xs"
      text={`${rune.id}${count > 1 ? ` (${count})` : ''}`}
    />
  </Layout>
);

export default Rune;
