import {merge} from 'uinix-fp';

import {ItemRarityType, RecipeType, SuffixType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {
  isHealthPotion,
  isMagic,
  isMagicSword,
  isPerfectGem,
  isRegularGem,
  isRuby,
  isSocketedNormalWeapon,
} from '../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '4 Health Potions (any type) + 1 Ruby (any type) + Magic Sword → 1 Magic Sword of the Leech',
    sources: [
      {
        item: {
          id: ids.SuperHealingPotion,
          overrideDescription: [[{text: 'Health Potion (any type)'}]],
        },
        test: isHealthPotion,
      },
      {
        item: {
          id: ids.SuperHealingPotion,
          overrideDescription: [[{text: 'Health Potion (any type)'}]],
        },
        test: isHealthPotion,
      },
      {
        item: {
          id: ids.SuperHealingPotion,
          overrideDescription: [[{text: 'Health Potion (any type)'}]],
        },
        test: isHealthPotion,
      },
      {
        item: {
          id: ids.ChippedRuby,
          overrideDescription: [[{text: 'Ruby (any type)'}]],
        },
        test: isRuby,
      },
      {
        item: {
          id: ids.CrystalSword,
          rarity: ItemRarityType.Magic,
          overrideDescription: [
            [{text: 'Magic Sword', color: 'item.rarity.magic'}],
          ],
        },
        test: isMagicSword,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[4];
        return merge(item)({
          suffix: SuffixType.Leech,
        });
      },
    },
  },
  {
    name: '3 Perfect Gems (any type) + 1 Magic Item → 1 Random Magic Item of the Same Type',
    sources: [
      {
        item: {
          id: ids.PerfectDiamond,
          overrideDescription: [[{text: 'Perfect gem (any type)'}]],
        },
        test: isPerfectGem,
      },
      {
        item: {
          id: ids.PerfectDiamond,
          overrideDescription: [[{text: 'Perfect gem (any type)'}]],
        },
        test: isPerfectGem,
      },
      {
        item: {
          id: ids.PerfectDiamond,
          overrideDescription: [[{text: 'Perfect gem (any type)'}]],
        },
        test: isPerfectGem,
      },
      {
        item: {
          id: ids.CrystalSword,
          rarity: ItemRarityType.Magic,
          overrideDescription: [
            [{text: 'Magic Item', color: 'item.rarity.magic'}],
            [{text: 'Including rings, amulets, jewels, charms etc'}],
          ],
        },
        test: isMagic,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[3];
        return item;
      },
    },
  },
  {
    name: '3 Regular Gems (any type) + 1 Socketed Weapon (any type) → 1 Socketed Magic Weapon (of the same type)',
    sources: [
      {
        item: {
          id: ids.Diamond,
          overrideDescription: [[{text: 'Regular gem (any type)'}]],
        },
        test: isRegularGem,
      },
      {
        item: {
          id: ids.Diamond,
          overrideDescription: [[{text: 'Regular gem (any type)'}]],
        },
        test: isRegularGem,
      },
      {
        item: {
          id: ids.Diamond,
          overrideDescription: [[{text: 'Regular gem (any type)'}]],
        },
        test: isRegularGem,
      },
      {
        item: {
          id: ids.CrystalSword,
          rarity: ItemRarityType.Normal,
          sockets: [null, null],
          overrideDescription: [
            [
              {
                text: 'Socketed Normal Weapon (any type)',
                color: 'item.rarity.normal',
              },
            ],
          ],
        },
        test: isSocketedNormalWeapon,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[3];
        return merge(item)({
          rarity: ItemRarityType.Magic,
          sockets: [null, null],
        });
      },
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Magic,
})(recipes);
