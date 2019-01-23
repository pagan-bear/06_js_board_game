/* jshint esversion: 6 */
/* jshint expr: true */
/* elsint no-console: off */

import Configuration from './Configuration';
import LootChest from './LootChest';
import * as Utilities from './Utilities';

export default function Play(event) {
  console.log('+++ Starting Play.Play()');

  // Check valid key pressed
  let validKey = Configuration.arrowKeys.find(key => key.id == event.keyCode);
  // if (validKey == undefined) return;
  if (!validKey) return;

  // Set player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  console.log('player:');
  console.log(player);
  let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;
  console.log('opponent:');
  console.log(opponent);

  // Assign the movement differentials and set up tile locations
  let dx = validKey.dx, dy = validKey.dy;
  let [x1, y1] = player.fromTile;
  player.toTile = [x1 + dx, y1 + dy];
  let [x2, y2] = player.toTile;
  console.log(player.fromTile);
  console.log(player.toTile);

  // Save latest variables to global player object
  Configuration.player = player;

  // Check what object - if anything - is located at the target location
  let toTileObject = (Configuration.gameboard[y2][x2] instanceof Object) ? Configuration.gameboard[y2][x2].type : null;

  switch (toTileObject) {
    case 'wall': {
      alert(`${Configuration.foundWall} ${Configuration.player.name}...`);
      break;
    }
    case 'chest': {
      console.log('*** Starting switch Movement.Movement.toTileType = chest');
      LootChest(x2, y2);

      Configuration.gameboard[y1][x1] = null;
      Configuration.gameboard[y2][x2] = player;

      player.steps++;
      break;
    }
    case 'player': {
      console.log('*** Starting switch Movement.Movement.toTileType = player');
      // PlayerBattle(player, opponent);
      break;
    }
    default: {
      console.log('*** Starting switch Movement.Movement.toTileType (default)');
      // Move player to target
      player.moveToken();

      // Remove player from original position on gameboard
      Configuration.gameboard[y1][x1] = null;

      // Check to see if we have to restore a chest
      if (Configuration.restoreChest) {
        Configuration.gameboard[y1][x1] = Configuration.chest;
        Configuration.chest.fillToken();
        Configuration.restoreChest = false;
      }

      // Add player to new position on gameboard
      Configuration.gameboard[y2][x2] = player;
      player.currentTile = [x2, y2];

      // if (CheckForOpponent(player, opponent)) { PlayerBattle(player, opponent); }
      player.steps++;

      // Save latest state back to global player
      Configuration.player = player;
    }
  }

  if (player.steps >= 3) { Utilities.EndTurn(); }
  Utilities.UpdateGameTable();
  // console.log('Final Play.Play().player');
  // console.log(player);
  // console.table(Configuration.gameboard);
  // console.log('--- Ending Play.Play()');
}