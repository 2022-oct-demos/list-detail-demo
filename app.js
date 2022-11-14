/* Imports */

import { getAllGames } from './fetch-utils.js';
import { renderCard } from './render-utils.js';

/* Get DOM Elements */
const gamesContainer = document.querySelector('#games-container');

/* State */

/* Events */
window.addEventListener('load', async () => {

    const games = await getAllGames();
    console.log('games', games);
    // DISPLAY => loop! render! append!
    for (let game of games) {
        console.log('game', game);
        const gameEl = renderCard(game);
        gamesContainer.append(gameEl);
    }

});


/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
