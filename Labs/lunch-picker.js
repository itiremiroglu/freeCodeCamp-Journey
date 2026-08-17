let lunches = [];
function addLunchToEnd(lunch, food) {
    lunch.push(food);
    console.log(`${food} added to the end of the lunch menu.`);
    return lunch;
}

function addLunchToStart(lunch, food) {
    lunch.unshift(food);
    console.log(`${food} added to the start of the lunch menu.`);
    return lunch;
}

function removeLastLunch(lunch) {
    if (lunch.length === 0) {
        console.log("No lunches to remove.");
    }
    else {
        const lastFood = lunch.pop();
        console.log(`${lastFood} removed from the end of the lunch menu.`);
    }
    return lunch;
}

function removeFirstLunch(lunch) {
    if (lunch.length === 0) {
        console.log("No lunches to remove.");
    }
    else {
        const firstFood = lunch.shift();
        console.log(`${firstFood} removed from the start of the lunch menu.`);
    }
    return lunch;
}

function getRandomLunch(lunch) {
    if (lunch.length === 0) {
        console.log("No lunches available.");
    }
    else {
        const randomIndex = Math.floor(Math.random() * lunch.length);
        const randomItem = lunch[randomIndex];
        console.log(`Randomly selected lunch: ${randomItem}`);
    }
}

function showLunchMenu(lunch) {
    if (lunch.length === 0) {
        console.log("The menu is empty.");
    }
    else {
        console.log(`Menu items: ${lunch.join(", ")}`);
    }
}