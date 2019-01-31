/* eslint-disable no-console */

import * as Utilities from './Utilities';

export function PlayerBattle(player, opponent) {
  console.log('+++ Starting Battle.PlayerBattle(player, opponent)');

  let attackMode = prompt(`The battle lines are drawn. (A)ttack or (D)efend ${player.name}?`).toLowerCase();
  console.log(`Battle.PlayerBattle() - Setting attack mode: ${attackMode}`);

  switch (attackMode) {
    case 'a': {
      PlayerAttack(player, opponent);
      break;
    }
    case 'd': {
      PlayerDefend(player, opponent);
      break;
    }
    default: {
      console.log(`Invalid battle code ${player.name}. Try again`);
      break;
    }
  }

  function PlayerAttack(player, opponent) {
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

  function PlayerDefend(player, opponent) {
    console.log('+++ Starting Battle.PlayerBattle.PlayerDefends()');
    console.log(player);
    console.log(opponent);
    console.log('--- Ending Battle.PlayerBattle.PlayerDefends()');
  }
  console.log('--- Ending Battle.PlayerBattle(player, opponent)');
}