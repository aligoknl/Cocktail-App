export async function searchCocktail(query) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData.drinks;
}

export async function fetchCocktail(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
}
