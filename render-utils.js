export function renderCard(booger) {
    const gameEl = document.createElement('a');
    // gameEl.href = `./`
    const nameEl = document.createElement('p');
    nameEl.textContent = booger.name;
    nameEl.classList.add('game-name');

    const imgEl = document.createElement('img');
    imgEl.src = booger.img;

    gameEl.append(nameEl, imgEl);

    return gameEl;

}