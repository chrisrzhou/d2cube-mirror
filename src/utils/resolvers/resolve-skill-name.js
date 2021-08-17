import {SkillType} from '../../enums/index.js';

const names = {
  [SkillType.ChainLightning]: 'Chain Lightning',
  [SkillType.ChargedBolt]: 'Charged Bolt',
  [SkillType.ColdMastery]: 'Cold Mastery',
  [SkillType.CorpseExplosion]: 'Corpse Explosion',
  [SkillType.CriticalStrike]: 'Critical Strike',
  [SkillType.Dodge]: 'Dodge',
  [SkillType.Enchant]: 'Enchant',
  [SkillType.EnergyShield]: 'Energy Shield',
  [SkillType.FireBall]: 'Fire Ball',
  [SkillType.FireBolt]: 'Fire Bolt',
  [SkillType.FireMastery]: 'Fire Mastery',
  [SkillType.FireWall]: 'Fire Wall',
  [SkillType.Frenzy]: 'Frenzy',
  [SkillType.FrostNova]: 'Frost Nova',
  [SkillType.GlacialSpike]: 'Glacial Spike',
  [SkillType.HolyBolt]: 'Holy Bolt',
  [SkillType.HolyShock]: 'Holy Shock',
  [SkillType.IceBlast]: 'Ice Blast',
  [SkillType.Inferno]: 'Inferno',
  [SkillType.LightningMastery]: 'Lightning Mastery',
  [SkillType.Meteor]: 'Meteor',
  [SkillType.Nova]: 'Nova',
  [SkillType.SlowMissles]: 'Slow Missles',
  [SkillType.StaticField]: 'Static Field',
  [SkillType.Teleport]: 'Teleport',
  [SkillType.Warmth]: 'Warmth',
  [SkillType.Weaken]: 'Weaken',
};

export const resolveSkillName = (skill) => names[skill];
