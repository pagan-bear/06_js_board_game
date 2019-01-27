/* eslint-disable no-console */

import Configuration from './Configuration';
import * as Tokens from './Tokens';
import * as Utilities from './Utilities';

// Initialise game: canvas, gameboard, player1, player2, chests, walls
export function Initialise() {
  // Define HTML canvas and contenxt
  InitialiseCanvas();

  // Define board to be used throughout game
  Configuration.gameboard = InitialiseGameboard();

  // Define and locate on gameboard player 1
  Configuration.player1 = InitialisePlayer1();

  // Define and locate on gameboard player 2
  Configuration.player2 = InitialisePlayer2();

  // Define and locate on gameboard weapon chests
  InitialiseChests();
  // console.table(Configuration.chestArray);

  // Define and locate on gameboard walls
  InitialiseWalls();
  // console.table(Configuration.wallArray);

  Utilities.UpdateGameTable();
  // console.table(Configuration.gameboard);

}

function InitialiseCanvas() {
  Configuration.canvas.width = Configuration.gameboardRows * Configuration.dx;
  Configuration.canvas.height = Configuration.gameboardCols * Configuration.dy;
}

function InitialiseGameboard() {
  let gameboard = [];
  for (let column = 0; column < Configuration.gameboardCols; column++) {
    gameboard[column] = [];
    for (let row = 0; row < Configuration.gameboardRows; row++) {
      gameboard[column][row] = null;
    }
  }
  return gameboard;
}

function InitialisePlayer1() {
  let player1 = new Tokens.Player(1, 'Sally');
  let [x, y] = [...player1.currentTile];
  // Draw player1 toekn on canvas and set active
  player1.fillToken();
  player1.active = true;
  // Place player1 token on canvas
  Configuration.gameboard[y][x] = player1;

  return player1;
}

function InitialisePlayer2() {
  let player2 = new Tokens.Player(2, 'Jerry');
  let [x1, y1] = [...Configuration.player1.currentTile];
  let [x2, y2] = [...player2.toTile];
  // Check if player1 and player2 have collided. If so generate new player2 coords
  while (Utilities.TokenCollision(x1, y1, x2, y2)) {
    // Player 1 and 2 have collided - set new player 2 coordinates
    player2.currentTile = Utilities.SetCoords();
    player2.toTile = player2.currentTile;
  }
  // Draw player2 token on canvas and set inactive
  player2.fillToken();
  player2.active = false;
  // Place player2 token on gameboard
  Configuration.gameboard[y2][x2] = player2;

  return player2;
}

function InitialiseChests() {
  let numChests = Utilities.RandomNumber(Configuration.minChests, Configuration.maxChests);

  for (let i = 0; i < numChests; i++) {
    let chest = new Tokens.Chest(4, 'chest');
    let [cx, cy] = chest.toTile;
    // Something in the chosen location?
    while (Configuration.gameboard[cy][cx] != null) {
      [cx, cy] = [
        Utilities.RandomNumber(Configuration.minX, Configuration.maxX),
        Utilities.RandomNumber(Configuration.minY, Configuration.maxY)];
      chest.toTile = [cx, cy];
    }
    // Draw chest token on canvas
    chest.fillToken();
    // Place chest token on gameboard and push to chestArray
    Configuration.gameboard[cy][cx] = chest;
    Configuration.chestArray.push(chest);
  }
}

function InitialiseWalls() {
  let numWalls = Utilities.RandomNumber(Configuration.minWalls, Configuration.maxWalls);

  for (let i = 0; i < numWalls; i++) {
    let wall = new Tokens.Wall(3, 'wall');
    let [wx, wy] = wall.toTile;
    // Something in the chosen location?
    while (Configuration.gameboard[wy][wx] != null) {
      [wx, wy] = [
        Utilities.RandomNumber(Configuration.minX, Configuration.maxX),
        Utilities.RandomNumber(Configuration.minY, Configuration.maxY)];
      wall.toTile = [wx, wy];
    }
    // Draw wall token on canvas
    wall.fillToken();
    // Place wall token on gameboard and push to wallArray
    Configuration.gameboard[wy][wx] = wall;
    Configuration.wallArray.push(wall);
  }
}
