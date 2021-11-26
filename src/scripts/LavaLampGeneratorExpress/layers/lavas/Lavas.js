const {Lava1} = require('./Lava1.js');
const {Lava2} = require('./Lava2.js');
const {Lava3} = require('./Lava3.js');
const {Lava4} = require('./Lava4.js');
const {Glass} = require('./Glass.js');

function Lavas({lava1, lava2, lava3, lava4, glassColor}) {
  return `
    ${Glass({glassColor})}
    ${Lava1({lava1})}
    ${Lava2({lava2})}
    ${Lava3({lava3})}
    ${Lava4({lava4})}
  `;
}


module.exports = {Lavas};
