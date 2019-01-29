/* eslint-disable no-console */


import Configuration from './Configuration';
import * as Utilities from './Utilities';
import PlayerBattle from './Battle';
import LootChest from './LootChest';

export function ValidateKeyPressed(event) {
  // console.log('+++ Starting Movement.ValidateKeyPressed(event)');
  let validKey = Configuration.arrowKeys.find(key => key.id == event.keyCode);

  if (validKey == undefined) {
    // Key pressed invalid so let user know
    alert(`${Configuration.invalidKeypress} player...`);
    return;
  } else {
    // Key pressed is valid so continue
    event.preventDefault();
    PreMoveActivities(validKey.dx, validKey.dy);
    Movement(validKey.dx, validKey.dy);
    PostMoveActivities();
  }
  // console.log('--- Ending Movement.ValidateKeyPressed(event)');
}

export function PreMoveActivities(dx, dy) {
  console.log('+++ Starting Movement.PreMoveActivities()');
  // Check if we have to "replace" a chest
  if (Utilities.isEmpty(Configuration.chest)) {
    console.log('Configuration.chest IS empty. Nothing to do.');
  } else {
    console.log('*** Configuration.chest is NOT empty. Restoring chest.');
    Configuration.chest.fillToken();
  }
  console.log('--- Ending Movement.PreMoveActivities()');
}

export function PostMoveActivities() {
  console.log('+++ Starting Movement.PostMoveActivities()');
  Configuration.chest.fillToken();
  console.log('--- Ending Movement.PostMoveActivities()');
}

export function Movement(dx, dy) {
  // console.log('+++ Starting Movement.Movement(dx, dy)');
  // Set player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  // console.log(player);
  let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;
  // console.log(opponent);

  // Define x1, y1, x2, y2, player.currentTile and player.toTile
  let [x1, y1] = player.currentTile;
  let [x2, y2] = [x1 + dx, y1 + dy];
  player.toTile = [x2, y2];

  // Make sure target tile is within the gameboard
  if (x2 < 0 || x2 > 9 || y2 < 0 || y2 > 9) {
    // Player trying to move off the board
    alert(`${Configuration.outOfBounds} ${player.name}`);
    return;
  }

  // Check what toTile type is and take appropriate action
  let toTileType =
    (Configuration.gameboard[y2][x2] instanceof Object) ?
      Configuration.gameboard[y2][x2].type :
      null;

  switch (toTileType) {
    case 'wall': {
      console.log('*** Starting switch Movement.Movement.toTileType = wall');
      alert(`${Configuration.foundWall} ${player.name}`);
      break;
    }
    case 'chest': {
      console.log('*** Starting switch Movement.Movement.toTileType = chest');
      // Loot chest
      Configuration.chest = Configuration.gameboard[y2][x2];
      player.clearToken(x1, y1);
      player.fillToken(x2, y2);
      LootChest(player);
      Configuration.gameboard[y1][x1] = null;
      player.currentTile = [x2, y2];
      // Check if next to opponent
      // CheckForOpponent(player, opponent);
      break;
    }
    case 'player': {
      console.log('*** Starting switch Movement.Movement.toTileType = player');
      PlayerBattle(player, opponent);
      // No need to check for opponent as toTileType == opponent!
      break;
    }
    default: {
      console.log('*** Starting switch Movement.Movement.toTileType (default)');
      player.toTile = [x2, y2];

      // Move player to target
      player.clearToken(x1, y1);
      player.fillToken(x2, y2);
      // player.moveToken();
      // Remove player from original position on gameboard
      Configuration.gameboard[y1][x1] = null;
      // Add player to new position on gameboard
      Configuration.gameboard[y2][x2] = player;
      player.currentTile = [x2, y2];
      // if (CheckForOpponent(player, opponent)) { PlayerBattle(player, opponent); }
      player.steps++;
      Utilities.UpdateGameTable();

      // if (player.steps >= 3) {
      //   Utilities.EndTurn();
      // }
    }
  }
  // console.table(Configuration.gameboard);
  // console.log('--- Ending Movement.Movement(dx, dy)');
}

export function CheckForOpponent(player, opponent) {
  // console.log('+++ Starting Movement.CheckForOpponent(player, opponent)');
  let [x1, y1] = player.toTile;
  let [x2, y2] = opponent.currentTile;

  // Check of players are adjacent
  if (
    (x2 == x1) && ((y1 == y2 - 1) || (y1 == y2 + 1) || (y1 == y2)) ||
    (y2 == y1) && ((x1 == x2 - 1) || (x1 == x2 + 1) || (x1 == x2))
  ) {
    // console.log('Players adjacent');
    // console.log('--- Ending Movement.CheckforOpponent(player, opponent');
    return true;
    // So no we can attack!
    // PlayerBattle(player, opponent);
  } else {
    console.log('Players NOT adjacent');
    // console.log('--- Ending Movement.CheckforOpponent(player, opponent');
    return false;
  }
}