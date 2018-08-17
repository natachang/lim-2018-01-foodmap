


getInfo = () => {

    fetch('../..data/restaurants.json')
        .then(response => 
            response.json())
        .then(myJson => {
            console.log(myJson);
        });
};


