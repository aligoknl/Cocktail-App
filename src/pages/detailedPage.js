import { fetchCocktail } from '../fetchers.js';
import { displayError } from '../views/errorView.js';
import { TOTAL_INGREDIENTS } from '../constant.js';

export async function getDetail() {
    const list = document.getElementById('resultsList');
    list.innerHTML = '';
    list.classList.remove('resultsList');

    const choosenCocktail = this.dataset.id;
    const urlCurrentCocktail = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${choosenCocktail}`;

    try {
        const data = await fetchCocktail(urlCurrentCocktail);
        const dataDrink = data.drinks;

        dataDrink.forEach((drink) => {
            const cocktail = document.createElement('li');
            list.appendChild(cocktail);

            const drinkName = document.createElement('h2');
            drinkName.textContent = drink.strDrink;
            cocktail.appendChild(drinkName);

            for (let i = 1; i < TOTAL_INGREDIENTS; i++) {
                const measureList = drink[`strMeasure${i}`];
                const ingredientList = drink[`strIngredient${i}`];

                if (measureList || ingredientList !== null) {
                    const strMeasure = document.createElement('p');
                    if (measureList === null) {
                        strMeasure.textContent = ingredientList;
                    } else {
                        strMeasure.textContent = `${measureList} ${ingredientList}`;
                    }
                    cocktail.appendChild(strMeasure);
                }
            }
            const strInstructions = document.createElement('h5');
            strInstructions.textContent = drink.strInstructions;
            cocktail.appendChild(strInstructions);

            const images = document.createElement('img');
            images.src = drink.strDrinkThumb;
            images.alt = drink.strDrink;
            images.classList.add('imageOfCocktail');
            cocktail.appendChild(images);

            const strAlcoholic = drink.strAlcoholic;
            if (strAlcoholic === 'Alcoholic') {
                list.classList.add('resultOfCocktail');
            } else {
                list.classList.add('resultOfCocktailNonAlcohol');
            }
        });
    } catch (error) {
        console.error(error);
        displayError();
    }
}
