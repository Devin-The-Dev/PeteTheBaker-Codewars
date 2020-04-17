function cakes(recipe, available) {
    //   Individual ingredients and amounts
    let currentRecipe = Object.entries(recipe);
    let inventory = Object.entries(available);
    let possibleCakes = [];
    let counter = 0;
    for (i = 0; i < currentRecipe.length; i++) {
        for (j = 0; j < inventory.length; j++) {
            //     If ingredient is available, find the difference
            if (inventory[j][0].includes(currentRecipe[i][0]) === true) {
                counter += 1;
                let newNumber = Math.floor(inventory[j][1] / currentRecipe[i][1]);
                possibleCakes.push(newNumber);
            };
        }
    }
    //   If ingredient isn't available, return 0
    if (counter < currentRecipe.length) {
        return 0;
    }
    return Math.min(...possibleCakes);
}