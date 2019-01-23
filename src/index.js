/* eslint-disable no-console */
/* jshint esversion: 6*/
/* global $ */

import { Initialise } from './Initialise';
import Play from './Play';
import * as Utilities from './Utilities';

Initialise();

// Game movement
$('body').on('keydown', (event) => Play(event));
// New game button clicked
$('#new-game').on('click', () => Utilities.NewGame());
// End turn button clicked
$('#end-turn').on('click', () => Utilities.EndTurn());