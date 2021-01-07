// Oplossing website:

// function calculateSupply(age, numPerDay) {
//     var maxAge = 100;
//     var totalNeeded = (numPerDay * 365) * (maxAge - age);
//     var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
//     console.log(message);
//   }

//   calculateSupply(28, 36);
//   calculateSupply(28, 2.5);
//   calculateSupply(28, 400);

function calculateSupply(age, amount) {
    const maxAge = 60;
    const ageDifference = maxAge - age;
    const dayNumber = ageDifference * 365;
    // const amount = 5;
    const nn = amount * dayNumber;
    let consumedLife = "You will need " + nn + " to last you untill the ripe age of " + maxAge + ".";
    console.log(consumedLife)
}

calculateSupply(21, 4);
calculateSupply(49, 15);
calculateSupply(53, 2); 