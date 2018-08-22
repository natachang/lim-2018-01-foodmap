const searchType = document.getElementById('type-food');
const contentFood = document.getElementById('content-food');



searchType.addEventListener('keyup', () => {
    inputType = searchType.value;
    restaurantsSearched(listRestaurantsArr, inputType);
});









