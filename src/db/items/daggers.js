import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Dagger,
  type: ItemType.Dagger,
})([
  {
    id: ids.Dagger,
    name: 'Dagger',
    tier: ItemTierType.Normal,
    qlvl: 3,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [1, 4],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.Durability]: [16],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.Dirk,
    name: 'Dirk',
    tier: ItemTierType.Normal,
    qlvl: 9,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [3, 9],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.MinimumDexterity]: [25],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.Kris,
    name: 'Kris',
    tier: ItemTierType.Normal,
    qlvl: 17,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [2, 11],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumDexterity]: [45],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.Blade,
    name: 'Blade',
    tier: ItemTierType.Normal,
    qlvl: 23,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [4, 15],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.MinimumStrength]: [35],
        [BasePropertyType.MinimumDexterity]: [51],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.ThrowingKnife,
    name: 'Throwing Knife',
    tier: ItemTierType.Normal,
    qlvl: 2,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [4, 9],
        [BasePropertyType.Damage1H]: [2, 3],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.MinimumDexterity]: [21],
      },
    },
  },
  {
    id: ids.BalancedKnife,
    name: 'Balanced Knife',
    tier: ItemTierType.Normal,
    qlvl: 13,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [6, 11],
        [BasePropertyType.Damage1H]: [1, 8],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumDexterity]: [51],
      },
    },
  },
  {
    id: ids.Poignard,
    name: 'Poignard',
    tier: ItemTierType.Exceptional,
    clvl: 19,
    qlvl: 31,
    size: [2, 1],
    baseId: ids.Dagger,
    imageId: ids.Dagger,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [6, 18],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.Durability]: [16],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.Rondel,
    name: 'Rondel',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 36,
    size: [2, 1],
    baseId: ids.Dirk,
    imageId: ids.Dirk,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [10, 26],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.MinimumDexterity]: [58],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.Cinquedeas,
    name: 'Cinquedeas',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    size: [3, 1],
    baseId: ids.Kris,
    imageId: ids.Kris,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [15, 31],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.MinimumDexterity]: [88],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.Stiletto,
    name: 'Stiletto',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 46,
    size: [3, 1],
    baseId: ids.Blade,
    imageId: ids.Blade,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [19, 36],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.MinimumStrength]: [73],
        [BasePropertyType.MinimumDexterity]: [97],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.BattleDart,
    name: 'Battle Dart',
    tier: ItemTierType.Exceptional,
    clvl: 19,
    qlvl: 31,
    size: [2, 1],
    baseId: ids.ThrowingKnife,
    imageId: ids.ThrowingKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [11, 24],
        [BasePropertyType.Damage1H]: [8, 16],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.MinimumDexterity]: [52],
      },
    },
  },
  {
    id: ids.WarDart,
    name: 'War Dart',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 39,
    size: [2, 1],
    baseId: ids.BalancedKnife,
    imageId: ids.BalancedKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [14, 27],
        [BasePropertyType.Damage1H]: [6, 24],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.MinimumDexterity]: [97],
      },
    },
  },
  {
    id: ids.BoneKnife,
    name: 'Bone Knife',
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    size: [2, 1],
    baseId: ids.Dagger,
    imageId: ids.Dagger,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [23, 49],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumStrength]: [38],
        [BasePropertyType.MinimumDexterity]: [75],
        [BasePropertyType.Durability]: [26],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.MithrilPoint,
    name: 'Mithril Point',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [2, 1],
    baseId: ids.Dirk,
    imageId: ids.Dirk,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [37, 53],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.MinimumStrength]: [55],
        [BasePropertyType.MinimumDexterity]: [98],
        [BasePropertyType.Durability]: [55],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.FangedKnife,
    name: 'Fanged Knife',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 83,
    size: [3, 1],
    baseId: ids.Kris,
    imageId: ids.Kris,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [15, 57],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumStrength]: [42],
        [BasePropertyType.MinimumDexterity]: [86],
        [BasePropertyType.Durability]: [36],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.LegendSpike,
    name: 'Legend Spike',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [3, 1],
    baseId: ids.Blade,
    imageId: ids.Blade,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [31, 47],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.MinimumStrength]: [65],
        [BasePropertyType.MinimumDexterity]: [67],
        [BasePropertyType.Durability]: [47],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.FlyingKnife,
    name: 'Flying Knife',
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 64,
    size: [2, 1],
    baseId: ids.ThrowingKnife,
    imageId: ids.ThrowingKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [23, 54],
        [BasePropertyType.Damage1H]: [23, 54],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.MinimumStrength]: [48],
        [BasePropertyType.MinimumDexterity]: [141],
      },
    },
  },
  {
    id: ids.WingedKnife,
    name: 'Winged Knife',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 77,
    size: [2, 1],
    baseId: ids.BalancedKnife,
    imageId: ids.BalancedKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [23, 39],
        [BasePropertyType.Damage1H]: [27, 35],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.MinimumStrength]: [45],
        [BasePropertyType.MinimumDexterity]: [142],
      },
    },
  },
]);
