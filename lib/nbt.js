'use strict';

const nbt = require('prismarine-nbt');
const { promisify } = require('node:util');

nbt.parse = promisify(nbt.parse);

module.exports = nbt;
