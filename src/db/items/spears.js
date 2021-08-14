import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Spear,
  size: [4, 2],
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Spear,
})([
  {
    id: ids.Spear,
    name: 'Spear',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 3, y: 15},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.Trident,
    name: 'Trident',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 9, y: 15},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredDexterity]: 24,
        [BasePropertyType.RequiredStrength]: 38,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.Brandistock,
    name: 'Brandistock',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 7, y: 17},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 50,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.Spetum,
    name: 'Spetum',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 15, y: 23},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.RequiredStrength]: 54,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.Pike,
    name: 'Pike',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 63},
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredDexterity]: 45,
        [BasePropertyType.RequiredStrength]: 60,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.WarSpear,
    name: 'War Spear',
    tier: ItemTierType.Exceptional,
    baseId: ids.Spear,
    imageId: ids.Spear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 10, y: 37},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredDexterity]: 25,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 21,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.Fuscina,
    name: 'Fuscina',
    tier: ItemTierType.Exceptional,
    baseId: ids.Trident,
    imageId: ids.Trident,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 19, y: 37},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredDexterity]: 25,
        [BasePropertyType.RequiredStrength]: 77,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.WarFork,
    name: 'War Fork',
    tier: ItemTierType.Exceptional,
    baseId: ids.Brandistock,
    imageId: ids.Brandistock,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 16, y: 40},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 95,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.Yari,
    name: 'Yari',
    tier: ItemTierType.Exceptional,
    baseId: ids.Spetum,
    imageId: ids.Spetum,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 29, y: 50},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredStrength]: 101,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.Lance,
    name: 'Lance',
    tier: ItemTierType.Exceptional,
    baseId: ids.Pike,
    imageId: ids.Pike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 27, y: 114},
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredDexterity]: 88,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.HyperionSpear,
    name: 'Hyperion Spear',
    tier: ItemTierType.Elite,
    baseId: ids.Spear,
    imageId: ids.Spear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 35, y: 119},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredDexterity]: 120,
        [BasePropertyType.RequiredStrength]: 155,
        [BasePropertyType.RequiredLevel]: 43,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.StygianPike,
    name: 'Stygian Pike',
    tier: ItemTierType.Elite,
    baseId: ids.Trident,
    imageId: ids.Trident,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 29, y: 114},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredDexterity]: 97,
        [BasePropertyType.RequiredStrength]: 168,
        [BasePropertyType.RequiredLevel]: 49,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.Mancatcher,
    name: 'Mancatcher',
    tier: ItemTierType.Elite,
    baseId: ids.Brandistock,
    imageId: ids.Brandistock,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 42, y: 92},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 134,
        [BasePropertyType.RequiredStrength]: 132,
        [BasePropertyType.RequiredLevel]: 55,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.GhostSpear,
    name: 'Ghost Spear',
    tier: ItemTierType.Elite,
    baseId: ids.Spetum,
    imageId: ids.Spetum,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 18, y: 155},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 163,
        [BasePropertyType.RequiredStrength]: 122,
        [BasePropertyType.RequiredLevel]: 62,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.WarPike,
    name: 'War Pike',
    tier: ItemTierType.Elite,
    baseId: ids.Pike,
    imageId: ids.Pike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 33, y: 1778},
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredDexterity]: 106,
        [BasePropertyType.RequiredStrength]: 165,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
]);
