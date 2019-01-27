/* eslint-disable no-console */

import Configuration from './Configuration';
// import LootChest from './LootChest';
import * as Utilities from './Utilities';

export default function Play(event) {
  console.log('+++ Starting Play.Play()');

  // Check valid key pressed
  let validKey = Configuration.arrowKeys.find(key => key.id == event.keyCode);
  if (!validKey) return;

  // Set player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;

  // Assign the movement differentials and set up tile locations
  let dx = validKey.dx, dy = validKey.dy;
  let [x1, y1] = player.fromTile;
  player.toTile = [x1 + dx, y1 + dy];
  let [x2, y2] = player.toTile;

  // Check what object - if anything - is located at the target location
  let toTileObject = (Configuration.gameboard[y2][x2] instanceof Object) ? Configuration.gameboard[y2][x2].type : null;
  console.log('toTileObject: ' + toTileObject);

  switch (toTileObject) {
    case 'wall': {
      console.log('*** Starting switch (wall)');
      alert(`${Configuration.foundWall} ${Configuration.player1.name}...`);
      break;
    }
    case 'chest': {
      console.log('*** Starting switch (chest)');
      // LootChest(x2, y2);

      // player.steps++;
      break;
    }
    case 'player': {
      console.log('*** Starting switch (player)');
      // PlayerBattle(player, opponent);
      break;
    }
    default: {
      console.log('*** Starting switch (default)');
      // Clear player from current gameboard position
      player.clearToken();

      // Move player from fromTile to toTile
      player.fillToken();

      // Update player location on gameboard
      let [x1, y1] = player.fromTile;
      let [x2, y2] = player.toTile;
      Configuration.gameboard[y1][x1] = null;
      Configuration.gameboard[y2][x2] = player;

      // Update player.fromTile and player.toTile - ready for next move
      player.fromTile = player.toTile;

      // Increment player steps
      player.steps++;

      // Check to see if we have to restore a chest
      console.log('*** Ending switch (default)');
    }
  }

  // if (CheckForOpponent(player, opponent)) { PlayerBattle(player, opponent); }
  // if (player.steps >= 3) { Utilities.EndTurn(); }
  Utilities.UpdateGameTable();
  console.table(Configuration.gameboard);
  // console.log('--- Ending Play.Play()');
}