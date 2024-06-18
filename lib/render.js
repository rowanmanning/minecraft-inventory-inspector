'use strict';

const title = require('title');

const minecraftIdPrefix = /^minecraft:/;

function renderPlayerAsMarkdown(player) {
	return fixMarkdownIndentation(`
		## ${player.name}

		### Inventory

		${renderInventoryAsMarkdown(player.data.Inventory)}

		### Ender Chest

		${renderInventoryAsMarkdown(player.data.EnderItems)}
	`);
}

function renderInventoryAsMarkdown(items) {
	if (!items.length) {
		return 'No items.';
	}
	return items.map(renderInventoryItemAsMarkdown).join('\n\n');
}

function renderInventoryItemAsMarkdown(item) {
	const enchantmentIndicator = item.tag?.Enchantments?.length ? '📖 ' : '';
	const damageIndicator = item.tag?.Damage && item.tag.Damage > 0 ? '🤕 ' : '';
	let customName = '';
	if (item.tag?.display?.Name) {
		const display = JSON.parse(item.tag.display.Name);
		customName = display.text ? ` "${JSON.parse(item.tag.display.Name).text}"` : '';
	}
	const summary = `${enchantmentIndicator}${damageIndicator}<strong>${minecraftItemIdToName(item.id)}${customName}</strong> ×${item.Count}`;
	const command = `/give @p ${item.id}${item.tag ? JSON.stringify(item.tag) : ''} ${item.Count}`;
	return fixMarkdownIndentation(`
		<details><summary>${summary}</summary><p>Run this command in-game to recreate this (operator status required):</p><pre>${command}</pre></details>
	`);
}

function minecraftItemIdToName(id) {
	return title(id.replace(minecraftIdPrefix, '').replace(/_/g, ' '));
}

function fixMarkdownIndentation(markdown) {
	return markdown.replace(/\t+/g, '').trim();
}

module.exports = {
	renderInventoryAsMarkdown,
	renderInventoryItemAsMarkdown,
	renderPlayerAsMarkdown
};
