import {RunewordType} from '../../enums/index.js';

import ancientsPledge from './ancients-pledge.js';
import black from './black.js';
import enigma from './enigma.js';
import fury from './fury.js';
import holyThunder from './holy-thunder.js';
import honor from './honor.js';
import spirit from './spirit.js';

export default {
  [RunewordType.AmnElIthTirSol]: honor,
  [RunewordType.EthRalOrtTal]: holyThunder,
  [RunewordType.JahGulEth]: fury,
  [RunewordType.JahIthBer]: enigma,
  [RunewordType.RalOrtTal]: ancientsPledge,
  [RunewordType.TalThulOrtAmn]: spirit,
  [RunewordType.ThulIoNef]: black,
};
