/* jshint esversion: 6 */
/* jshint expr: true */
/* elsint no-console: off */

import Configuration from './Configuration';

export default function GamePlay(event) {
  console.log('+++ Starting GamePlay.GamePlay(event)');
  event.preventDefault();
  // Check key pressed is valid key
  let validKey = Configuration.arrowKeys.find(key => key.id == event.keyCode);
  if (validKey == undefined) return;

  // Set player and opponent variables
  let player = Configuration.player1.active ? Configuration.player1 : Configuration.player2;
  // let opponent = (player === Configuration.player1) ? Configuration.player2 : Configuration.player1;

  // Check movement is not outside gameboard
  let [x1, y1] = player.currentTile;
  let [x2, y2] = [x1 + validKey.dx, y1 + validKey.dy];

  // Player trying to move off the board so alert and wait for next keypress
  if (x2 < 0 || x2 > 9 || y2 < 0 || y2 > 9) {
    alert(`${Configuration.outOfBounds} ${player.name}`);
    return;
  }

  // Assign player dx and dy values
  player.dx = validKey.dx;
  player.dy = validKey.dy;

  // let [x, y] = player.currentTile;
  // x += player.dx;
  // y += player.dy;

  // Check what, if anything, located at target tile (toTile)
  // Check what toTile type is and take appropriate action
  let toTileType = (Configuration.gameboard[y2][x2] instanceof Object) ? Configuration.gameboard[y2][x2].type : null;
  console.log(`toTileType: ${toTileType}`);

  if (toTileType == 'chest') {
    Configuration.chest = Configuration.gameboard[y2][x2];
    console.log(Configuration.chest);
    Configuration.gameboard[y2][x2] = null;
  }
  else {
    Configuration.chest = null;
  }

  player.toTile = [x2, y2];
  player.clearToken();
  player.fillToken();
  player.currentTile = [x2, y2];

  // Update player current position

  // Update in-memory gameboard
  // Configuration.gameboard[y1][x1] = null;
  Configuration.gameboard[x2][y2] = player;

  // console.log(Configuration.chest);

  if (Configuration.chest != null && Configuration.chest.currentTile != player.toTile) {
    console.log('+++ Starting if (Configuration.chest) ... Configuration.chest.fillToken()');
    console.log(Configuration.chest.toTile);
    console.log(player.toTile);
    // Player has moved from a chest so need to repaint the tile
    let [cx, cy] = Configuration.chest.toTile;
    Configuration.gameboard[cy][cx] = Configuration.chest;
    Configuration.chest.fillToken();
  }
  console.log('--- Ending GamePlay.GamePlay(event)');
}