// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs(you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]


function calcAverageHumanAge(ages) {
  const humanAgeOutput = ages.map(function(age) {
    if (age <= 2) {
      let humanAge = 2 * age;
      return humanAge;
    } else if (age > 2) {
      let humanAge = 16 + age * 4;
      return humanAge;
    }
  });

  const filterOutput = humanAgeOutput.filter(function(currentHumanAge) {
  return currentHumanAge >= 18;
  });

  const averageOfAllDogs = filterOutput.reduce(function(acc, currentValue) {
  let total = acc + currentValue;
  return total;
  }, 0) / filterOutput.length;
  console.log(averageOfAllDogs);
}
calcAverageHumanAge([5,2,4,1,15,8,3]);



// Rewrite the 'calcAverageHumanAge' function, but this time as an arrow function, and using chaining!
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]

function calcAverageHumanAge(ages) {
  const humanAgeOutput = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(currentHumanAge => currentHumanAge >= 18).reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  console.log(humanAgeOutput);
  
}
calcAverageHumanAge([5,2,4,1,15,8,3]);
