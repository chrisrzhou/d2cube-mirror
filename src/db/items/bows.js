import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Bow,
  type: ItemType.Bow,
})([
  {
    id: ids.ShortBow,
    name: 'Short Bow',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 1, max: 4},
        [BasePropertyType.AttackSpeed]: 5,
        [BasePropertyType.RequiredDexterity]: 15,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.HuntersBow,
    name: "Hunter's Bow",
    tier: ItemTierType.Normal,
    qlvl: 5,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 2, max: 6},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredDexterity]: 28,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.LongBow,
    name: 'Long Bow',
    tier: ItemTierType.Normal,
    qlvl: 8,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 3, max: 10},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 22,
        [BasePropertyType.RequiredDexterity]: 19,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.CompositeBow,
    name: 'Composite Bow',
    tier: ItemTierType.Normal,
    qlvl: 12,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 4, max: 8},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ShortBattleBow,
    name: 'Short Battle Bow',
    tier: ItemTierType.Normal,
    qlvl: 18,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 5, max: 11},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.RequiredDexterity]: 40,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.LongBattleBow,
    name: 'Long Battle Bow',
    tier: ItemTierType.Normal,
    qlvl: 23,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 3, max: 18},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.RequiredDexterity]: 50,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.ShortWarBow,
    name: 'Short War Bow',
    tier: ItemTierType.Normal,
    qlvl: 27,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 6, max: 14},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 35,
        [BasePropertyType.RequiredDexterity]: 55,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.LongWarBow,
    name: 'Long War Bow',
    tier: ItemTierType.Normal,
    qlvl: 31,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 3, max: 23},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredDexterity]: 65,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.EdgeBow,
    name: 'Edge Bow',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    qlvl: 30,
    size: [3, 2],
    baseId: ids.ShortBow,
    imageId: ids.ShortBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 6, max: 19},
        [BasePropertyType.AttackSpeed]: 5,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredDexterity]: 43,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.RazorBow,
    name: 'Razor Bow',
    tier: ItemTierType.Exceptional,
    clvl: 21,
    qlvl: 33,
    size: [3, 2],
    baseId: ids.HuntersBow,
    imageId: ids.HuntersBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 8, max: 22},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredDexterity]: 62,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.CedarBow,
    name: 'Cedar Bow',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    qlvl: 35,
    size: [4, 2],
    baseId: ids.LongBow,
    imageId: ids.LongBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 10, max: 29},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 53,
        [BasePropertyType.RequiredDexterity]: 48,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.DoubleBow,
    name: 'Double Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    size: [3, 2],
    baseId: ids.CompositeBow,
    imageId: ids.CompositeBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 11, max: 26},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ShortSiegeBow,
    name: 'Short Siege Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    size: [3, 2],
    baseId: ids.ShortBattleBow,
    imageId: ids.ShortBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 13, max: 30},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.LargeSiegeBow,
    name: 'Large Siege Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 46,
    size: [4, 2],
    baseId: ids.LongBattleBow,
    imageId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 10, max: 42},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredDexterity]: 95,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.RuneBow,
    name: 'Rune Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    size: [3, 2],
    baseId: ids.ShortWarBow,
    imageId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 14, max: 35},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.RequiredDexterity]: 103,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.GothicBow,
    name: 'Gothic Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 52,
    size: [4, 2],
    baseId: ids.LongWarBow,
    imageId: ids.LongWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 10, max: 50},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 95,
        [BasePropertyType.RequiredDexterity]: 118,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.SpiderBow,
    name: 'Spider Bow',
    tier: ItemTierType.Elite,
    clvl: 41,
    qlvl: 55,
    size: [3, 2],
    baseId: ids.ShortBow,
    imageId: ids.ShortBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 23, max: 50},
        [BasePropertyType.AttackSpeed]: 5,
        [BasePropertyType.RequiredStrength]: 64,
        [BasePropertyType.RequiredDexterity]: 143,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.BladeBow,
    name: 'Blade Bow',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 60,
    size: [3, 2],
    baseId: ids.HuntersBow,
    imageId: ids.HuntersBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 21, max: 41},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.RequiredDexterity]: 119,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ShadowBow,
    name: 'Shadow Bow',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    size: [4, 2],
    baseId: ids.LongBow,
    imageId: ids.LongBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 15, max: 59},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 52,
        [BasePropertyType.RequiredDexterity]: 188,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.GreatBow,
    name: 'Great Bow',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    size: [3, 2],
    baseId: ids.CompositeBow,
    imageId: ids.CompositeBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 12, max: 52},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 121,
        [BasePropertyType.RequiredDexterity]: 107,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.DiamondBow,
    name: 'Diamond Bow',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 72,
    size: [3, 2],
    baseId: ids.ShortBattleBow,
    imageId: ids.ShortBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 33, max: 40},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 89,
        [BasePropertyType.RequiredDexterity]: 132,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.CrusaderBow,
    name: 'Crusader Bow',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 77,
    size: [4, 2],
    baseId: ids.LongBattleBow,
    imageId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 15, max: 63},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 97,
        [BasePropertyType.RequiredDexterity]: 121,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.WardBow,
    name: 'Ward Bow',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 80,
    size: [3, 2],
    baseId: ids.ShortWarBow,
    imageId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 20, max: 53},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 72,
        [BasePropertyType.RequiredDexterity]: 146,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.HydraBow,
    name: 'Hydra Bow',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 85,
    size: [4, 2],
    baseId: ids.LongWarBow,
    imageId: ids.LongWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 10, max: 68},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 134,
        [BasePropertyType.RequiredDexterity]: 167,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
]);
