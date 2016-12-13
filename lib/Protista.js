const Eukaryota = require('./Eukaryota');

module.exports = class Protista extends Eukaryota {
  constructor( name, uniCellular, mobile, heterotroph) {
    super( name, uniCellular, mobile, true, heterotroph);
  }
};