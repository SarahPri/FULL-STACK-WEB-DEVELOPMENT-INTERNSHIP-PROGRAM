// Calculate the average rating for all the restaurants and also list all restaurants with an average rating greater than or equal to four.
// Example data structure for restaurants and their ratings
const restaurants = [
    {
        name: 'Restaurant A',
        ratings: [4, 5, 4, 3, 5]
    },
    {
        name: 'Restaurant B',
        ratings: [2, 3, 3, 3, 2]
    },
    {
        name: 'Restaurant C',
        ratings: [5, 4, 5, 5, 4]
    },
    {
        name: 'Restaurant D',
        ratings: [1, 2, 2, 1, 3]
    }
];

// Function to calculate the average rating of a restaurant
function calculateAverage(ratings) {
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
}

// List restaurants with an average rating of 4 or more
function listHighRatedRestaurants(restaurants) {
    return restaurants
        .map(restaurant => ({
            name: restaurant.name,
            averageRating: calculateAverage(restaurant.ratings)
        }))
        .filter(restaurant => restaurant.averageRating >= 4);
}

// Calculate and display high-rated restaurants
const highRatedRestaurants = listHighRatedRestaurants(restaurants);
console.log('Restaurants with an average rating of 4 or more:');
highRatedRestaurants.forEach(restaurant => {
    console.log(`${restaurant.name} - Average Rating: ${restaurant.averageRating.toFixed(1)}`);
});


// Explanation
// Data Structure:

// restaurants is an array of objects where each object represents a restaurant with a name and an array of ratings.
// Calculate Average Rating:

// calculateAverage(ratings) function computes the average of an array of ratings. It sums up all ratings and divides by the number of ratings.
// List High-Rated Restaurants:

// listHighRatedRestaurants(restaurants) function:
// Uses map to create an array of objects with name and averageRating for each restaurant.
// Uses filter to keep only those restaurants with an averageRating of 4 or more.
// Output:

// The filtered list is logged to the console with the restaurant name and its average rating.