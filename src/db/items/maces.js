import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Mace,
  type: ItemType.Mace,
})([
  {
    id: ids.Club,
    name: 'Club',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 1, max: 6},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.SpikedClub,
    name: 'Spiked Club',
    tier: ItemTierType.Normal,
    qlvl: 4,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 5, max: 8},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.Durability]: 36,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Mace,
    name: 'Mace',
    tier: ItemTierType.Normal,
    qlvl: 8,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 3, max: 10},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 27,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.MorningStar,
    name: 'Morning Star',
    tier: ItemTierType.Normal,
    qlvl: 13,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 7, max: 16},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 36,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Flail,
    name: 'Flail',
    tier: ItemTierType.Normal,
    qlvl: 19,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 1, max: 24},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.WarHammer,
    name: 'War Hammer',
    tier: ItemTierType.Normal,
    qlvl: 25,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 19, max: 29},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 53,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.Maul,
    name: 'Maul',
    tier: ItemTierType.Normal,
    qlvl: 21,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 30, max: 43},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 69,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.GreatMaul,
    name: 'Great Maul',
    tier: ItemTierType.Normal,
    qlvl: 32,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 38, max: 58},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 12,
        [BasePropertyType.RequiredStrength]: 99,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.Cudgel,
    name: 'Cudgel',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    qlvl: 30,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 6, max: 21},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.BarbedClub,
    name: 'Barbed Club',
    tier: ItemTierType.Exceptional,
    clvl: 20,
    qlvl: 32,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 25},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.Durability]: 36,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.FlangedMace,
    name: 'Flanged Mace',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    qlvl: 35,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 15, max: 23},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 61,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.JaggedStar,
    name: 'Jagged Star',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 20, max: 31},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 74,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Knout,
    name: 'Knout',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 35},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.BattleHammer,
    name: 'Battle Hammer',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 35, max: 58},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 100,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.WarClub,
    name: 'War Club',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 53, max: 78},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 124,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.MartelDeFer,
    name: 'Martel de Fer',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 53,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 61, max: 99},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 169,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.Truncheon,
    name: 'Truncheon',
    tier: ItemTierType.Elite,
    clvl: 39,
    qlvl: 52,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 35, max: 43},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.RequiredDexterity]: 43,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.TyrantClub,
    name: 'Tyrant Club',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 57,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 32, max: 58},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 133,
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.ReinforcedMace,
    name: 'Reinforced Mace',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 41, max: 49},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 145,
        [BasePropertyType.RequiredDexterity]: 46,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.DevilStar,
    name: 'Devil Star',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 43, max: 53},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 153,
        [BasePropertyType.RequiredDexterity]: 44,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Scourge,
    name: 'Scourge',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 3, max: 80},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 125,
        [BasePropertyType.RequiredDexterity]: 77,
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.LegendaryMallet,
    name: 'Legendary Mallet',
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 82,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 50, max: 61},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 189,
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.OgreMaul,
    name: 'Ogre Maul',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 69,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 77, max: 106},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 225,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.ThunderMaul,
    name: 'Thunder Maul',
    tier: ItemTierType.Elite,
    clvl: 65,
    qlvl: 85,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 33, max: 180},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 253,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
]);
