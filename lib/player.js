'use strict';

const {fetch} = require('undici');
const nbt = require('./nbt');
const path = require('node:path');
const {readdir, readFile} = require('node:fs').promises;

const PLAYER_DATA_FOLDER = 'playerdata';

async function getPlayersForWorld(worldPath) {
	const playerDataPath = path.join(worldPath, PLAYER_DATA_FOLDER);
	const allFiles = await readdir(playerDataPath);
	const datFiles = allFiles.filter(filterByExtension('dat'));
	return Promise.all(datFiles.map(datFile => {
		return getPlayer(path.join(playerDataPath, datFile));
	}));
}

async function getPlayer(playerDataPath) {
	const data = await readSimplifiedNBT(playerDataPath);
	const {name} = await getPlayerNames(path.parse(playerDataPath).name);
	return {
		name,
		data
	};
}

function filterByExtension(extension) {
	return filePath => path.parse(filePath).ext === `.${extension}`;
}

async function readSimplifiedNBT(filePath) {
	return nbt.simplify(await nbt.parse(await readFile(filePath)));
}

async function getPlayerNames(uuid) {
	const response = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`);
	if (!response.ok) {
		throw new Error(`Mojang session server responded with code ${response.status}`);
	}
	return response.json();
}

module.exports = {
	getPlayer,
	getPlayersForWorld
};
