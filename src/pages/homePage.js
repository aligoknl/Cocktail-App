import { getDetail } from './detailedPage.js';

export function renderResults(drinks) {
    const list = document.getElementById('resultsList');
    list.innerHTML = '';
    list.classList.remove('resultOfCocktail');
    list.classList.remove('resultOfCocktailNonAlcohol');
    list.classList.add('resultsList');

    drinks.forEach((drink) => {
        const cocktail = document.createElement('li');
        list.appendChild(cocktail);

        const images = document.createElement('img');
        images.src = drink.strDrinkThumb;
        images.alt = drink.strDrink;
        images.classList.add('images');
        cocktail.appendChild(images);
        images.addEventListener('click', getDetail);

        const drinkName = document.createElement('p');
        drinkName.textContent = drink.strDrink;
        cocktail.appendChild(drinkName);

        const idDrink = drink.idDrink;
        images.setAttribute('data-id', idDrink);
    });
}
