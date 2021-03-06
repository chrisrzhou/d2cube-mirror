import {
  BasePropertyType,
  ItemQualityType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Staff,
  quality: ItemQualityType.Normal,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Staff,
})([
  {
    id: ids.ShortStaff,
    name: 'Short Staff',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 1, y: 5},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.LongStaff,
    name: 'Long Staff',
    tier: ItemTierType.Normal,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 2, y: 8},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.GnarledStaff,
    name: 'Gnarled Staff',
    tier: ItemTierType.Normal,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 4, y: 12},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.BattleStaff,
    name: 'Battle Staff',
    tier: ItemTierType.Normal,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 13},
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.WarStaff,
    name: 'War Staff',
    tier: ItemTierType.Normal,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 12, y: 28},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.JoStaff,
    name: 'Jo Staff',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.ShortStaff,
    imageId: ids.ShortStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 21},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 18,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Quaterstaff,
    name: 'Quaterstaff',
    tier: ItemTierType.Exceptional,
    size: [4, 1],
    baseId: ids.LongStaff,
    imageId: ids.LongStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 8, y: 26},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 23,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.CedarStaff,
    name: 'Cedar Staff',
    tier: ItemTierType.Exceptional,
    size: [4, 1],
    baseId: ids.GnarledStaff,
    imageId: ids.GnarledStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 11, y: 32},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.GothicStaff,
    name: 'Gothic Staff',
    tier: ItemTierType.Exceptional,
    size: [4, 1],
    baseId: ids.BattleStaff,
    imageId: ids.BattleStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 34},
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.RuneStaff,
    name: 'Rune Staff',
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    baseId: ids.WarStaff,
    imageId: ids.WarStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 24, y: 58},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.WalkingStick,
    name: 'Walking Stick',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.ShortStaff,
    imageId: ids.ShortStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 69, y: 85},
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 43,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Stalagmite,
    name: 'Stalagmite',
    tier: ItemTierType.Elite,
    size: [4, 1],
    baseId: ids.LongStaff,
    imageId: ids.LongStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 75, y: 107},
        [BasePropertyType.Durability]: 39,
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.RequiredStrength]: 63,
        [BasePropertyType.RequiredLevel]: 49,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.ElderStaff,
    name: 'Elder Staff',
    tier: ItemTierType.Elite,
    size: [4, 1],
    baseId: ids.GnarledStaff,
    imageId: ids.GnarledStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 80, y: 93},
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredDexterity]: 37,
        [BasePropertyType.RequiredStrength]: 44,
        [BasePropertyType.RequiredLevel]: 55,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Shillelagh,
    name: 'Shillelagh',
    tier: ItemTierType.Elite,
    size: [4, 1],
    baseId: ids.BattleStaff,
    imageId: ids.BattleStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 65, y: 108},
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredDexterity]: 27,
        [BasePropertyType.RequiredStrength]: 52,
        [BasePropertyType.RequiredLevel]: 62,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.ArchonStaff,
    name: 'Archon Staff',
    tier: ItemTierType.Elite,
    size: [4, 2],
    baseId: ids.WarStaff,
    imageId: ids.WarStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 83, y: 99},
        [BasePropertyType.Durability]: 26,
        [BasePropertyType.RequiredStrength]: 34,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
]);
