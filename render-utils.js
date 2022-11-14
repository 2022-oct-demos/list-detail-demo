export function renderCard(booger) {
    const gameEl = document.createElement('a');
    gameEl.href = `./game/?id=${booger.id}`;
    gameEl.classList.add('game-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = booger.name;
    nameEl.classList.add('game-name');

    const imgEl = document.createElement('img');
    imgEl.src = booger.img;

    gameEl.append(nameEl, imgEl);

    return gameEl;

}

export function renderGameDetail(gameObject){
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const yearEl = document.createElement('p');
    const typeEl = document.createElement('p');

    nameEl.textContent = gameObject.name;
    imgEl.src = gameObject.img;
    yearEl.textContent = gameObject.year_created;
    typeEl.textContent = gameObject.type;

    div.append(nameEl, imgEl, yearEl, typeEl);
    return div;
}