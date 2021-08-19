import {isPlainObject, props} from 'uinix-fp';
import {getItemById} from '../api/index.js';
import {MagicPropertyType} from '../enums/magic-property-type.js';

import {add, sortEntriesBy, sum} from './fp.js';
import {resolveItemRunes} from './resolvers/resolve-item-runes.js';
import {resolveItemRuneword} from './resolvers/resolve-item-runeword.js';

// Track all magic properties from magic/set/socket bonuses
export const calcItemStats = (item) => {
  const stats = {};

  // Calc magic properties
  const magicProperties = props('properties.magic')(item) || {};
  Object.entries(magicProperties).forEach(pushEntry(stats));

  // Calc socket properties
  const {sockets, socketCategory} = item;
  if (sockets) {
    const runes = resolveItemRunes(item);
    const runeword = resolveItemRuneword(runes)(item);
    if (runeword) {
      const runewordProperties = props('properties.magic')(runeword);
      Object.entries(runewordProperties).forEach(pushEntry(stats));
      // TODO: centralize where this is initialized
      stats[MagicPropertyType.Socketed] = [runeword.runes.length];
    }

    item.sockets.forEach((socket) => {
      const socketItem = getItemById(socket);
      const socketProperties =
        props(`properties.socket.${socketCategory}`)(socketItem) || {};
      Object.entries(socketProperties).forEach(pushEntry(stats));
    });
  }

  // Reduce effective value
  const statsEntries = sortEntriesBy(magicPropertiesOrder)(
    Object.entries(stats),
  );
  return statsEntries.reduce((acc, [property, values]) => {
    // TODO: figure out general logic
    let effective = [];
    if (values.length === 1) {
      effective = values[0];
    } else if (values.every(Number.isFinite)) {
      effective = sum(values);
    } else if (values.every(isPlainObject)) {
      effective = sum(values);
    } else {
      effective = values.reduce((acc2, value) => {
        if (Array.isArray(value)) {
          return value;
        }

        return acc2.map(add(value));
      }, []);
    }

    acc[property] = effective;

    return acc;
  }, {});
};

const pushEntry = (x) => (entry) => {
  const [key, value] = entry;
  if (!(key in x)) {
    x[key] = [];
  }

  x[key].push(value);
};

// TODO: confirm order and centralize this in enums/magic-property-types.js
const magicPropertiesOrder = [
  MagicPropertyType.Aura,
  MagicPropertyType.ChanceToCastSpellWhenStruck,
  MagicPropertyType.ChanceToCastSpellOnStriking,
  MagicPropertyType.ChanceToCastSpellOnKill,
  MagicPropertyType.Indestructible,
  MagicPropertyType.AllSkillLevels,
  MagicPropertyType.SkillSetLevels,
  MagicPropertyType.FasterRunWalk,
  MagicPropertyType.FasterCastRate,
  MagicPropertyType.IncreasedAttackSpeed,
  MagicPropertyType.FasterHitRecovery,
  MagicPropertyType.FiresMagicArrows,
  MagicPropertyType.EnhancedDamage,
  MagicPropertyType.Damage,
  MagicPropertyType.MagicDamage,
  MagicPropertyType.MinimumDamage,
  MagicPropertyType.MaximumDamage,
  MagicPropertyType.MaximumDamageByLevel,
  MagicPropertyType.MaximumDamageByLevel,
  MagicPropertyType.PoisonSkillDamage,
  MagicPropertyType.IgnoreTargetDefense,
  MagicPropertyType.LowerLightningResist,
  MagicPropertyType.TargetDefense,
  MagicPropertyType.AttackRating,
  MagicPropertyType.BonusToAttackRating,
  MagicPropertyType.DamageToDemons,
  MagicPropertyType.AttackRatingAgainstDemons,
  MagicPropertyType.DamageToUndead,
  MagicPropertyType.AttackRatingAgainstUndead,
  MagicPropertyType.FireDamage,
  MagicPropertyType.MaximumFireDamage,
  MagicPropertyType.LightningDamage,
  MagicPropertyType.ColdDamage,
  MagicPropertyType.PoisonDamage,
  MagicPropertyType.ManaStolenPerHit,
  MagicPropertyType.LifeStolenPerHit,
  MagicPropertyType.CrushingBlow,
  MagicPropertyType.DeadlyStrike,
  MagicPropertyType.OpenWounds,
  MagicPropertyType.Spell,
  MagicPropertyType.PreventMonsterHeal,
  MagicPropertyType.HitCausesMonsterToFlee,
  MagicPropertyType.MonsterDefensePerHit,
  MagicPropertyType.DrainLife,
  MagicPropertyType.SlowsTarget,
  MagicPropertyType.Knockback,
  MagicPropertyType.FasterBlockRate,
  MagicPropertyType.IncreasedChanceOfBlocking,
  MagicPropertyType.EnhancedDefense,
  MagicPropertyType.DefenseByLevel,
  MagicPropertyType.Defense,
  MagicPropertyType.DefenseVsMelee,
  MagicPropertyType.DefenseVsMissle,
  MagicPropertyType.AllAttributes,
  MagicPropertyType.Strength,
  MagicPropertyType.StrengthByLevel,
  MagicPropertyType.Dexterity,
  MagicPropertyType.Vitality,
  MagicPropertyType.Energy,
  MagicPropertyType.Life,
  MagicPropertyType.LifeByLevel,
  MagicPropertyType.ReplenishLife,
  MagicPropertyType.IncreaseMaximumMana,
  MagicPropertyType.Mana,
  MagicPropertyType.RegenerateMana,
  MagicPropertyType.MaximumStamina,
  MagicPropertyType.HealStamina,
  MagicPropertyType.HealStaminaByLevel,
  MagicPropertyType.MaximumColdResist,
  MagicPropertyType.ColdResist,
  MagicPropertyType.MaximumLightningResist,
  MagicPropertyType.LightningResist,
  MagicPropertyType.FireResist,
  MagicPropertyType.PoisonResist,
  MagicPropertyType.AllResistances,
  MagicPropertyType.ColdAbsorb,
  MagicPropertyType.ColdAbsorbByLevel,
  MagicPropertyType.MagicAbsorb,
  MagicPropertyType.PoisonLengthReduced,
  MagicPropertyType.HalfFreezeDuration,
  MagicPropertyType.CannotBeFrozen,
  MagicPropertyType.IncreaseMaximumLife,
  MagicPropertyType.DamageReduced,
  MagicPropertyType.DamageReducedPercentage,
  MagicPropertyType.MagicDamageReduced,
  MagicPropertyType.ManaAfterKill,
  MagicPropertyType.LifeAfterKill,
  MagicPropertyType.LifeAfterDemonKill,
  MagicPropertyType.DamageTakenGoesToMana,
  MagicPropertyType.AttackerTakesDamage,
  MagicPropertyType.ExtraGold,
  MagicPropertyType.ExtraGoldByLevel,
  MagicPropertyType.MagicFind,
  MagicPropertyType.MagicFindByLevel,
  MagicPropertyType.LightRadius,
  MagicPropertyType.Requirements,
  MagicPropertyType.SpellCharges,
  MagicPropertyType.Socketed,
];
