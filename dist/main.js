/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Battle.js":
/*!***********************!*\
  !*** ./src/Battle.js ***!
  \***********************/
/*! exports provided: PlayerBattle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerBattle\", function() { return PlayerBattle; });\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ \"./src/Utilities.js\");\n/* eslint-disable no-console */\n\n\n\nfunction PlayerBattle(player, opponent) {\n  // console.log('+++ Starting Battle.PlayerBattle(player, opponent)');\n  console.log(player);\n  console.log(opponent);\n\n  let attackMode = prompt(`The battle lines are drawn. (A)ttack or (D)efend ${player.name}?`).toLowerCase();\n  console.log(`Battle.PlayerBattle() - Setting attack mode: ${attackMode}`);\n\n  switch (attackMode) {\n    case 'a': {\n      PlayerAttacks(player, opponent);\n      break;\n    }\n    case 'd': {\n      PlayerDefends(player, opponent);\n      break;\n    }\n    default: {\n      console.log(`Invalid battle code ${player.name}. Try again`);\n      break;\n    }\n  }\n\n  function PlayerAttacks(player, opponent) {\n    console.log('+++ Starting Battle.PlayerBattle.PlayerAttacks()');\n    let damage = _Utilities__WEBPACK_IMPORTED_MODULE_0__[\"RandomNumber\"](player.weapon.maxDamage / 2, player.weapon.maxDamage);\n    console.log(`${player.name} attacks ${opponent.name} for ${damage} damage`);\n    opponent.life -= damage;\n    console.log(`${opponent.name}'s life left: ${opponent.life}`);\n\n    // Update game status table and end turn\n    _Utilities__WEBPACK_IMPORTED_MODULE_0__[\"UpdateGameTable\"]();\n    _Utilities__WEBPACK_IMPORTED_MODULE_0__[\"EndTurn\"]();\n    console.log('--- Ending Battle.PlayerBattle.PlayerAttacks()');\n  }\n\n  function PlayerDefends(player, opponent) {\n    console.log('+++ Starting Battle.PlayerBattle.PlayerDefends()');\n    console.log(player);\n    console.log(opponent);\n    console.log('--- Ending Battle.PlayerBattle.PlayerDefends()');\n  }\n  console.log('--- Ending Battle.PlayerBattle(player, opponent)');\n}\n\n//# sourceURL=webpack:///./src/Battle.js?");

/***/ }),

/***/ "./src/Configuration.js":
/*!******************************!*\
  !*** ./src/Configuration.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* jshint esversion: 6 */\n/* jshint expr: true */\n/* elsint no-console: off */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  canvasWidth: 400,\n  canvasHeight: 400,\n\n  canvas: document.getElementById('gameboard'),\n  context: document.getElementById('gameboard').getContext('2d'),\n\n  dx: 40,\n  dy: 40,\n\n  gameboard: [],\n\n  minX: 0,\n  minY: 0,\n  maxX: 9,\n  maxY: 9,\n  gameboardRows: 10,\n  gameboardCols: 10,\n\n  // Game token colours\n  player0color: 'green',\n  // player1Color: 'rgb(255, 182, 193)',\n  player1Color: 'red',\n  // player2Color: 'rgb(100, 149, 237)',\n  player2Color: 'blue',\n  wallColor: 'rgb(139,69,19)',\n  chestColor: 'rgb(218, 165, 32)',\n  grassColor: 'rgb(183, 255, 193)',\n  gridColor: 'rgb(91, 192, 222)',\n\n  minWalls: 8,\n  maxWalls: 8,\n  minChests: 4,\n  maxChests: 4,\n\n  arrowKeys: [\n    { id: 37, name: 'ArrowLeft', dx: -1, dy: 0 },\n    { id: 38, name: 'ArrowUp', dx: 0, dy: -1 },\n    { id: 39, name: 'ArrowRight', dx: 1, dy: 0 },\n    { id: 40, name: 'ArrowDown', dx: 0, dy: 1 }\n  ],\n\n  playMode: [\n    { id: 1, name: 'attack' },\n    { id: 2, name: 'defend' },\n    { id: 3, name: 'explore' },\n    { id: 4, name: 'retreat' },\n    { id: 5, name: 'examine' },\n  ],\n\n  weapons: [\n    { id: 0, shortName: 'pencil', longName: 'sharp pencil', action: 'stab', target: 'in the eye', maxDamage: 10, img: '../img/pencil.png' },\n    { id: 1, shortName: 'ladle', longName: 'big ladle', action: 'hit', target: 'on the head', maxDamage: 7, img: '../img/ladle.png' },\n    { id: 2, shortName: 'spoon', longName: 'soup spoon', action: 'hit', target: 'on the head', maxDamage: 5, img: '../img/spoon.png' },\n    { id: 3, shortName: 'mug', longName: 'coffee mug', action: 'hit', target: 'on the head', maxDamage: 8, img: '../img/coffee-mug.png' },\n    { id: 4, shortName: 'corkscrew', longName: 'fancy corkscrew', action: 'poke', target: 'in the eye', maxDamage: 12, img: '../img/swiss-army-knife.png' },\n    { id: 5, shortName: 'chopstick', longName: 'metal chopstick', action: 'poke', target: 'in the eye', maxDamage: 13, img: '../img/noodles.png' },\n    { id: 6, shortName: 'knife & fork', longName: 'knife & fork', action: 'stab', target: 'in the ribs', maxDamage: 10, img: '../img/knife-fork.png' },\n    { id: 7, shortName: 'pot', longName: 'large pot', action: 'hit', target: 'on the head', maxDamage: 12, img: '../img/cooking-pot.png' },\n    { id: 8, shortName: 'sausage', longName: 'breakfast sausage', action: 'hit', target: 'in the face', maxDamage: 7, img: '../img/sausage.png' },\n    { id: 9, shortName: 'egg', longName: 'rotten egg', action: 'hit', target: 'in the face', maxDamage: 8, img: '../img/big-egg.png' },\n    { id: 10, shortName: 'fish', longName: 'dead fish', action: 'slap', target: 'in the face', maxDamage: 7, img: '../img/fried-fish.png' },\n    { id: 11, shortName: 'jalapeño', longName: 'spicy jalapeño', action: 'poke', target: 'in the eye', maxDamage: 11, img: '../img/chili-pepper.png' },\n    { id: 12, shortName: 'pineapple', longName: 'spikey pineapple', action: 'poke', target: 'in the face', maxDamage: 12, img: '../img/pineapple.png' },\n    { id: 13, shortName: 'banana', longName: 'banana peel', action: 'slap', target: 'in the face', maxDamage: 9, img: '../img/banana-peel.png' }\n  ],\n\n  // In-game messages\n  invalidKeypress: 'I\\'m not really sure what you want me to do. Let\\'s try again',\n  outOfBounds: 'Edge of the world! We\\'re not going to no-man\\'s land',\n  foundWall: 'You can\\'t walk through walls yet',\n  foundChest: 'You\\'ve found a chest with untold riches',\n  invalidAttackMode: 'We haven\\'t come up with that attack mode yet',\n\n  player1: '',\n  player2: '',\n  restoreChest: false,\n  chest: null,\n  chestArray: [],\n  wallArray: [],\n});\n\n//# sourceURL=webpack:///./src/Configuration.js?");

/***/ }),

/***/ "./src/Initialise.js":
/*!***************************!*\
  !*** ./src/Initialise.js ***!
  \***************************/
/*! exports provided: Initialise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Initialise\", function() { return Initialise; });\n/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Configuration */ \"./src/Configuration.js\");\n/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tokens */ \"./src/Tokens.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities */ \"./src/Utilities.js\");\n/* eslint-disable no-console */\n\n\n\n\n\n// Initialise game: canvas, gameboard, player1, player2, chests, walls\nfunction Initialise() {\n  // Define HTML canvas and contenxt\n  InitialiseCanvas();\n\n  // Define board to be used throughout game\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard = InitialiseGameboard();\n\n  // Define and locate on gameboard player 1\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1 = InitialisePlayer1();\n\n  // Define and locate on gameboard player 2\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2 = InitialisePlayer2();\n\n  // Define and locate on gameboard weapon chests\n  InitialiseChests();\n  // console.table(Configuration.chestArray);\n\n  // Define and locate on gameboard walls\n  InitialiseWalls();\n  // console.table(Configuration.wallArray);\n\n  _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"UpdateGameTable\"]();\n  // console.table(Configuration.gameboard);\n\n}\n\nfunction InitialiseCanvas() {\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboardRows * _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dx;\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboardCols * _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dy;\n}\n\nfunction InitialiseGameboard() {\n  let gameboard = [];\n  for (let column = 0; column < _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboardCols; column++) {\n    gameboard[column] = [];\n    for (let row = 0; row < _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboardRows; row++) {\n      gameboard[column][row] = null;\n    }\n  }\n  return gameboard;\n}\n\nfunction InitialisePlayer1() {\n  let player1 = new _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](1, 'Sally');\n  let [x, y] = [...player1.currentTile];\n  // Draw player1 toekn on canvas and set active\n  player1.fillToken();\n  player1.active = true;\n  // Place player1 token on canvas\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[y][x] = player1;\n\n  return player1;\n}\n\nfunction InitialisePlayer2() {\n  let player2 = new _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](2, 'Jerry');\n  let [x1, y1] = [..._Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.currentTile];\n  let [x2, y2] = [...player2.toTile];\n  // Check if player1 and player2 have collided. If so generate new player2 coords\n  while (_Utilities__WEBPACK_IMPORTED_MODULE_2__[\"TokenCollision\"](x1, y1, x2, y2)) {\n    // Player 1 and 2 have collided - set new player 2 coordinates\n    player2.currentTile = _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"SetCoords\"]();\n    player2.toTile = player2.currentTile;\n  }\n  // Draw player2 token on canvas and set inactive\n  player2.fillToken();\n  player2.active = false;\n  // Place player2 token on gameboard\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[y2][x2] = player2;\n\n  return player2;\n}\n\nfunction InitialiseChests() {\n  let numChests = _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minChests, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxChests);\n\n  for (let i = 0; i < numChests; i++) {\n    let chest = new _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"Chest\"](4, 'chest');\n    let [cx, cy] = chest.toTile;\n    // Something in the chosen location?\n    while (_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[cy][cx] != null) {\n      [cx, cy] = [\n        _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minX, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxX),\n        _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minY, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxY)];\n      chest.toTile = [cx, cy];\n    }\n    // Draw chest token on canvas\n    chest.fillToken();\n    // Place chest token on gameboard and push to chestArray\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[cy][cx] = chest;\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chestArray.push(chest);\n  }\n}\n\nfunction InitialiseWalls() {\n  let numWalls = _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minWalls, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxWalls);\n\n  for (let i = 0; i < numWalls; i++) {\n    let wall = new _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"Wall\"](3, 'wall');\n    let [wx, wy] = wall.toTile;\n    // Something in the chosen location?\n    while (_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[wy][wx] != null) {\n      [wx, wy] = [\n        _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minX, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxX),\n        _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minY, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxY)];\n      wall.toTile = [wx, wy];\n    }\n    // Draw wall token on canvas\n    wall.fillToken();\n    // Place wall token on gameboard and push to wallArray\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[wy][wx] = wall;\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wallArray.push(wall);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Initialise.js?");

/***/ }),

/***/ "./src/Play.js":
/*!*********************!*\
  !*** ./src/Play.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Play; });\n/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Configuration */ \"./src/Configuration.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities */ \"./src/Utilities.js\");\n/* harmony import */ var _Battle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Battle */ \"./src/Battle.js\");\n/* eslint-disable no-console */\n\n\n\n\n\nfunction Play(event) {\n  console.log('+++ Starting Play.Play()');\n\n  // Check valid key pressed\n  let validKey = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arrowKeys.find(key => key.id == event.keyCode);\n  if (!validKey) return;\n\n  // Set player and opponent variables\n  let player = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.active ? _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1 : _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2;\n  let opponent = (player === _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1) ? _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2 : _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1;\n  console.log(player);\n  console.log(opponent);\n\n  // Check to see if there is a chest to restore and if so, restore it\n\n  // Assign the movement differentials and set up tile locations\n  let dx = validKey.dx, dy = validKey.dy;\n  let [x1, y1] = player.fromTile;\n  player.toTile = [x1 + dx, y1 + dy];\n  let [x2, y2] = player.toTile;\n\n  // We have our target coords so make sure movement is within gameboard\n  if (x2 < 0 || x2 > 9 || y2 < 0 || y2 > 9) {\n    // Player trying to move off the board\n    alert(`${_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].outOfBounds} ${player.name}`);\n    return;\n  }\n\n  // Check what object - if any - is located at the target location\n  let toTileObject = (_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[y2][x2] instanceof Object) ? _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[y2][x2].type : null;\n\n  switch (toTileObject) {\n    case 'wall': {\n      console.log('*** Starting switch (wall)');\n      alert(`${_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foundWall} ${_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.name}...`);\n      break;\n    }\n    case 'chest': {\n      console.log('*** Starting switch (chest)');\n      // CheckForOpponent(player, opponent);\n\n      // LootChest(player.toTile);\n\n      // player.steps++;\n      break;\n    }\n    case 'player': {\n      console.log('*** Starting switch (player)');\n      break;\n    }\n    default: {\n      console.log('*** Starting switch (default)');\n      // CheckForOpponent(player, opponent);\n\n      // Move player from fromTile to toTile\n      player.clearToken();\n      player.fillToken();\n\n      // Update gameboard & player locations\n      let [x1, y1] = player.fromTile;\n      let [x2, y2] = player.toTile;\n      _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[y1][x1] = null;\n      _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameboard[y2][x2] = player;\n      player.fromTile = player.toTile;\n\n      // Increment player steps\n      player.steps++;\n\n      // Check to see if we have to restore a chest\n      console.log('*** Ending switch (default)');\n    }\n  }\n\n  // if (player.steps >= 3) { Utilities.EndTurn(); }\n\n  _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"UpdateGameTable\"]();\n\n  // console.table(Configuration.gameboard);\n  console.log('--- Ending Play.Play()');\n}\n\n// function CheckForOpponent(player, opponent) {\n//   // console.log('+++ Starting Movement.CheckForOpponent(player, opponent)');\n//   let [x1, y1] = player.toTile;\n//   let [x2, y2] = opponent.currentTile;\n\n//   // Check of players are adjacent\n//   if (\n//     (x2 == x1) && ((y1 == y2 - 1) || (y1 == y2 + 1) || (y1 == y2)) ||\n//     (y2 == y1) && ((x1 == x2 - 1) || (x1 == x2 + 1) || (x1 == x2))\n//   ) {\n//     return true;\n//     // So no we can attack!\n//   } else {\n//     console.log('Players NOT adjacent');\n//     // console.log('--- Ending Movement.CheckforOpponent(player, opponent');\n//     return false;\n//   }\n// }\n\n// function RestoreChest() {\n//   console.log('+++ Starting Play.RestoreChest()');\n//   if (Configuration.restoreChest) {\n//     console.log('Chest needs to be restored');\n//   } else {\n//     console.log('No chest to restore. Continue with current action.');\n//   }\n//   console.log('--- Ending Play.RestoreChest()');\n// }\n\n\n\n//# sourceURL=webpack:///./src/Play.js?");

/***/ }),

/***/ "./src/Tokens.js":
/*!***********************!*\
  !*** ./src/Tokens.js ***!
  \***********************/
/*! exports provided: default, Player, Chest, Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Token; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chest\", function() { return Chest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wall\", function() { return Wall; });\n/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Configuration */ \"./src/Configuration.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities */ \"./src/Utilities.js\");\n/* eslint-disable no-console */\n\n\n\n\n// Generic game token\nclass Token {\n  constructor(id, type) {\n    this.canvas = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas;\n    this.context = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context;\n    this.id = id;\n    this.type = type;\n    this.color = this.assignColor();\n    this.currentTile = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"SetCoords\"]();\n    this.fromTile = this.currentTile;\n    this.toTile = this.currentTile;\n    this.width = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dx;\n    this.height = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dy;\n    this.active = false;\n  }\n\n  assignColor() {\n    // console.log('Starting Tokens.Token.assignColor()');\n    switch (this.id) {\n      case 0: { return _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player0Color; }\n      case 1: { return _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1Color; }\n      case 2: { return _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2Color; }\n      case 3: { return _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wallColor; }\n      case 4: { return _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chestColor; }\n      default: { return _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gridColor; }\n    }\n  }\n\n  clearToken() {\n    let [x, y] = this.fromTile;\n\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.clearRect(\n      x * this.width,\n      y * this.height,\n      this.width,\n      this.height\n    );\n  }\n\n  fillToken() {\n    let [x, y] = this.toTile;\n\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.fillStyle = this.color;\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.fillRect(\n      x * this.width,\n      y * this.height,\n      this.width,\n      this.height\n    );\n  }\n}\n\n// Player token\nclass Player extends Token {\n  constructor(id, name) {\n    super(id);\n    this.name = name;\n    this.type = 'player';\n    this.weapon = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weapons[0];\n    this.life = 100;\n    this.steps = 0;\n  }\n}\n\n// Chest token\nclass Chest extends Token {\n  constructor(id) {\n    super(id);\n    this.type = 'chest';\n    this.weapon = _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weapons[this.pickRandomWeapon(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weapons)];\n  }\n\n  fillChestToken() {\n    console.log('+++ Starting Chest.fillChestToken()');\n    let [x, y] = this.currentTile;\n\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.fillStyle = this.color;\n    _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.fillRect(\n      x * this.width,\n      y * this.height,\n      this.width,\n      this.height\n    );\n    console.log('--- Ending Chest.fillChestToken()');\n  }\n  // Select random weapon from (Configuration) weapons list\n  pickRandomWeapon(weapons) {\n    // console.log('Starting Utilities.PickRandomChest');\n    let chest;\n    let count = 0;\n    for (let weapon in weapons)\n      if (Math.random() < 1 / ++count) { chest = weapon; }\n\n    return chest;\n  }\n}\n\n// Wall token\nclass Wall extends Token {\n  constructor(id) {\n    super(id);\n    this.type = 'wall';\n  }\n}\n\n//# sourceURL=webpack:///./src/Tokens.js?");

/***/ }),

/***/ "./src/Utilities.js":
/*!**************************!*\
  !*** ./src/Utilities.js ***!
  \**************************/
/*! exports provided: RandomNumber, TokenCollision, SetCoords, NewGame, EndTurn, UpdateGameTable, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RandomNumber\", function() { return RandomNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TokenCollision\", function() { return TokenCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetCoords\", function() { return SetCoords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewGame\", function() { return NewGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EndTurn\", function() { return EndTurn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpdateGameTable\", function() { return UpdateGameTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Configuration */ \"./src/Configuration.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities */ \"./src/Utilities.js\");\n/* eslint-disable no-console */\n/* global $ */\n\n\n\n\n// Generate a random number between min and max\nfunction RandomNumber(min, max) {\n  if (max < min) { [min, max] = [max, min]; }\n  else if (min == max) { return min; }\n  min = Math.ceil(min);\n  max = ~~(max);\n\n  return ~~(Math.random() * (max - min + 1) + min);\n}\n\n// During initialisation check that one token does not overwrite another token\nfunction TokenCollision(x1, y1, x2, y2) {\n  // console.log('+++ Starting Utiltiies.TokenCollision()');\n  let collision = (\n    ((x2 == x1) && (y2 == y1)) ||\n    (x2 == x1) && ((y2 == y1 + 1 || y2 == y1 - 1)) ||\n    (y2 == y1) && ((x2 == x1 + 1) || (x2 == x1 - 1))\n  );\n  // console.log('--- Starting Utiltiies.TokenCollision()');\n  return collision;\n}\n\n// During intialisation set coordinates\nfunction SetCoords() {\n  // console.log('Starting Tokens.Token.initialiseCoordinates()');\n  let x = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minX, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxX);\n  let y = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"RandomNumber\"](_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minY, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxY);\n\n  return [x, y];\n}\n\n// Start a new game\nfunction NewGame() {\n  // console.log('+++ Starting Utilities.NewGame()');\n  location.reload();\n  // console.log('--- Ending Utilities.NewGame()');\n}\n\n// End current player's turn\nfunction EndTurn() {\n  // console.log('+++ Starting Utilities.EndTurn()');\n  // Get the current class values from index.html\n  let class1 = $('#player1').attr('class');\n  let class2 = $('#player2').attr('class');\n\n  // Remove current classes from table rows\n  $('tr').removeClass();\n\n  // Now add the swapped classes back\n  [class1, class2] = [class2, class1];\n  $('#player1').addClass(class1);\n  $('#player2').addClass(class2);\n\n  // Clean up and update game status table\n  // Swap the active player flag on player1 and player2\n  [_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.active, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.active] =\n    [_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.active, _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.active];\n\n  // Reset steps taken\n  _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.active ? _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.steps = 0 : _Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.steps = 0;\n\n  // Update game table\n  UpdateGameTable();\n\n  // console.log('--- Ending Utilities.EndTurn()');\n}\n\n// Update game table details\nfunction UpdateGameTable() {\n  // console.log('+++ Starting Utilities.UpdateGameTable()');\n\n  $('#player1-name').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.name);\n  $('#player1-steps').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.steps);\n  $('#player1-weapon').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.weapon.shortName);\n  $('#player1-maxdamage').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.weapon.maxDamage);\n  $('#player1-life').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1.life);\n\n  $('#player2-name').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.name);\n  $('#player2-steps').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.steps);\n  $('#player2-weapon').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.weapon.shortName);\n  $('#player2-maxdamage').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.weapon.maxDamage);\n  $('#player2-life').text(_Configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2.life);\n\n  // console.log('--- Ending Utilities.UpdateGameTable()');\n}\n\n// Check if object is empty\nfunction isEmpty(obj) {\n  for (var key in obj) {\n    if (obj.hasOwnProperty(key))\n      return false;\n  }\n  return true;\n}\n\n//# sourceURL=webpack:///./src/Utilities.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Initialise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialise */ \"./src/Initialise.js\");\n/* harmony import */ var _Play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Play */ \"./src/Play.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities */ \"./src/Utilities.js\");\n/* eslint-disable no-console */\n/* global $ */\n\n\n\n\n\nconsole.log('+++ Starting game initialisation (index.js)');\nObject(_Initialise__WEBPACK_IMPORTED_MODULE_0__[\"Initialise\"])();\nconsole.log('+++ Game initialisation complete (index.js)');\n\n// Game movement\n$('body').on('keydown', (event) => Object(_Play__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event));\n// New game button clicked\n$('#new-game').on('click', () => _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"NewGame\"]());\n// End turn button clicked\n$('#end-turn').on('click', () => _Utilities__WEBPACK_IMPORTED_MODULE_2__[\"EndTurn\"]());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });