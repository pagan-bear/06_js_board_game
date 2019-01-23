/* jshint esversion: 6 */
/* jshint expr: true */
/* elsint no-console: off */

import Configuration from './Configuration';
import * as Tokens from './Tokens';
import * as Utilities from './Utilities';

// Initialise game canvas
export function Initialise() {
  // console.log('+++ Starting Initialise.Initialise()');
  // Define HTML canvas and contenxt
  InitialiseCanvas();
  // Define board to be used throughout game
  Configuration.gameboard = InitialiseGameboard();

  // Define and locate on gameboard player 1
  Configuration.player1 = InitialisePlayer1();

  // Define and locate on gameboard player 2
  Configuration.player2 = InitialisePlayer2();

  Utilities.UpdateGameTable();

  // Define and locate on gameboard weapon chests
  Configuration.chestArray = InitialiseChests();

  // Define and locate on gameboard walls
  // InitialiseWalls();

  // console.log('--- Ending Initialise.Initialise()');
}

function InitialiseCanvas() {
  // console.log('+++ Starting Initialise.InitialiseCanvas()');
  Configuration.canvas.width = Configuration.gameboardRows * Configuration.dx;
  Configuration.canvas.height = Configuration.gameboardCols * Configuration.dy;
  // console.log('--- Starting Initialise.InitialiseCanvas()');
}

function InitialiseGameboard() {
  // console.log('+++ Starting Initialise.InitialiseGameboard()');
  let gameboard = [];
  for (let column = 0; column < Configuration.gameboardCols; column++) {
    gameboard[column] = [];
    for (let row = 0; row < Configuration.gameboardRows; row++) {
      gameboard[column][row] = null;
    }
  }
  // console.log('--- Ending Initialise.InitialiseGameboard()');
  return gameboard;
}

function InitialisePlayer1() {
  // console.log('+++ Starting Initialise.InitialisePlayer1()');
  let player1 = new Tokens.Player(1, 'Sally');

  PlaceTokenOnGameboard(player1, true);
  // console.log('--- Ending Initialise.InitialisePlayer1()');
  return player1;
}

function InitialisePlayer2() {
  // console.log('+++ Starting Initialise.InitialisePlayer2()');
  let player2 = new Tokens.Player(2, 'Jerry');
  let [x1, y1] = Configuration.player1.tokenTile;
  let [x2, y2] = player2.tokenTile;

  // player1 and player2 have collided so generate new player2 coords
  while (Utilities.TokenCollision(x1, y1, x2, y2)) {
    player2.tokenTile = Utilities.SetCoords();
    [x2, y2] = player2.tokeTile;
    player2.fromTile = player2.tokenTile;
    player2.toTile = player2.tokenTile;
    player2.clearToken();
    player2.fillToken();
  }

  PlaceTokenOnGameboard(player2, false);

  // console.log('--- Ending Initialise.InitialisePlayer2()');
  return player2;
}

function PlaceTokenOnGameboard(token, active) {
  // console.log('+++ Starting Initialise.PlaceTokenOnGameboard()');
  let [px, py] = token.tokenTile;
  Configuration.gameboard[py][px] = token;
  token.active = active;
  token.fillToken();

  // console.log('--- Ending Initialise.PlaceTokenOnGameboard()');
}

function InitialiseChests() {
  // console.log('Starting Initialise.IntialiseChests()');
  let chestArray = [];
  let numChests = Utilities.RandomNumber(Configuration.minChests, Configuration.maxChests);

  for (let i = 0; i < numChests; i++) {
    let chest = new Tokens.Chest(4, 'chest');
    let [cx, cy] = chest.tokenTile;
    // Something in the chosen location?
    while (Configuration.gameboard[cy][cx] != null) {
      [cx, cy] = [
        Utilities.RandomNumber(Configuration.minX, Configuration.maxX),
        Utilities.RandomNumber(Configuration.minY, Configuration.maxY)];
      chest.tokenTile = [cx, cy];
    }
    chest.fillToken();
    Configuration.gameboard[cy][cx] = chest;
    chestArray.push(chest);
  }
  return chestArray;
}

function InitialiseWalls() {
  // console.log('Starting Initialise.InitialiseWalls()');
  let numWalls = Utilities.RandomNumber(Configuration.minWalls, Configuration.maxWalls);

  for (let i = 0; i < numWalls; i++) {
    let wall = new Tokens.Wall(3, 'wall');
    let [wx, wy] = wall.tokenTile;
    // Something in the chosen location?
    while (Configuration.gameboard[wy][wx] != null) {
      [wx, wy] = [
        Utilities.RandomNumber(Configuration.minX, Configuration.maxX),
        Utilities.RandomNumber(Configuration.minY, Configuration.maxY)];
      wall.toTile = [wx, wy];
    }
    wall.fillToken();
    Configuration.gameboard[wy][wx] = wall;
    // wallArray.push(wall);
  }
}