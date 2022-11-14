import { getGame } from '../fetch-utils.js';
import { renderGameDetail } from '../render-utils.js';

const gameDetailContainer = document.getElementById('game-detail-container');


window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    console.log(window.location.search, '.search');
    const id = params.get('id');

    console.log(id);

    const game = await getGame(id);

    const gameDetailEl = renderGameDetail(game);
    gameDetailContainer.append(gameDetailEl);
});