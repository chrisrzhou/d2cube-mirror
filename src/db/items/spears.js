import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.Spear]: {
    id: ids.Spear,
    name: 'Spear',
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      [BasePropertyType.Damage2H]: [3, 15],
      [BasePropertyType.MeleeRange]: 4,
      [BasePropertyType.AttackSpeed]: -10,
      [BasePropertyType.Durability]: 30,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.Trident]: {
    id: ids.Trident,
    name: 'Trident',
    tier: ItemTierType.Normal,
    qlvl: 9,
    properties: {
      [BasePropertyType.Damage2H]: [9, 15],
      [BasePropertyType.MeleeRange]: 4,
      [BasePropertyType.AttackSpeed]: 0,
      [BasePropertyType.MinimumStrength]: 38,
      [BasePropertyType.MinimumDexterity]: 24,
      [BasePropertyType.Durability]: 35,
      [BasePropertyType.MaxSockets]: 4,
    },
  },
  [ids.Brandistock]: {
    id: ids.Brandistock,
    name: 'Brandistock',
    tier: ItemTierType.Normal,
    qlvl: 16,
    properties: {
      [BasePropertyType.Damage2H]: [7, 17],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: -20,
      [BasePropertyType.MinimumStrength]: 40,
      [BasePropertyType.MinimumDexterity]: 50,
      [BasePropertyType.Durability]: 28,
      [BasePropertyType.MaxSockets]: 5,
    },
  },
  [ids.Spetum]: {
    id: ids.Spetum,
    name: 'Spetum',
    tier: ItemTierType.Normal,
    qlvl: 20,
    properties: {
      [BasePropertyType.Damage2H]: [15, 23],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: 0,
      [BasePropertyType.MinimumStrength]: 54,
      [BasePropertyType.MinimumDexterity]: 35,
      [BasePropertyType.Durability]: 28,
      [BasePropertyType.MaxSockets]: 6,
    },
  },
  [ids.Pike]: {
    id: ids.Pike,
    name: 'Pike',
    tier: ItemTierType.Normal,
    qlvl: 24,
    properties: {
      [BasePropertyType.Damage2H]: [14, 63],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: 20,
      [BasePropertyType.MinimumStrength]: 60,
      [BasePropertyType.MinimumDexterity]: 45,
      [BasePropertyType.Durability]: 25,
      [BasePropertyType.MaxSockets]: 6,
    },
  },
  [ids.WarSpear]: {
    id: ids.WarSpear,
    name: 'War Spear',
    tier: ItemTierType.Exceptional,
    clvl: 21,
    qlvl: 33,
    baseId: ids.Spear,
    imageId: ids.Spear,
    properties: {
      [BasePropertyType.Damage2H]: [10, 37],
      [BasePropertyType.MeleeRange]: 4,
      [BasePropertyType.AttackSpeed]: -10,
      [BasePropertyType.MinimumStrength]: 25,
      [BasePropertyType.MinimumDexterity]: 25,
      [BasePropertyType.Durability]: 30,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.Fuscina]: {
    id: ids.Fuscina,
    name: 'Fuscina',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 36,
    baseId: ids.Trident,
    imageId: ids.Trident,
    properties: {
      [BasePropertyType.Damage2H]: [19, 37],
      [BasePropertyType.MeleeRange]: 4,
      [BasePropertyType.AttackSpeed]: 0,
      [BasePropertyType.MinimumStrength]: 77,
      [BasePropertyType.MinimumDexterity]: 25,
      [BasePropertyType.Durability]: 35,
      [BasePropertyType.MaxSockets]: 4,
    },
  },
  [ids.WarFork]: {
    id: ids.WarFork,
    name: 'War Fork',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 41,
    baseId: ids.Brandistock,
    imageId: ids.Brandistock,
    properties: {
      [BasePropertyType.Damage2H]: [16, 40],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: -20,
      [BasePropertyType.MinimumStrength]: 80,
      [BasePropertyType.MinimumDexterity]: 95,
      [BasePropertyType.Durability]: 28,
      [BasePropertyType.MaxSockets]: 5,
    },
  },
  [ids.Yari]: {
    id: ids.Yari,
    name: 'Yari',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 44,
    baseId: ids.Spetum,
    imageId: ids.Spetum,
    properties: {
      [BasePropertyType.Damage2H]: [29, 50],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: 0,
      [BasePropertyType.MinimumStrength]: 101,
      [BasePropertyType.Durability]: 28,
      [BasePropertyType.MaxSockets]: 6,
    },
  },
  [ids.Lance]: {
    id: ids.Lance,
    name: 'Lance',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 47,
    baseId: ids.Pike,
    imageId: ids.Pike,
    properties: {
      [BasePropertyType.Damage2H]: [27, 114],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: 20,
      [BasePropertyType.MinimumStrength]: 110,
      [BasePropertyType.MinimumDexterity]: 88,
      [BasePropertyType.Durability]: 25,
      [BasePropertyType.MaxSockets]: 6,
    },
  },
  [ids.HyperionSpear]: {
    id: ids.HyperionSpear,
    name: 'Hyperion Spear',
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    baseId: ids.Spear,
    imageId: ids.Spear,
    properties: {
      [BasePropertyType.Damage2H]: [35, 119],
      [BasePropertyType.MeleeRange]: 4,
      [BasePropertyType.AttackSpeed]: -10,
      [BasePropertyType.MinimumStrength]: 155,
      [BasePropertyType.MinimumDexterity]: 120,
      [BasePropertyType.Durability]: 30,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.StygianPike]: {
    id: ids.StygianPike,
    name: 'Stygian Pike',
    tier: ItemTierType.Elite,
    clvl: 49,
    qlvl: 66,
    baseId: ids.Trident,
    imageId: ids.Trident,
    properties: {
      [BasePropertyType.Damage2H]: [29, 114],
      [BasePropertyType.MeleeRange]: 4,
      [BasePropertyType.AttackSpeed]: 0,
      [BasePropertyType.MinimumStrength]: 168,
      [BasePropertyType.MinimumDexterity]: 97,
      [BasePropertyType.Durability]: 35,
      [BasePropertyType.MaxSockets]: 4,
    },
  },
  [ids.Mancatcher]: {
    id: ids.Mancatcher,
    name: 'Mancatcher',
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 74,
    baseId: ids.Brandistock,
    imageId: ids.Brandistock,
    properties: {
      [BasePropertyType.Damage2H]: [42, 92],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: -20,
      [BasePropertyType.MinimumStrength]: 132,
      [BasePropertyType.MinimumDexterity]: 134,
      [BasePropertyType.Durability]: 28,
      [BasePropertyType.MaxSockets]: 5,
    },
  },
  [ids.GhostSpear]: {
    id: ids.GhostSpear,
    name: 'Ghost Spear',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 83,
    baseId: ids.Spetum,
    imageId: ids.Spetum,
    properties: {
      [BasePropertyType.Damage2H]: [18, 155],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: 0,
      [BasePropertyType.MinimumStrength]: 122,
      [BasePropertyType.MinimumDexterity]: 163,
      [BasePropertyType.Durability]: 28,
      [BasePropertyType.MaxSockets]: 6,
    },
  },
  [ids.WarPike]: {
    id: ids.WarPike,
    name: 'War Pike',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.Pike,
    imageId: ids.Pike,
    properties: {
      [BasePropertyType.Damage2H]: [33, 1778],
      [BasePropertyType.MeleeRange]: 5,
      [BasePropertyType.AttackSpeed]: 20,
      [BasePropertyType.MinimumStrength]: 165,
      [BasePropertyType.MinimumDexterity]: 106,
      [BasePropertyType.Durability]: 25,
      [BasePropertyType.MaxSockets]: 6,
    },
  },
};

export default mapItems({
  type: ItemType.Spear,
  size: [4, 2],
  mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
})(items);
