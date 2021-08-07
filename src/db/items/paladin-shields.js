import {
  ArmorClassType,
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: ArmorClassType.Light,
  playerClass: PlayerClassType.Paladin,
  type: ItemType.PaladinShield,
})([
  {
    id: ids.Targe,
    name: 'Targe',
    tier: ItemTierType.Normal,
    clvl: 3,
    qlvl: 4,
    size: [2, 2],
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [8, 12],
        [BasePropertyType.BlockChance]: 40,
        [BasePropertyType.RequiredStrength]: 16,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.Rondache,
    name: 'Rondache',
    tier: ItemTierType.Normal,
    clvl: 6,
    qlvl: 8,
    size: [2, 2],
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [10, 18],
        [BasePropertyType.BlockChance]: 45,
        [BasePropertyType.RequiredStrength]: 26,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.HeraldicShield,
    name: 'Heraldic Shield',
    tier: ItemTierType.Normal,
    clvl: 12,
    qlvl: 16,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [16, 26],
        [BasePropertyType.BlockChance]: 50,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.AerinShield,
    name: 'Aerin Shield',
    tier: ItemTierType.Normal,
    clvl: 15,
    qlvl: 20,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [26, 36],
        [BasePropertyType.BlockChance]: 52,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.CrownShield,
    name: 'Crown Shield',
    tier: ItemTierType.Normal,
    clvl: 18,
    qlvl: 24,
    size: [2, 2],
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [30, 40],
        [BasePropertyType.BlockChance]: 55,
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.AkaranTarge,
    name: 'Akaran Targe',
    tier: ItemTierType.Exceptional,
    clvl: 26,
    qlvl: 35,
    size: [2, 2],
    baseId: ids.Targe,
    imageId: ids.Targe,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [101, 125],
        [BasePropertyType.BlockChance]: 40,
        [BasePropertyType.RequiredStrength]: 44,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.AkaranRondache,
    name: 'Akaran Rondache',
    tier: ItemTierType.Exceptional,
    clvl: 30,
    qlvl: 40,
    size: [2, 2],
    baseId: ids.Rondache,
    imageId: ids.Rondache,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [113, 137],
        [BasePropertyType.BlockChance]: 45,
        [BasePropertyType.RequiredStrength]: 59,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ProtectorShield,
    name: 'Protector Shield',
    tier: ItemTierType.Exceptional,
    clvl: 34,
    qlvl: 46,
    size: [4, 2],
    baseId: ids.HeraldicShield,
    imageId: ids.HeraldicShield,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [129, 153],
        [BasePropertyType.BlockChance]: 50,
        [BasePropertyType.RequiredStrength]: 69,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.GildedShield,
    name: 'Gilded Shield',
    tier: ItemTierType.Exceptional,
    clvl: 38,
    qlvl: 51,
    size: [4, 2],
    baseId: ids.AerinShield,
    imageId: ids.AerinShield,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [144, 168],
        [BasePropertyType.BlockChance]: 52,
        [BasePropertyType.RequiredStrength]: 89,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.RoyalShield,
    name: 'Royal Shield',
    tier: ItemTierType.Exceptional,
    clvl: 41,
    qlvl: 55,
    size: [2, 2],
    baseId: ids.CrownShield,
    imageId: ids.CrownShield,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [156, 181],
        [BasePropertyType.BlockChance]: 55,
        [BasePropertyType.RequiredStrength]: 114,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.SacredTarge,
    name: 'Sacred Targe',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    size: [2, 2],
    baseId: ids.Targe,
    imageId: ids.Targe,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [126, 158],
        [BasePropertyType.BlockChance]: 60,
        [BasePropertyType.RequiredStrength]: 86,
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.SacredRondache,
    name: 'Sacred Rondache',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [2, 2],
    baseId: ids.Rondache,
    imageId: ids.Rondache,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [138, 164],
        [BasePropertyType.BlockChance]: 58,
        [BasePropertyType.RequiredStrength]: 109,
        [BasePropertyType.Durability]: 68,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.KurastShield,
    name: 'Kurast Shield',
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 74,
    size: [4, 2],
    baseId: ids.HeraldicShield,
    imageId: ids.HeraldicShield,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [154, 172],
        [BasePropertyType.BlockChance]: 55,
        [BasePropertyType.RequiredStrength]: 124,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ZakarumShield,
    name: 'Zakarum Shield',
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 82,
    size: [4, 2],
    baseId: ids.AerinShield,
    imageId: ids.AerinShield,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [169, 193],
        [BasePropertyType.BlockChance]: 52,
        [BasePropertyType.RequiredStrength]: 142,
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.VortexShield,
    name: 'Vortex Shield',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [2, 2],
    baseId: ids.CrownShield,
    imageId: ids.CrownShield,
    properties: {
      base: {
        [BasePropertyType.ArmorDefense]: [182, 225],
        [BasePropertyType.BlockChance]: 49,
        [BasePropertyType.RequiredStrength]: 148,
        [BasePropertyType.Durability]: 90,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
]);
