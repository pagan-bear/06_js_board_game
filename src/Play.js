/* eslint-disable no-console */

import Configuration from './Configuration';
// import LootChest from './LootChest';
import * as Utilities from './Utilities';
import { PlayerBattle } from './Battle';

export default function Play(event) {
  console.log('+++ Starting Play.Play()');

  // Check valid key pressed
  let validKey = Configuration.arrowKeys.find(key => key.id == event.keyCode);
  if (!validKey) return;

  // Set player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;

  // Check to see if there is a chest to restore and if so, restore it
  RestoreChest();

  // Assign the movement differentials and set up tile locations
  let dx = validKey.dx, dy = validKey.dy;
  let [x1, y1] = player.fromTile;
  player.toTile = [x1 + dx, y1 + dy];
  let [x2, y2] = player.toTile;

  // We have our target coords so make sure movement is within gameboard
  if (x2 < 0 || x2 > 9 || y2 < 0 || y2 > 9) {
    // Player trying to move off the board
    alert(`${Configuration.outOfBounds} ${player.name}`);
    return;
  }

  // Check what object - if any - is located at the target location
  let toTileObject = (Configuration.gameboard[y2][x2] instanceof Object) ? Configuration.gameboard[y2][x2].type : null;

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
      CheckForOpponent(player, opponent);
      PlayerBattle(player, opponent);
      break;
    }
    default: {
      console.log('*** Starting switch (default)');
      // Move player from fromTile to toTile
      player.clearToken();
      player.fillToken();

      // Update gameboard & player locations
      let [x1, y1] = player.fromTile;
      let [x2, y2] = player.toTile;
      Configuration.gameboard[y1][x1] = null;
      Configuration.gameboard[y2][x2] = player;
      player.fromTile = player.toTile;

      // Increment player steps
      player.steps++;

      // Check to see if we have to restore a chest
      console.log('*** Ending switch (default)');
    }
  }

  if (CheckForOpponent(player, opponent)) {
    console.log('Opponent within striking range.');
    PlayerBattle(player, opponent);
  } else {
    console.log('Opponent not nearby.');
  }
  // if (player.steps >= 3) { Utilities.EndTurn(); }
  Utilities.UpdateGameTable();
  // console.table(Configuration.gameboard);
  console.log('--- Ending Play.Play()');
}

function RestoreChest() {
  console.log('+++ Starting Play.RestoreChest()');
  if (Configuration.restoreChest) {
    console.log('Chest needs to be restored');
  } else {
    console.log('No chest to restore. Continue with current action.');
  }
  console.log('--- Ending Play.RestoreChest()');
}

function CheckForOpponent(player, opponent) {
  // console.log('+++ Starting Movement.CheckForOpponent(player, opponent)');
  let [x1, y1] = player.toTile;
  let [x2, y2] = opponent.currentTile;

  // Check of players are adjacent
  if (
    (x2 == x1) && ((y1 == y2 - 1) || (y1 == y2 + 1) || (y1 == y2)) ||
    (y2 == y1) && ((x1 == x2 - 1) || (x1 == x2 + 1) || (x1 == x2))
  ) {
    return true;
    // So no we can attack!
  } else {
    console.log('Players NOT adjacent');
    // console.log('--- Ending Movement.CheckforOpponent(player, opponent');
    return false;
  }
}