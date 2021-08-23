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
  class: WeaponClassType.Dagger,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Dagger,
})([
  {
    id: ids.Dagger,
    name: 'Dagger',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 4},
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Dirk,
    name: 'Dirk',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 3, y: 9},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredDexterity]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Kris,
    name: 'Kris',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 2, y: 11},
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredDexterity]: 45,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Blade,
    name: 'Blade',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 4, y: 15},
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredDexterity]: 51,
        [BasePropertyType.RequiredStrength]: 35,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.ThrowingKnife,
    name: 'Throwing Knife',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 4, y: 9},
        [BasePropertyType.Damage1H]: {x: 2, y: 3},
        [BasePropertyType.RequiredDexterity]: 21,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.BalancedKnife,
    name: 'Balanced Knife',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 6, y: 11},
        [BasePropertyType.Damage1H]: {x: 1, y: 8},
        [BasePropertyType.RequiredDexterity]: 51,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Poignard,
    name: 'Poignard',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.Dagger,
    imageId: ids.Dagger,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 6, y: 18},
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 19,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Rondel,
    name: 'Rondel',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.Dirk,
    imageId: ids.Dirk,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 10, y: 26},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredDexterity]: 58,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Cinquedeas,
    name: 'Cinquedeas',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Kris,
    imageId: ids.Kris,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 15, y: 31},
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredDexterity]: 88,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Stiletto,
    name: 'Stiletto',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Blade,
    imageId: ids.Blade,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 19, y: 36},
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredDexterity]: 97,
        [BasePropertyType.RequiredStrength]: 47,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.BattleDart,
    name: 'Battle Dart',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.ThrowingKnife,
    imageId: ids.ThrowingKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 11, y: 24},
        [BasePropertyType.Damage1H]: {x: 8, y: 16},
        [BasePropertyType.RequiredDexterity]: 52,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 19,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.WarDart,
    name: 'War Dart',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.BalancedKnife,
    imageId: ids.BalancedKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 14, y: 27},
        [BasePropertyType.Damage1H]: {x: 6, y: 24},
        [BasePropertyType.RequiredDexterity]: 97,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 22,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.BoneKnife,
    name: 'Bone Knife',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.Dagger,
    imageId: ids.Dagger,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 23, y: 49},
        [BasePropertyType.Durability]: 26,
        [BasePropertyType.RequiredDexterity]: 75,
        [BasePropertyType.RequiredStrength]: 38,
        [BasePropertyType.RequiredLevel]: 43,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.MithrilPoint,
    name: 'Mithril Point',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.Dirk,
    imageId: ids.Dirk,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 37, y: 53},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 98,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.RequiredLevel]: 52,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.FangedKnife,
    name: 'Fanged Knife',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Kris,
    imageId: ids.Kris,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 15, y: 57},
        [BasePropertyType.Durability]: 36,
        [BasePropertyType.RequiredDexterity]: 86,
        [BasePropertyType.RequiredStrength]: 42,
        [BasePropertyType.RequiredLevel]: 62,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.LegendSpike,
    name: 'Legend Spike',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Blade,
    imageId: ids.Blade,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 31, y: 47},
        [BasePropertyType.Durability]: 47,
        [BasePropertyType.RequiredDexterity]: 67,
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.FlyingKnife,
    name: 'Flying Knife',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.ThrowingKnife,
    imageId: ids.ThrowingKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 23, y: 54},
        [BasePropertyType.Damage1H]: {x: 23, y: 54},
        [BasePropertyType.RequiredDexterity]: 141,
        [BasePropertyType.RequiredStrength]: 48,
        [BasePropertyType.RequiredLevel]: 48,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.WingedKnife,
    name: 'Winged Knife',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.BalancedKnife,
    imageId: ids.BalancedKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 23, y: 39},
        [BasePropertyType.Damage1H]: {x: 27, y: 35},
        [BasePropertyType.RequiredDexterity]: 142,
        [BasePropertyType.RequiredStrength]: 45,
        [BasePropertyType.RequiredLevel]: 57,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
]);
