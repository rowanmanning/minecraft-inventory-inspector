'use strict';

const nbt = require('prismarine-nbt');
const {promisify} = require('util');

nbt.parse = promisify(nbt.parse);

module.exports = nbt;
