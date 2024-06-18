#!/usr/bin/env node
'use strict';

const { getPlayersForWorld } = require('./lib/player');
const { renderPlayerAsMarkdown } = require('./lib/render');

inpectInventories().catch((error) => {
	console.error(error.message);
	process.exitCode = 1;
});

async function inpectInventories() {
	if (!process.argv[2]) {
		throw new Error('A path to the world folder is required');
	}
	const players = await getPlayersForWorld(process.argv[2]);
	const playerMarkdown = players.map(renderPlayerAsMarkdown).join('\n\n\n');
	console.log(`# Player inventories\n\n📖: Enchanted<br/>🤕: Damaged\n\n\n${playerMarkdown}`);
}
