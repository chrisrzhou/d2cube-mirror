import {Element} from 'uinix-ui';

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

const Runegram = ({itemId, runes}) => {
  let item;
  let runeword;
  if (itemId) {
    item = itemId && rollItem({id: itemId, sockets: runes});
    runeword = resolveItemRuneword(runes.join(''))(item);
  }

  return (
    <Frame
      alignTitle="center"
      help="The Runegram visualizes socketed runes on an item.  When valid runes spell a runeword, this is visually indicated in the Runegram."
      title="Runegram"
    >
      <Element position="relative" p="l">
        <Element styleProps={{isActive: runeword}} variant="pentagram" />
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
        <Element pt="50%" variant="absolute.center">
          {runeword ? (
            <RunewordName layout="vertical" runeword={runeword} />
          ) : item && runes.length === 0 ? (
            <BrandText text="Select runes" />
          ) : (
            <RunesName runes={runes} />
          )}
        </Element>
        <Element variant="absolute.center">
          {item ? (
            <Item item={item} />
          ) : (
            <BrandText text="Select an item base" />
          )}
        </Element>
      </Element>
    </Frame>
  );
};

const allRunes = search([SEARCH_FILTERS.isTypeRune]);

export default Runegram;
