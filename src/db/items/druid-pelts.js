import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  playerClass: PlayerClassType.Druid,
  size: [2, 2],
  type: ItemType.DruidPelt,
})([
  {
    id: ids.WolfHead,
    name: 'Wolf Head',
    tier: ItemTierType.Normal,
    clvl: 3,
    qlvl: 4,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 11],
        [BasePropertyType.MinimumStrength]: [16],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.HawkHelm,
    name: 'Hawk Helm',
    tier: ItemTierType.Normal,
    clvl: 6,
    qlvl: 8,
    properties: {
      base: {
        [BasePropertyType.Defense]: [4, 15],
        [BasePropertyType.MinimumStrength]: [20],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.Antlers,
    name: 'Antlers',
    tier: ItemTierType.Normal,
    clvl: 12,
    qlvl: 16,
    properties: {
      base: {
        [BasePropertyType.Defense]: [18, 24],
        [BasePropertyType.MinimumStrength]: [24],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.FalconMask,
    name: 'Falcon Mask',
    tier: ItemTierType.Normal,
    clvl: 15,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Defense]: [12, 28],
        [BasePropertyType.MinimumStrength]: [28],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.SpiritMask,
    name: 'Spirit Mask',
    tier: ItemTierType.Normal,
    clvl: 18,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Defense]: [22, 35],
        [BasePropertyType.MinimumStrength]: [30],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.AlphaHelm,
    name: 'Alpha Helm',
    tier: ItemTierType.Exceptional,
    clvl: 26,
    qlvl: 35,
    baseId: ids.WolfHead,
    imageId: ids.WolfHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [52, 62],
        [BasePropertyType.MinimumStrength]: [44],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.GriffonHeaddress,
    name: 'Griffon Headdress',
    tier: ItemTierType.Exceptional,
    clvl: 30,
    qlvl: 40,
    baseId: ids.HawkHelm,
    imageId: ids.HawkHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [46, 68],
        [BasePropertyType.MinimumStrength]: [50],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.HuntersGuise,
    name: "Hunter's Guise",
    tier: ItemTierType.Exceptional,
    clvl: 29,
    qlvl: 46,
    baseId: ids.Antlers,
    imageId: ids.Antlers,
    properties: {
      base: {
        [BasePropertyType.Defense]: [67, 81],
        [BasePropertyType.MinimumStrength]: [56],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.SacredFeathers,
    name: 'Sacred Feathers',
    tier: ItemTierType.Exceptional,
    clvl: 32,
    qlvl: 50,
    baseId: ids.FalconMask,
    imageId: ids.FalconMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [58, 87],
        [BasePropertyType.MinimumStrength]: [62],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.TotemicMask,
    name: 'Totemic Mask',
    tier: ItemTierType.Exceptional,
    clvl: 41,
    qlvl: 55,
    baseId: ids.SpiritMask,
    imageId: ids.SpiritMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [73, 98],
        [BasePropertyType.MinimumStrength]: [65],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.BloodSpirit,
    name: 'Blood Spirit',
    tier: ItemTierType.Elite,
    clvl: 46,
    qlvl: 62,
    baseId: ids.WolfHead,
    imageId: ids.WolfHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [101, 145],
        [BasePropertyType.MinimumStrength]: [86],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.SunSpirit,
    name: 'Sun Spirit',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 69,
    baseId: ids.HawkHelm,
    imageId: ids.HawkHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [98, 147],
        [BasePropertyType.MinimumStrength]: [95],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.EarthSpirit,
    name: 'Earth Spirit',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    baseId: ids.Antlers,
    imageId: ids.Antlers,
    properties: {
      base: {
        [BasePropertyType.Defense]: [107, 152],
        [BasePropertyType.MinimumStrength]: [104],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.SkySpirit,
    name: 'Sky Spirit',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 83,
    baseId: ids.FalconMask,
    imageId: ids.FalconMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [103, 155],
        [BasePropertyType.MinimumStrength]: [113],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.DreamSpirit,
    name: 'Dream Spirit',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.SpiritMask,
    imageId: ids.SpiritMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [109, 159],
        [BasePropertyType.MinimumStrength]: [118],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
]);
