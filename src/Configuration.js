/* jshint esversion: 6 */
/* jshint expr: true */
/* elsint no-console: off */

export default {
  canvasWidth: 400,
  canvasHeight: 400,

  canvas: document.getElementById('gameboard'),
  context: document.getElementById('gameboard').getContext('2d'),

  dx: 40,
  dy: 40,

  gameboard: [],

  minX: 0,
  minY: 0,
  maxX: 9,
  maxY: 9,
  gameboardRows: 10,
  gameboardCols: 10,

  // Game token colours
  player0color: 'green',
  // player1Color: 'rgb(255, 182, 193)',
  player1Color: 'red',
  // player2Color: 'rgb(100, 149, 237)',
  player2Color: 'blue',
  wallColor: 'rgb(139,69,19)',
  chestColor: 'rgb(218, 165, 32)',
  grassColor: 'rgb(183, 255, 193)',
  gridColor: 'rgb(91, 192, 222)',

  minWalls: 8,
  maxWalls: 8,
<<<<<<< HEAD
  minChests: 20,
  maxChests: 20,
=======
  minChests: 4,
  maxChests: 4,
>>>>>>> 1488d22360dda87050a16af0815c8e547cb76f1d

  arrowKeys: [
    { id: 37, name: 'ArrowLeft', dx: -1, dy: 0 },
    { id: 38, name: 'ArrowUp', dx: 0, dy: -1 },
    { id: 39, name: 'ArrowRight', dx: 1, dy: 0 },
    { id: 40, name: 'ArrowDown', dx: 0, dy: 1 }
  ],

  playMode: [
    { id: 1, name: 'attack' },
    { id: 2, name: 'defend' },
    { id: 3, name: 'explore' },
    { id: 4, name: 'retreat' },
    { id: 5, name: 'examine' },
  ],

  weapons: [
    { id: 0, shortName: 'pencil', longName: 'sharp pencil', action: 'stab', target: 'in the eye', maxDamage: 10, img: '../img/pencil.png' },
    { id: 1, shortName: 'ladle', longName: 'big ladle', action: 'hit', target: 'on the head', maxDamage: 7, img: '../img/ladle.png' },
    { id: 2, shortName: 'spoon', longName: 'soup spoon', action: 'hit', target: 'on the head', maxDamage: 5, img: '../img/spoon.png' },
    { id: 3, shortName: 'mug', longName: 'coffee mug', action: 'hit', target: 'on the head', maxDamage: 8, img: '../img/coffee-mug.png' },
    { id: 4, shortName: 'corkscrew', longName: 'fancy corkscrew', action: 'poke', target: 'in the eye', maxDamage: 12, img: '../img/swiss-army-knife.png' },
    { id: 5, shortName: 'chopstick', longName: 'metal chopstick', action: 'poke', target: 'in the eye', maxDamage: 13, img: '../img/noodles.png' },
    { id: 6, shortName: 'knife & fork', longName: 'knife & fork', action: 'stab', target: 'in the ribs', maxDamage: 10, img: '../img/knife-fork.png' },
    { id: 7, shortName: 'pot', longName: 'large pot', action: 'hit', target: 'on the head', maxDamage: 12, img: '../img/cooking-pot.png' },
    { id: 8, shortName: 'sausage', longName: 'breakfast sausage', action: 'hit', target: 'in the face', maxDamage: 7, img: '../img/sausage.png' },
    { id: 9, shortName: 'egg', longName: 'rotten egg', action: 'hit', target: 'in the face', maxDamage: 8, img: '../img/big-egg.png' },
    { id: 10, shortName: 'fish', longName: 'dead fish', action: 'slap', target: 'in the face', maxDamage: 7, img: '../img/fried-fish.png' },
    { id: 11, shortName: 'jalapeño', longName: 'spicy jalapeño', action: 'poke', target: 'in the eye', maxDamage: 11, img: '../img/chili-pepper.png' },
    { id: 12, shortName: 'pineapple', longName: 'spikey pineapple', action: 'poke', target: 'in the face', maxDamage: 12, img: '../img/pineapple.png' },
    { id: 13, shortName: 'banana', longName: 'banana peel', action: 'slap', target: 'in the face', maxDamage: 9, img: '../img/banana-peel.png' }
  ],

  // In-game messages
  invalidKeypress: 'I\'m not really sure what you want me to do. Let\'s try again',
  outOfBounds: 'Edge of the world! We\'re not going to no-man\'s land',
  foundWall: 'You can\'t walk through walls yet',
  foundChest: 'You\'ve found a chest with untold riches',
  invalidAttackMode: 'We haven\'t come up with that attack mode yet',

  player1: '',
  player2: '',
  restoreChest: false,
  chest: null,
  chestArray: [],
};