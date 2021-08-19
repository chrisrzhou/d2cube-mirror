import {RunewordType} from '../../enums/index.js';

import ancientsPledge from './ancients-pledge.js';
import beast from './beast.js';
import black from './black.js';
import bramble from './bramble.js';
import breathOfTheDying from './breath-of-the-dying.js';
import callToArms from './call-to-arms.js';
import chainsOfHonor from './chains-of-honor.js';
import chaos from './chaos.js';
import crescentMoon from './crescent-moon.js';
import delirium from './delirium.js';
import doom from './doom.js';
import duress from './duress.js';
import enigma from './enigma.js';
import eternity from './eternity.js';
import exile from './exile.js';
import famine from './famine.js';
import fury from './fury.js';
import gloom from './gloom.js';
import holyThunder from './holy-thunder.js';
import honor from './honor.js';
import kingsGrace from './kings-grace.js';
import leaf from './leaf.js';
import lionheart from './lionheart.js';
import lore from './lore.js';
import malice from './malice.js';
import melody from './melody.js';
import memory from './memory.js';
import nadir from './nadir.js';
import radiance from './radiance.js';
import rhyme from './rhyme.js';
import silence from './silence.js';
import smoke from './smoke.js';
import spirit from './spirit.js';
import stealth from './stealth.js';
import steel from './steel.js';
import strength from './strength.js';
import venom from './venom.js';
import wealth from './wealth.js';
import white from './white.js';
import zephyr from './zephyr.js';

export default {
  [RunewordType.AmnBerIstSolSur]: eternity,
  [RunewordType.AmnElIthTirSol]: honor,
  [RunewordType.AmnRalMalIstOhm]: callToArms,
  [RunewordType.AmnRalThul]: kingsGrace,
  [RunewordType.AmnTir]: strength,
  [RunewordType.BerTirUmMalLum]: beast,
  [RunewordType.DolEldHelIstTirVex]: silence,
  [RunewordType.DolIo]: white,
  [RunewordType.DolUmBerIst]: chainsOfHonor,
  [RunewordType.EthRalOrtTal]: holyThunder,
  [RunewordType.FalOhmOrtJah]: famine,
  [RunewordType.FalOhmUm]: chaos,
  [RunewordType.FalUmPul]: gloom,
  [RunewordType.HelLumFal]: lionheart,
  [RunewordType.HelOhmUmLoCham]: doom,
  [RunewordType.IthElEth]: malice,
  [RunewordType.JahGulEth]: fury,
  [RunewordType.JahIthBer]: enigma,
  [RunewordType.LemIstIo]: delirium,
  [RunewordType.LemKoTir]: wealth,
  [RunewordType.LumIoSolEth]: memory,
  [RunewordType.NefLum]: smoke,
  [RunewordType.NefTir]: nadir,
  [RunewordType.NefSolIth]: radiance,
  [RunewordType.OrtEth]: zephyr,
  [RunewordType.OrtSol]: lore,
  [RunewordType.RalOhmSurEth]: bramble,
  [RunewordType.RalOrtTal]: ancientsPledge,
  [RunewordType.ShaelEth]: rhyme,
  [RunewordType.ShaelKoNef]: melody,
  [RunewordType.ShaelUmThul]: duress,
  [RunewordType.ShaelUmTir]: crescentMoon,
  [RunewordType.TalDolMal]: venom,
  [RunewordType.TalEth]: stealth,
  [RunewordType.TalThulOrtAmn]: spirit,
  [RunewordType.ThulIoNef]: black,
  [RunewordType.TirEl]: steel,
  [RunewordType.TirRal]: leaf,
  [RunewordType.VexHelElEldZodEth]: breathOfTheDying,
  [RunewordType.VexOhmIstDol]: exile,
};
