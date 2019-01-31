/* eslint-disable no-console */

import Configuration from './Configuration';
import * as Utilities from './Utilities';
// import { PlayerBattle } from './Battle';
// import { PlayerBattle } from './Battle';

export default function Play(event) {
  // console.log('+++ Starting Play.Play()');

  // Check valid key pressed
  let validKey = Configuration.arrowKeys.find(key => key.id == event.keyCode);
  if (!validKey) return;

  // Assign the movement differentials
  let dx = validKey.dx, dy = validKey.dy;

  // Assign player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;

  // Check to see if there is a chest to restore and if so, restore it

  // Set up to and from tiles
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
      // console.log('*** Starting switch (wall)');
      alert(`${Configuration.foundWall} ${Configuration.player1.name}...`);
      break;
    }
    case 'chest': {
      // console.log('*** Starting switch (chest)');
      // LootChest(player.toTile);

      // if (Utilities.CheckForOpponent(player, opponent)) { PlayerBattle(player, opponent); }

      // player.steps++;
      break;
    }
    // case 'player': {
    //   console.log('*** Starting switch (player)');
    //   break;
    // }
    default: {
      // console.log('*** Starting switch (default)');
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
      // console.log('*** Ending switch (default)');
    }
      // Check if player and opponent adjacent and commence battle if so
      if (Utilities.CheckForOpponent(player, opponent)) { Battle(player, opponent); }

  }

  // if (player.steps >= 3) { Utilities.EndTurn(); }

  Utilities.UpdateGameTable();

  // console.table(Configuration.gameboard);
  // console.log('--- Ending Play.Play()');
}

export function Battle(player, opponent) {
  console.log('+++ Starting Battle.PlayerBattle(player, opponent)');

  let attackMode = prompt(`The battle lines are drawn. (A)ttack or (D)efend ${player.name}?`).toLowerCase();
  console.log(`Battle.PlayerBattle() - Setting attack mode: ${attackMode}`);

  switch (attackMode) {
    case 'a': {
      Attack(player, opponent);
      break;
    }
    case 'd': {
      Defend(player, opponent);
      break;
    }
    default: {
      console.log(`Invalid battle code ${player.name}. Try again`);
      break;
    }
  }

  function Attack(player, opponent) {
    console.log('+++ Starting Battle.PlayerBattle.PlayerAttacks()');
    let damage = Utilities.RandomNumber(player.weapon.maxDamage / 2, player.weapon.maxDamage);
    console.log(`${player.name} attacks ${opponent.name} for ${damage} damage`);
    opponent.life -= damage;
    console.log(`${opponent.name}'s life left: ${opponent.life}`);

    // Update game status table and end turn
    Utilities.UpdateGameTable();
    Utilities.EndTurn();
    console.log('--- Ending Battle.PlayerBattle.PlayerAttacks()');
  }

  function Defend(player, opponent) {
    console.log('+++ Starting Battle.PlayerBattle.PlayerDefends()');
    console.log(player);
    console.log(opponent);
    console.log('--- Ending Battle.PlayerBattle.PlayerDefends()');
  }
  console.log('--- Ending Battle.PlayerBattle(player, opponent)');
}

// function CheckForOpponent(player, opponent) {
//   console.log('+++ Starting Movement.CheckForOpponent(player, opponent)');
//   let [x1, y1] = player.toTile;
//   let [x2, y2] = opponent.currentTile;

//   // Check of players are adjacent
//   if (
//     (x2 == x1) && ((y1 == y2 - 1) || (y1 == y2 + 1) || (y1 == y2)) ||
//     (y2 == y1) && ((x1 == x2 - 1) || (x1 == x2 + 1) || (x1 == x2))
//   ) {
//     console.log('Players ARE adjacent');
//     console.log('Battle about to begin');
//     console.log('--- Ending Movement.CheckforOpponent(player, opponent');
//     return true;
//     // So no we can attack!
//   } else {
//     console.log('Players NOT adjacent');
//     console.log('There will be no battle');
//     console.log('--- Ending Movement.CheckforOpponent(player, opponent');
//     return false;
//   }
// }