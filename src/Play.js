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

<<<<<<< HEAD
  // Assign the movement
  let dx = validKey.dx, dy = validKey.dy;

  // Assign player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  // let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;
=======
  // Set player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  console.log('player:');
  console.log(player);
  let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;
  console.log('opponent:');
  console.log(opponent);
>>>>>>> 1488d22360dda87050a16af0815c8e547cb76f1d

  // Assign the movement differentials and set up tile locations
  let dx = validKey.dx, dy = validKey.dy;
  let [x1, y1] = player.currentTile;
  player.toTile = [x1 + dx, y1 + dy];
  let [x2, y2] = player.toTile;

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
<<<<<<< HEAD
      console.log('*** Starting switch (chest)');
      if (Configuration.restoreChest) RestoreChest(); 
      Configuration.chest = Configuration.gameboard[y2][x2];
      LootChest(player, Configuration.chest);
      // if (Utilities.CheckForOpponent(player, opponent)) { Battle(player, opponent); }
=======
      console.log('*** Starting switch Movement.Movement.toTileType = chest');
      LootChest(x2, y2);

      Configuration.gameboard[y1][x1] = null;
      Configuration.gameboard[y2][x2] = player;
>>>>>>> 1488d22360dda87050a16af0815c8e547cb76f1d

      player.steps++;
      break;
    }
    case 'player': {
<<<<<<< HEAD
      console.log('*** Starting switch (player)');
      // RestoreChest();
      // Battle(player, opponent);
      break;
    }
    default: {
      console.log('*** Starting Play.switch (default)');
      if (Configuration.restoreChest) RestoreChest();
      // RestoreChest();
      // Move player from fromTile to toTile
      player.clearToken();
      player.fillToken();

      // Update gameboard & player locations
      let [x1, y1] = player.fromTile;
      let [x2, y2] = player.toTile;
=======
      console.log('*** Starting switch Movement.Movement.toTileType = player');
      // PlayerBattle(player, opponent);
      break;
    }
    default: {
      console.log('*** Starting switch Movement.Movement.toTileType (default)');
      // Move player to target
      player.moveToken();

      // Remove player from original position on gameboard
>>>>>>> 1488d22360dda87050a16af0815c8e547cb76f1d
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
<<<<<<< HEAD
    }
      // Check if player and opponent adjacent and commence battle if so
      // if (Utilities.CheckForOpponent(player, opponent)) { 
      //   Battle(player, opponent); 
      //   [player, opponent] = [opponent, player];
      // }
  }

  console.log('--- Ending Play.switch(toTileObject)');

  // if (player.steps >= 3) { Utilities.EndTurn(); }
  Utilities.UpdateGameTable();
  // console.table(Configuration.gameboard);

}

export function Battle(player, opponent) {
  console.log('+++ Starting Battle(player, opponent)');

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
    console.log('+++ Starting Battle.PlayerAttacks()');
    let damage = Utilities.RandomNumber(player.weapon.maxDamage / 2, player.weapon.maxDamage);
    console.log(`${player.name} attacks ${opponent.name} for ${damage} damage`);
    opponent.life -= damage;
    console.log(`${opponent.name}'s life left: ${opponent.life}`);

    // Update game status table and end turn
    Utilities.UpdateGameTable();
    Utilities.EndTurn();
    console.log('--- Ending Battle.PlayerAttacks()');
  }

  function Defend(player, opponent) {
    console.log('+++ Starting Battle.Defend()');
    let damage = Utilities.RandomNumber(player.weapon.maxDamage / 4, player.weapon.maxDamage / 2);
    console.log(`${player.name} defends against ${opponent.name} for ${damage} damage`);
    player.life -= damage;
    console.log(`${player.name}'s life left: ${player.life}`);

    // Update game status table and end turn
    Utilities.UpdateGameTable();
    Utilities.EndTurn();
    console.log('--- Ending Battle.Defend()');
  }
  console.log('--- Ending Battle(player, opponent)');
}

export function LootChest(player, chest) {
  console.log('+++ Starting LootChest.LootChest(player)');

  // Swap player and chest weapons
  [chest.weapon, player.weapon] = [player.weapon, chest.weapon];

  // Player has moved to set fromTile to null
  let [x1, y1] = [...player.fromTile];
  Configuration.gameboard[y1][x1] = null;

  // Set flag to restore chest to it's original location when player moves
  Configuration.restoreChest = true;

  // Move player to chest tile
  player.clearToken();
  player.fillToken();

  // Set fromTile to new tile (toTile)
  player.fromTile = player.toTile;

  // Move player to chest position
  console.log('--- Ending LootChest.LootChest(player)');
}

export function RestoreChest() {
  console.log('+++ Starting Play.RestoreChest()');
  // Get the chest coords
  let [x, y] = [Configuration.chest.toTile];
  Configuration.chest.fillToken();
  console.log('--- Ending Play.RestoreChest()');
=======

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
>>>>>>> 1488d22360dda87050a16af0815c8e547cb76f1d
}