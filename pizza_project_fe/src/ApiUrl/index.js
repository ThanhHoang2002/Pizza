const API_ROUTES = {
    getStoreData: 'http://localhost:8080/api/v1/store/all',
    getPizzaType: 'http://localhost:8080/api/v1/pizzaType/all',
    getCombo: 'http://localhost:8080/api/v1/combo/category?category=Combo',
    getSupperDeal: 'http://localhost:8080/api/v1/combo/category?category=50PERCENTOFF',
    getMyBox: 'http://localhost:8080/api/v1/combo/category?category=MYBOX_2023',
    getDrink: 'http://localhost:8080/api/v1/food/category?category=Drink',
    getChicken: 'http://localhost:8080/api/v1/food/category?category=CHICKEN_LOVER',
    getStarter: 'http://localhost:8080/api/v1/food/category?category=Starter',
    getVegetarianPizza: 'http://localhost:8080/api/v1/pizzaType/category?category=Vegetarian Pizza',
    addOrder: 'http://localhost:8080/api/v1/order/add',
  };
  
export default API_ROUTES