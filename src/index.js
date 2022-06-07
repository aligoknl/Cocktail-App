import { SEARCH_DELAY_MSECS } from '../constant.js';
import { searchCocktail } from './fetchers.js';
import { renderResults } from './pages/homePage.js';
import { displayError } from './views/errorView.js';

export function getCocktails() {
    let timeoutToken = null;

    const searchFieldElement = document.getElementById('searchField');
    searchFieldElement.classList.add('searchFieldClass');
    searchFieldElement.addEventListener('input', () => {
        clearTimeout(timeoutToken);
        timeoutToken = setTimeout(async () => {
            try {
                const results = await searchCocktail(searchFieldElement.value);
                renderResults(results);
            } catch (error) {
                console.error(error.message);
                displayError();
            }
        }, SEARCH_DELAY_MSECS);
    });
}
