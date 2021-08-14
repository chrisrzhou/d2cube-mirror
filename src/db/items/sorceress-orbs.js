import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  playerClass: PlayerClassType.Sorceress,
  class: WeaponClassType.Staff,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.SorceressOrb,
})([
  {
    id: ids.EagleOrb,
    name: 'Eagle Orb',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 2, y: 5},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.SacredGlobe,
    name: 'Sacred Orb',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 3, y: 8},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.SmokedSphere,
    name: 'Smoked Sphere',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 4, y: 10},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.ClaspedOrb,
    name: 'Clapsed Orb',
    tier: ItemTierType.Normal,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 5, y: 12},
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.JaredsStone,
    name: "Jared's Stone",
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 8, y: 18},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.GlowingOrb,
    name: 'Glowing Orb',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.EagleOrb,
    imageId: ids.EagleOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 8, y: 21},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.CrystallineGlobe,
    name: 'Crystalline Globe',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.SacredGlobe,
    imageId: ids.SacredGlobe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 10, y: 26},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredLevel]: 27,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.CloudySphere,
    name: 'Cloudy Sphere',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.SmokedSphere,
    imageId: ids.SmokedSphere,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 11, y: 29},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredLevel]: 30,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.SparklingBall,
    name: 'Sparkling Ball',
    tier: ItemTierType.Exceptional,
    size: [2, 1],
    baseId: ids.ClaspedOrb,
    imageId: ids.ClaspedOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 13, y: 32},
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredLevel]: 34,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.SwirlingCrystal,
    name: 'Swirling Crystal',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.JaredsStone,
    imageId: ids.JaredsStone,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 18, y: 42},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredLevel]: 37,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.HeavenlyStone,
    name: 'Heavenly Stone',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.EagleOrb,
    imageId: ids.EagleOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 21, y: 46},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredLevel]: 44,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.EldritchOrb,
    name: 'Eldritch Orb',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.SacredGlobe,
    imageId: ids.SacredGlobe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 18, y: 50},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredLevel]: 50,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.DemonHeart,
    name: 'Demon Heart',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.SmokedSphere,
    imageId: ids.SmokedSphere,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 23, y: 55},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredLevel]: 56,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.VortexOrb,
    name: 'Vortex Orb',
    tier: ItemTierType.Elite,
    size: [2, 1],
    baseId: ids.ClaspedOrb,
    imageId: ids.ClaspedOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 12, y: 66},
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredLevel]: 63,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.DimensionalShard,
    name: 'Dimensional Shard',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.JaredsStone,
    imageId: ids.JaredsStone,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 30, y: 53},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
]);
