/* jshint esversion: 6 */
/* jshint expr: true */
/* elsint no-console: off */

import Configuration from './Configuration';
import * as Utilities from './Utilities';

// Generic game token
export default class Token {
  constructor(id, type) {
    this.canvas = Configuration.canvas;
    this.context = Configuration.context;
    this.id = id;
    this.type = type;
    this.color = this.assignColor();
    this.tokenTile = this.initialCoordinates();
    this.width = Configuration.dx;
    this.height = Configuration.dy;
    this.active = false;
  }

  assignColor() {
    // console.log('Starting Tokens.Token.assignColor()');
    switch (this.id) {
      case 0: { return Configuration.player0Color; }
      case 1: { return Configuration.player1Color; }
      case 2: { return Configuration.player2Color; }
      case 3: { return Configuration.wallColor; }
      case 4: { return Configuration.chestColor; }
      default: { return Configuration.gridColor; }
    }
  }

  initialCoordinates() {
    // console.log('Starting Tokens.Token.initialCoordinates()');
    let x = Utilities.RandomNumber(Configuration.minX, Configuration.maxX);
    let y = Utilities.RandomNumber(Configuration.minY, Configuration.maxY);

    return [x, y];
  }

  clearToken(fromTile) {
    let [x, y] = fromTile;

    Configuration.context.clearRect(
      x * this.width,
      y * this.height,
      this.width,
      this.height
    );
  }

  fillToken(toTile) {
    // console.log(`+++ Starting Tokens.Token.fillToken(${this.type})`);
    let [x, y] = this.toTile;

    Configuration.context.fillStyle = this.color;
    Configuration.context.fillRect(
      x * this.width,
      y * this.height,
      this.width,
      this.height
    );
    // console.log(`--- Ending Tokens.Token.fillToken(${this.type})`);
  }
}

// Player token
export class Player extends Token {
  constructor(id, name) {
    super(id);
    this.name = name;
    this.type = 'player';
    this.fromTile = this.tokenTile;
    this.toTile = this.tokenTile;
    this.weapon = Configuration.weapons[0];
    this.life = 100;
    this.steps = 0;
  }
}

// Chest token
export class Chest extends Token {
  constructor(id) {
    super(id);
    this.type = 'chest';
    this.weapon = Configuration.weapons[this.pickRandomWeapon(Configuration.weapons)];
  }

  fillChestToken() {
    console.log('+++ Starting Chest.fillChestToken()');
    let [x, y] = this.currentTile;

    Configuration.context.fillStyle = this.color;
    Configuration.context.fillRect(
      x * this.width,
      y * this.height,
      this.width,
      this.height
    );
    console.log('--- Ending Chest.fillChestToken()');
  }
  // Select random weapon from (Configuration) weapons list
  pickRandomWeapon(weapons) {
    // console.log('Starting Utilities.PickRandomChest');
    let chest;
    let count = 0;
    for (let weapon in weapons)
      if (Math.random() < 1 / ++count) { chest = weapon; }

    return chest;
  }
}

// Wall token
export class Wall extends Token {
  constructor(id) {
    super(id);
    this.type = 'wall';
  }
}