// Pizza Party Calculator 🍕
// @glopezpharmd

// Calculates if pizza can be equally distributed among partygoers. If it's fair, it will say so. If not, it will tell you how many more slices are needed to make everyone able to get the same amount of pizza!

// Change these variables if you'd like!

let numberOfSlices = 11;                                                           // The number of slices of pizza available
let numberOfPeople = 7;                                                            // The number of people at the party

// This calculates stuff. Don't change anything below!

let leftOverSlices = numberOfSlices % numberOfPeople;                              // How many slices are not given out after everyone gets an equal amount in an unfair situation
let howManyMoreSlices = numberOfPeople - leftOverSlices;                           // How many more slcies are needed to make an unfair situation fair
let unfairNumberOfSlices = (numberOfSlices + howManyMoreSlices) / numberOfPeople;  // How many slices each person would get when an unfiar situation is made fair
let fairNumberofSlices = numberOfSlices / numberOfPeople;                          // How many slices each person can get in a situation that starts out fairly

if (leftOverSlices == 0) {
  console.log(`That's fiar! Everyone can get $(fairNumberOfSlices} slice(s).)`);
} else {
  console.log(`That's not fair! You need ${howManyMoreSlices} more slice(s). Then, everyone gets ${unfairNumberOfSlices}.`);
}