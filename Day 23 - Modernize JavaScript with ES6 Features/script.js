// Convert the below function into an arrow function.
function calculateAverageRating(ratings){
    if(ratings.length === 0){
        return 0
    }

    var sumOfRatings = 0;
    for(var i = 0; i < ratings.length; i++){
        sumOfRatings +=ratings[i]
    }

    var averageRating = sumOfRatings / ratings.length;

    return averageRating.toFixed(1)

}

const calculateAverageRating = (ratings) => {
    if(ratings.length === 0){
        return 0
    }

    

}