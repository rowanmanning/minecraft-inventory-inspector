'use strict';

const got = require('got');
const nbt = require('./nbt');
const path = require('path');
const {readdir, readFile} = require('fs').promises;

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
	const allNames = await getPlayerNames(path.parse(playerDataPath).name);
	const name = allNames[allNames.length - 1].name;
	return {
		name,
		allNames,
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
	const response = await got(`https://api.mojang.com/user/profiles/${uuid.replace(/-/g, '')}/names`, {
		responseType: 'json'
	});
	return response.body;
}

module.exports = {
	getPlayer,
	getPlayersForWorld
};
