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
  playerClass: PlayerClassType.Assassin,
  class: WeaponClassType.Claw,
  socketCategory: SocketCategoryType.Weapon,
  size: [3, 1],
  type: ItemType.AssassinKatar,
})([
  {
    id: ids.Katar,
    name: 'Katar',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 4, y: 7},
        [BasePropertyType.Durability]: 48,
        [BasePropertyType.RequiredDexterity]: 20,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.WristBlade,
    name: 'Wrist Blade',
    tier: ItemTierType.Normal,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 5, y: 9},
        [BasePropertyType.Durability]: 52,
        [BasePropertyType.RequiredDexterity]: 33,
        [BasePropertyType.RequiredStrength]: 33,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.HatchetHands,
    name: 'Hatchet Hands',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 2, y: 15},
        [BasePropertyType.Durability]: 56,
        [BasePropertyType.RequiredDexterity]: 37,
        [BasePropertyType.RequiredStrength]: 37,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Cestus,
    name: 'Cestus',
    tier: ItemTierType.Normal,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 7, y: 15},
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.RequiredDexterity]: 42,
        [BasePropertyType.RequiredStrength]: 42,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Claws,
    name: 'Claws',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 8, y: 15},
        [BasePropertyType.Durability]: 64,
        [BasePropertyType.RequiredDexterity]: 46,
        [BasePropertyType.RequiredStrength]: 46,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.BladeTalons,
    name: 'Blade Talons',
    tier: ItemTierType.Normal,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 10, y: 14},
        [BasePropertyType.Durability]: 69,
        [BasePropertyType.RequiredDexterity]: 50,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.ScissorsKatar,
    name: 'Scissors Katar',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 9, y: 17},
        [BasePropertyType.Durability]: 68,
        [BasePropertyType.RequiredDexterity]: 55,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Quhab,
    name: 'Quhab',
    tier: ItemTierType.Exceptional,
    baseId: ids.Katar,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 11, y: 24},
        [BasePropertyType.Durability]: 48,
        [BasePropertyType.RequiredDexterity]: 57,
        [BasePropertyType.RequiredStrength]: 57,
        [BasePropertyType.RequiredLevel]: 21,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.WristSpike,
    name: 'Wrist Spike',
    tier: ItemTierType.Exceptional,
    baseId: ids.WristBlade,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 13, y: 27},
        [BasePropertyType.Durability]: 56,
        [BasePropertyType.RequiredDexterity]: 66,
        [BasePropertyType.RequiredStrength]: 66,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Fascia,
    name: 'Fascia',
    tier: ItemTierType.Exceptional,
    baseId: ids.HatchetHands,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 8, y: 37},
        [BasePropertyType.Durability]: 64,
        [BasePropertyType.RequiredDexterity]: 69,
        [BasePropertyType.RequiredStrength]: 69,
        [BasePropertyType.RequiredLevel]: 27,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.HandScythe,
    name: 'Hand Scythe',
    tier: ItemTierType.Exceptional,
    baseId: ids.Cestus,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 16, y: 37},
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.RequiredLevel]: 30,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.GreaterClaws,
    name: 'Greater Claws',
    tier: ItemTierType.Exceptional,
    baseId: ids.Claws,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 18, y: 37},
        [BasePropertyType.Durability]: 52,
        [BasePropertyType.RequiredDexterity]: 76,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.RequiredLevel]: 33,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.GreaterTalons,
    name: 'Greater Talons',
    tier: ItemTierType.Exceptional,
    baseId: ids.BladeTalons,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 21, y: 35},
        [BasePropertyType.Durability]: 69,
        [BasePropertyType.RequiredDexterity]: 79,
        [BasePropertyType.RequiredStrength]: 79,
        [BasePropertyType.RequiredLevel]: 37,
        [BasePropertyType.AttackSpeed]: -30,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.ScissorsQuhab,
    name: 'Scissors Quhab',
    tier: ItemTierType.Exceptional,
    baseId: ids.ScissorsKatar,
    imageId: ids.ScissorsKatar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 19, y: 40},
        [BasePropertyType.Durability]: 68,
        [BasePropertyType.RequiredDexterity]: 82,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.RequiredLevel]: 40,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Suwayyah,
    name: 'Suwayyah',
    tier: ItemTierType.Elite,
    baseId: ids.Katar,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 39, y: 52},
        [BasePropertyType.Durability]: 48,
        [BasePropertyType.RequiredDexterity]: 99,
        [BasePropertyType.RequiredStrength]: 99,
        [BasePropertyType.RequiredLevel]: 44,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.WristSword,
    name: 'Wrist Sword',
    tier: ItemTierType.Elite,
    baseId: ids.WristBlade,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 34, y: 45},
        [BasePropertyType.Durability]: 56,
        [BasePropertyType.RequiredDexterity]: 105,
        [BasePropertyType.RequiredStrength]: 105,
        [BasePropertyType.RequiredLevel]: 46,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.WarFist,
    name: 'War Fist',
    tier: ItemTierType.Elite,
    baseId: ids.HatchetHands,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 44, y: 53},
        [BasePropertyType.Durability]: 64,
        [BasePropertyType.RequiredDexterity]: 108,
        [BasePropertyType.RequiredStrength]: 108,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.BattleCestus,
    name: 'Battle Cestus',
    tier: ItemTierType.Elite,
    baseId: ids.Cestus,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 36, y: 42},
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.RequiredDexterity]: 110,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.RequiredLevel]: 54,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.FeralClaws,
    name: 'Feral Claws',
    tier: ItemTierType.Elite,
    baseId: ids.Claws,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 22, y: 53},
        [BasePropertyType.Durability]: 52,
        [BasePropertyType.RequiredDexterity]: 113,
        [BasePropertyType.RequiredStrength]: 113,
        [BasePropertyType.RequiredLevel]: 58,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.RunicTalons,
    name: 'Runic Talons',
    tier: ItemTierType.Elite,
    baseId: ids.BladeTalons,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 24, y: 44},
        [BasePropertyType.Durability]: 69,
        [BasePropertyType.RequiredDexterity]: 115,
        [BasePropertyType.RequiredStrength]: 115,
        [BasePropertyType.RequiredLevel]: 60,
        [BasePropertyType.AttackSpeed]: -30,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.ScissorsSuwayyah,
    name: 'Scissors Suwayyah',
    tier: ItemTierType.Elite,
    baseId: ids.ScissorsKatar,
    imageId: ids.ScissorsKatar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 40, y: 51},
        [BasePropertyType.Durability]: 68,
        [BasePropertyType.RequiredDexterity]: 118,
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.RequiredLevel]: 64,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
]);
