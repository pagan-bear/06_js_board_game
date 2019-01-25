/* eslint-disable no-console */

import Configuration from './Configuration';

export default function LootChest(x2, y2) {
  console.log('+++ Starting LootChest.LootChest(player)');

  // Save weapon and chest details to Configuration.chest
  // let [x, y] = Configuration.player.toTile;

  // Swap player and chest weapons
  [Configuration.gameboard[y2][x2].weapon, Configuration.player.weapon] =
    [Configuration.player.weapon, Configuration.gameboard[y2][x2].weapon];

  // Save the chest object to Configuration variable
  Configuration.chest = Configuration.gameboard[y2][x2];

  // Set flag to restore chest to it's original location when player moves
  Configuration.restoreChest = true;

  // Move player to chest tile
  Configuration.player.clearToken();
  Configuration.player.fillToken();
  Configuration.player.currentTile = [x2, y2];
  Configuration.gameboard[y2][x2] = null;

  // Move player to chest position
  console.log('--- Ending LootChest.LootChest(player)');
}