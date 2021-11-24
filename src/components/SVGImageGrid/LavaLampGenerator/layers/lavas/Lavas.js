import Lava1 from './Lava1.js';
import Lava2 from './Lava2.js';
import Lava3 from './Lava3.js';
import Lava4 from './Lava4.js';
import Glass from './Glass.js';

function Lavas({lava1, lava2, lava3, lava4, glassColor}) {
  return `
    ${Glass({glassColor})}
    ${Lava1({lava1})}
    ${Lava2({lava2})}
    ${Lava3({lava3})}
    ${Lava4({lava4})}
  `;
}

export default Lavas;
