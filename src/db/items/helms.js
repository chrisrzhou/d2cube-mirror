import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 2],
  type: ItemType.Helm,
})([
  {
    id: ids.Cap,
    name: 'Cap',
    tier: ItemTierType.Normal,
    qlvl: 1,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [3, 5],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.SkullCap,
    name: 'Skull Cap',
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [8, 11],
        [BasePropertyType.RequiredStrength]: 15,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Helm,
    name: 'Helm',
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [15, 18],
        [BasePropertyType.RequiredStrength]: 26,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.FullHelm,
    name: 'Full Helm',
    tier: ItemTierType.Normal,
    qlvl: 15,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [23, 26],
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Mask,
    name: 'Mask',
    tier: ItemTierType.Normal,
    qlvl: 19,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [9, 27],
        [BasePropertyType.RequiredStrength]: 23,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.BoneHelm,
    name: 'Bone Helm',
    tier: ItemTierType.Normal,
    qlvl: 22,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [33, 36],
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.GreatHelm,
    name: 'Great Helm',
    tier: ItemTierType.Normal,
    qlvl: 23,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [30, 35],
        [BasePropertyType.RequiredStrength]: 63,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Crown,
    name: 'Crown',
    tier: ItemTierType.Normal,
    qlvl: 29,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [25, 45],
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.WarHat,
    name: 'War Hat',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    baseId: ids.Cap,
    imageId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [45, 54],
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Sallet,
    name: 'Sallet',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    baseId: ids.SkullCap,
    imageId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [52, 62],
        [BasePropertyType.RequiredStrength]: 43,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Casque,
    name: 'Casque',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    baseId: ids.Helm,
    imageId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [63, 72],
        [BasePropertyType.RequiredStrength]: 59,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Basinet,
    name: 'Basinet',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    baseId: ids.FullHelm,
    imageId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [75, 84],
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.DeathMask,
    name: 'Death Mask',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    baseId: ids.Mask,
    imageId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [54, 86],
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.GrimHelm,
    name: 'Grim Helm',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 50,
    baseId: ids.BoneHelm,
    imageId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [60, 125],
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.WingedHelm,
    name: 'Winged Helm',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 51,
    baseId: ids.GreatHelm,
    imageId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [85, 98],
        [BasePropertyType.RequiredStrength]: 115,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.GrandCrown,
    name: 'Grand Crown',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 55,
    baseId: ids.Crown,
    imageId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [78, 113],
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Shako,
    name: 'Shako',
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    baseId: ids.Cap,
    imageId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [98, 141],
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Hydraskull,
    name: 'Hydraskull',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    baseId: ids.SkullCap,
    imageId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [101, 145],
        [BasePropertyType.RequiredStrength]: 84,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Armet,
    name: 'Armet',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    baseId: ids.Helm,
    imageId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [105, 149],
        [BasePropertyType.RequiredStrength]: 109,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.GiantConch,
    name: 'Giant Conch',
    tier: ItemTierType.Elite,
    clvl: 40,
    qlvl: 54,
    baseId: ids.FullHelm,
    imageId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [110, 154],
        [BasePropertyType.RequiredStrength]: 142,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Demonhead,
    name: 'Demonhead',
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 74,
    baseId: ids.Mask,
    imageId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [101, 154],
        [BasePropertyType.RequiredStrength]: 102,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.BoneVisage,
    name: 'Bone Visage',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    baseId: ids.BoneHelm,
    imageId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [100, 157],
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.SpiredHelm,
    name: 'Spired Helm',
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 79,
    baseId: ids.GreatHelm,
    imageId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [114, 159],
        [BasePropertyType.RequiredStrength]: 192,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Corona,
    name: 'Corona',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.Crown,
    imageId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [111, 165],
        [BasePropertyType.RequiredStrength]: 174,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
]);
