// Create a class restaurant manager with an array restaurantList. Then create two methods- printAllRestaurantNames and filterRestaurantByCity.
class restaurantManager {
  constructor() {
    this.restaurantList = [
      {
        id: 1,
        restaurantName: "KFC",
        address: "Anand Vihar",
        city: "Delhi",
      },
      {
        id: 2,
        restaurantName: "Domino",
        address: "Savita Vihar",
        city: "Delhi",
      },
      {
        id: 3,
        restaurantName: "Burger King",
        address: "Civil Lines",
        city: "Pune",
      },
      {
        id: 4,
        restaurantName: "Subway",
        address: "Civil Lines",
        city: "Mumbai",
      },
    ];
 
    }
    //Method to create print all RestaurantNames
    printAllRestaurantNames() {
        this.restaurantList.forEach(restaurant => {
            console.log(restaurant.restaurantName);
        });
  }

//   Method to filter restaurants by city
  filterRestaurantByCity(city){
    const filterRestaurants = this.restaurantList.filter(restaurant => restaurant.city === city);
    return filterRestaurants
  }

}

const manager = new restaurantManager();

console.log("All Restaurants");
manager.printAllRestaurantNames()


const restaurantIndia = manager.filterRestaurantByCity("Pune")
console.log(restaurantIndia);

// Problem Statement 2:
// Create a Date object, Math object and apply a few methods to them

var d = new Date();
console.log(d);

var e = new Date("August 30, 2024, 21:56:00")
console.log(e);

var f = getFullYear();
console.log(f);
