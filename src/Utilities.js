/* eslint-disable no-console */
/* global $ */

import Configuration from './Configuration';
import * as Utilities from './Utilities';

// Check if player and opponent are adjacent
export function CheckForOpponent(player, opponent) {
  console.log('+++ Starting Movement.CheckForOpponent(player, opponent)');
  let [x1, y1] = player.toTile;
  let [x2, y2] = opponent.currentTile;

  // Check of players are adjacent
  if (
    (x2 == x1) && ((y1 == y2 - 1) || (y1 == y2 + 1) || (y1 == y2)) ||
    (y2 == y1) && ((x1 == x2 - 1) || (x1 == x2 + 1) || (x1 == x2))
  ) {
    console.log('Players ARE adjacent');
    console.log('Battle about to begin');
    console.log('--- Ending Movement.CheckforOpponent(player, opponent');
    return true;
    // So no we can attack!
  } else {
    console.log('Players NOT adjacent');
    console.log('There will be no battle');
    console.log('--- Ending Movement.CheckforOpponent(player, opponent');
    return false;
  }
}

// Generate a random number between min and max
export function RandomNumber(min, max) {
  if (max < min) { [min, max] = [max, min]; }
  else if (min == max) { return min; }
  min = Math.ceil(min);
  max = ~~(max);

  return ~~(Math.random() * (max - min + 1) + min);
}

// During initialisation check that one token does not overwrite another token
export function TokenCollision(x1, y1, x2, y2) {
  // console.log('+++ Starting Utiltiies.TokenCollision()');
  let collision = (
    ((x2 == x1) && (y2 == y1)) ||
    (x2 == x1) && ((y2 == y1 + 1 || y2 == y1 - 1)) ||
    (y2 == y1) && ((x2 == x1 + 1) || (x2 == x1 - 1))
  );
  // console.log('--- Starting Utiltiies.TokenCollision()');
  return collision;
}

// During intialisation set coordinates
export function SetCoords() {
  // console.log('Starting Tokens.Token.initialiseCoordinates()');
  let x = Utilities.RandomNumber(Configuration.minX, Configuration.maxX);
  let y = Utilities.RandomNumber(Configuration.minY, Configuration.maxY);

  return [x, y];
}

// Start a new game
export function NewGame() {
  // console.log('+++ Starting Utilities.NewGame()');
  location.reload();
  // console.log('--- Ending Utilities.NewGame()');
}

// End current player's turn
export function EndTurn() {
  // console.log('+++ Starting Utilities.EndTurn()');
  // Get the current class values from index.html
  let class1 = $('#player1').attr('class');
  let class2 = $('#player2').attr('class');

  // Remove current classes from table rows
  $('tr').removeClass();

  // Now add the swapped classes back
  [class1, class2] = [class2, class1];
  $('#player1').addClass(class1);
  $('#player2').addClass(class2);

  // Clean up and update game status table
  // Swap the active player flag on player1 and player2
  [Configuration.player1.active, Configuration.player2.active] =
    [Configuration.player2.active, Configuration.player1.active];

  // Reset steps taken
  Configuration.player1.active ? Configuration.player1.steps = 0 : Configuration.player2.steps = 0;

  // Update game table
  UpdateGameTable();

  // console.log('--- Ending Utilities.EndTurn()');
}

// Update game table details
export function UpdateGameTable() {
  // console.log('+++ Starting Utilities.UpdateGameTable()');

  $('#player1-name').text(Configuration.player1.name);
  $('#player1-steps').text(Configuration.player1.steps);
  $('#player1-weapon').text(Configuration.player1.weapon.shortName);
  $('#player1-maxdamage').text(Configuration.player1.weapon.maxDamage);
  $('#player1-life').text(Configuration.player1.life);

  $('#player2-name').text(Configuration.player2.name);
  $('#player2-steps').text(Configuration.player2.steps);
  $('#player2-weapon').text(Configuration.player2.weapon.shortName);
  $('#player2-maxdamage').text(Configuration.player2.weapon.maxDamage);
  $('#player2-life').text(Configuration.player2.life);

  // console.log('--- Ending Utilities.UpdateGameTable()');
}

// Check if object is empty
export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}