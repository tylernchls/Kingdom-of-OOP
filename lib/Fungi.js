const Eukaryota = require('./Eukaryota');

module.exports = class Fungi extends Eukaryota {
  constructor (name) {
    super ( name, false, true, false, true);
  }
};