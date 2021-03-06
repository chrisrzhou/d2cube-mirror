import {Element, Layout} from 'uinix-ui';

import {search} from '../api/index.js';
import {SEARCH_FILTERS} from '../constants/index.js';
import {count} from '../utils/fp.js';
import {resolveItemRuneword} from '../utils/resolvers/resolve-item-runeword.js';
import {rollItem} from '../utils/roll-item.js';
import Item from './item.js';
import Rune from './rune.js';
import RunesName from './runes-name.js';
import RunewordName from './runeword-name.js';
import BrandText from './ui/brand-text.js';
import CircleLayout from './ui/circle-layout.js';
import Frame from './ui/frame.js';
import ResponsiveHide from './ui/responsive-hide.js';

const Runegram = ({item, runes}) => {
  let runeword;
  if (item) {
    item.sockets = item.sockets.map((_, i) => runes[i]);
    item = rollItem(item);
    runeword = resolveItemRuneword(runes.join(''))(item);
  }

  return (
    <Frame alignTitle="center" help={help} title="Runegram">
      <Element position="relative" p="l">
        <Element styleProps={{isActive: runeword}} variant="pentagram" />
        <ResponsiveHide mode="opacity">
          <CircleLayout radius={15}>
            {allRunes.map((rune) => (
              <Rune
                key={rune.id}
                count={count()(rune.id)(runes)}
                disabled={!runes.includes(rune.id)}
                rune={rune}
              />
            ))}
          </CircleLayout>
        </ResponsiveHide>
        <Layout
          align="center"
          direction="column"
          justify="center"
          spacing="l"
          variant="absolute.center"
        >
          {item ? (
            <Item item={item} />
          ) : (
            <BrandText text="Select an item base" />
          )}
          {runeword ? (
            <RunewordName item={item} layout="vertical" runeword={runeword} />
          ) : item && runes.length === 0 ? (
            <BrandText text="Select runes" />
          ) : (
            <RunesName runes={runes} />
          )}
        </Layout>
      </Element>
    </Frame>
  );
};

const allRunes = search([SEARCH_FILTERS.isTypeRune]);

const help = (
  <div>
    <p>The Runegram visualizes socketed runes on an item.</p>
    <p>
      A selected item base of choice sits in the center of the Runegram. Runes
      are laid out in a circle, ordered based on of their quality in a clockwise
      fashion. This provides a way to estimate the cost of a Runeword by simply
      observing the distribution of applied runes (with cheap runes beginning in
      the top-right quadrant and expensive runes ending in the top-left
      quadrant).
    </p>
    <p>
      A rune becomes active when applied on an item. The entire Runegram becomes
      active when a Runeword is spelled with valid runes on an appropriate item.
    </p>
  </div>
);

export default Runegram;
