fetch('../data/restaurantsInfo.json')
    .then(dataJson => dataJson.json())
    .then(allData => {
        listRestaurantsArr = allData;
        listRestaurantsArr.map(restaurant => {
            showRestaurants(restaurant.name, restaurant.type, restaurant.openingHours, restaurant.address, restaurant.district, restaurant.phone, restaurant.image);
        });
    })
    .catch(error => {
        console.log(error);
    });

const showRestaurants = (name, address, openingHours, phone, type, district, image) => {
    let print = '';
    print += `

        <div class="w3-quarter">
          <img src="${image}" alt="plate" style="width:100%">
          <h3>${name}</h3>
        </div>
    
    `;
    contentFood.innerHTML += print;
};

const restaurantsSearched = (listRestaurantsArr, inputType) => {
    contentFood.innerHTML = '';

    listRestaurantsArr.filter(typeRestaurant => {
        if (typeRestaurant.type.toUpperCase().includes(inputType.toUpperCase())) {
            showRestaurants(typeRestaurant.name, typeRestaurant.address, typeRestaurant.openingHours, typeRestaurant.phone, typeRestaurant.type, typeRestaurant.district, typeRestaurant.image)
        }
    });
};








