// Space Travel 🚀
// @iam_silvia

let birthDay = 8;
let birthMonth = 'june';
let birthYear = 1990;

// Below, we calculate days from birthDay to Dec 31:

let january = 31;
let february = 31 + 28;
let march = 31 + 28 + 31;
let april = 31 + 28 + 31 + 30;
let may = 31 + 28 + 31 + 30 + 31;
let june = 31 + 28 + 31 + 30 + 31 + 30;
let july = 31 + 28 + 31 + 30 + 31 + 30 + 31;
let august = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
let september = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
let october = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
let november = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;

function birthMonthToDays() {
  birthMonth = birthMonth.toLowerCase();

  if (birthMonth === 'january') {
    return birthDay;
  } else if (birthMonth === 'february') {
    return january + birthDay;
  } else if (birthMonth === 'march') {
    return february + birthDay;
  } else if (birthMonth === 'april') {
    return march + birthDay;
  } else if (birthMonth === 'may') {
    return april + birthDay;
  } else if (birthMonth === 'june') {
    return may + birthDay;
  } else if (birthMonth === 'july') {
    return june + birthDay;
  } else if (birthMonth === 'august') {
    return july + birthDay;
  } else if (birthMonth === 'september') {
    return august + birthDay;
  } else if (birthMonth === 'october') {
    return september + birthDay;
  } else if (birthMonth === 'november') {
    return october + birthDay;
  } else if (birthMonth === 'december') {
    return november + birthDay;
  }
  console.log ('Please write the month you were born.');
};

// console.log(365 - birthMonthToDays());
// Subtracting the days from Jan 1 to your birthday from the first year, since we're considering you alive in this program AFTER your birthDay.

// Calculates the days since beginning of currentYear:

let currentYear = 2020;
let currentMonth = 'may';
let currentDay = 10;

// Calculates days of life your second year of life until last year:

function intermediateYearsToDays () {
  if (birthYear === currentYear) {
    return 0;
  } else if (birthYear !== currentYear) {
    return ((currentYear - 1) - (birthYear)) * 365;
  }
};
//console.log(intermediateYearsToDays());
//Sum of days of complete years you have lived through.

function currentDateToDays() {
  if (currentMonth === 'january') {
    return currentDay;
  } else if (currentMonth === 'february') {
    return january + currentDay;
  } else if (currentMonth === 'march') {
    return february + currentDay;
  } else if (currentMonth === 'april') {
    return march + currentDay;
  } else if (currentMonth === 'may') {
    return april + currentDay;
  } else if (currentMonth === 'june') {
    return may + currentDay;
  } else if (currentMonth === 'july') {
    return june + currentDay;
  } else if (currentMonth === 'august') {
    return july + currentDay;
  } else if (currentMonth === 'september') {
    return august + currentDay;
  } else if (currentMonth === 'october') {
    return september + currentDay;
  } else if (currentMonth === 'november') {
    return october + currentDay;
  } else if (currentMonth === 'december') {
    return november + currentDay;
  }
};
// console.log(currentDateToDays());
// Days since beginning of the currentYear.

function totalDaysAlive() {
  const totalAlive = (365 - (birthMonthToDays() - 1)) + intermediateYearsToDays() + currentDateToDays();
  return totalAlive;
};

// console.log(totalDaysAlive()); 
// We then remove and additional day to account for today (otherwise it will count up until yersterday).

// Leap years are not accounted for... sorry, I'm a beginner! A quick but imprecise turnaround: use 365.25 for days in years, instead of 365.

console.log(`You were born ${birthMonth} ${birthDay}, ${birthYear}. That is a total of ${totalDaysAlive()} days alive!`);
console.log('--------\n');

const distanceTraveledByEarthOrbit = 940000000;  // 940'000'000km (940 million) in one year
const earthDiameter = 12742;                     // 12'742km traveled every single day by just earth rotating on itself
const distanceTraveledByEarthRotation = earthDiameter * 365;

// console.log(distanceTraveledByEarthRotation); 4650830;
// Output: 4'650'830km (+- 4,5 million) traveled in a year by just earth rotating on itself.

const totalEarthTravelPerYear = distanceTraveledByEarthOrbit + distanceTraveledByEarthRotation;

// console.log(totalEarthTravelPerYear);
// Output: 944'650'830km (+- 944,5 million)
// Fun fact: Almost 1 light hour.

const totalEarthTravelPerDay = totalEarthTravelPerYear / 365;

// console.log(totalEarthTravelPerDay);
// Output: 2'588'085km (+- 2,5 million)

console.log('Earth travels 940\'000\'000 km (940 million km) around the sun and an additional 4\'650\'830 km (approximately 4,5 million km) by rotating on itself every year. That\'s approximately 944,5 million km that you travel in a year, without even getting up from your couch! It amounts to approximately 2,5 million km for every day you\'re alive.');
console.log('--------\n');

// Below I define astronomical units since they are the measurement for distance in space.
// Fun fact: 1 AU is defined by the distance between Earth and the Sun.

const astronomicalUnit = 150000000; //150'000'000km (150 million)

let yearlyAUTraveled = totalEarthTravelPerYear / astronomicalUnit;
// console.log(yearlyAUTraveled);
// Output approx 6,3
let dailyAUTraveled = totalEarthTravelPerDay / astronomicalUnit;
// console.log(dailyAUTraveled);
// Output approx 0,0175

// Testing to make sure my math is correct for the distance traveled in a day:

function testingMath1 () {
  if (totalEarthTravelPerDay === (astronomicalUnit * dailyAUTraveled)) {
    return true;
  } else {
    return false;
  }
};
// console.log(testingMath1());
// Output: true! Wow, I surprised myself there. High school math, I'm your master now!

// Now the fun stuff: let's see how far things are and how quickly you'd get there if our solar system was a straight line and only Earth moved past other objects. Distances of planets change as they orbit, these are approximate distances.

// The moon is approx 400'000km away
console.log('Let\'s find out how much you\'ve already traveled in space. In just the first day of your life you traveled a little over 2,5 million kilometers, which is enough distance to go well past the Moon (only 400\'000 km away)!');


let venus = 56000000;          // Distance of Venus from Earth, approx 56 million km.
const travelPastVenus = () => Math.floor(venus / totalEarthTravelPerDay);
// console.log(travelPastVenus());
// Output: it takes approx 21 days to reach Venus.

let sun = astronomicalUnit     // Distance of Sun from Earth, approx 150 million km.
const travelPastSun = () => Math.floor(sun / totalEarthTravelPerDay);
// console.log(travelPastSun());
// Output: it takes approx 58 days (almost 2 months) to reach the Sun.

let mars = 175000000;          // Distance of Mars from Earth, approx 175 million km.
const travelPastMars = () => Math.floor(mars / totalEarthTravelPerDay);
// console.log(travelPastMars());
// Output: it takes approx 67,5 days (a little over 2 months) to reach Mars.

let mercury = 194000000;       // Distance of Mercury from Earth, approx 194 million km.
const travelPastMercury = () => Math.floor(mercury / totalEarthTravelPerDay);
// console.log(travelPastMercury());
// Output: it takes approx 75 days (about 2,5 months) to reach Mercury.

let asteroidBeltDistanceIn = (astronomicalUnit * 3.2);
// console.log(asteroidBeltDistanceIn);
// Output: 480'000'000 km (480 million km)
let asteroidBeltDistanceOut = (astronomicalUnit * 4.2);
// console.log(asteroidBeltDistanceOut);
// Output: 630'000'000 km (630 million km)
let ageInAsteroid = Math.floor(asteroidBeltDistanceIn / totalEarthTravelPerDay);
// console.log(ageInAsteroid);
// Output: it takes approx 185 days (a little over 6 months) to reach the Asteroid Belt.
let ageOutAsteroid = Math.floor(asteroidBeltDistanceOut / totalEarthTravelPerDay);
// console.log(ageOutAsteroid);
// Output: it takes approx 243 days (a little over 8 months) to exit the Asteroid Belt.

let jupiter = 705810000; // Distance of Jupiter from Earth, approx 705,81 million km.
const travelPastJupiter = () => Math.floor(jupiter / totalEarthTravelPerDay);
// console.log(travelPastJupiter());
// Output: it takes approx 273 days (a little over 9 months) to reach Jupiter.

let saturn = 1444300000; // Distance of Saturn from Earth, approx 1,4443 billion km.
const travelPastSaturn = () => Math.floor(saturn / totalEarthTravelPerDay);
// console.log(travelPastSaturn());
// Output: it takes approx 558 days (about 18,5 months or 1,5 years) to reach Saturn.

let uranus = 3110000000; // Distance of Uranus from Earth, approx 3,11 billion km.
const travelPastUranus = () => Math.floor(uranus / totalEarthTravelPerDay);
//console.log(travelPastUranus());
//Output: it takes approx 1'202 days (about 40 months or almost 3 and a half years) to reach Uranus.

let neptune = 4552900000; //Distance of Neptune from Earth, approx 4,55 billion km.
const travelPastNeptune = () => Math.floor(neptune / totalEarthTravelPerDay);
// console.log(travelPastNeptune());
// Output: it takes approx 1'759 days (about 58,5 months or almost 5 years) to reach Neptune. This is also the inner edge of the Kuiper Belt.

let kuiperBeltDistanceIn = (astronomicalUnit * 29);
// console.log(kuiperBeltDistanceIn);
// Output: the Kuiper Belt starts approx at 4'500'000'000km (4,5 billion) from Earth. This is also Pluto's closest distance to the Earth.
let kuiperBeltDistanceOut = (astronomicalUnit * 49);
// console.log(kuiperBeltDistanceOut);
// Output: the Kuiper Belt ends at 7'500'000'000km (7,5 billion) from Earth. This is also Pluto's farthest distance from Earth.
let ageInKuiper = Math.floor(kuiperBeltDistanceIn / totalEarthTravelPerDay);
// console.log(ageInKuiper);
// Output: it takes approx 1681 days (about 56 months or around 4,5 years) to reach the Kuiper Belt. 
let ageOutKuiper = Math.floor(kuiperBeltDistanceOut / totalEarthTravelPerDay);
// console.log(ageOutKuiper);
// Output: it takes approx 2840 days (about 94,5 months or around 8 years) to exit the Kuiper Belt.

let scatteredDiskDistanceIn = (astronomicalUnit * 49);
// console.log(scatteredDiskDistanceIn);
// Output: the Scattered Disk area starts approx at 7'350'000'000km (7,5 billion km) from Earth.
let scatteredDiskDistanceOut = (astronomicalUnit * 999);
// console.log(scatteredDiskDistanceOut);
// Output: the Scattered Disk area ends at approx 149'850'000'000km (150 billion km) from Earth.
let ageInScatteredDisk = Math.floor(scatteredDiskDistanceIn / totalEarthTravelPerDay);
// console.log(ageInScatteredDisk);
// Output: it takes approx 2840 days (about 94,5 months or around 8 years) to reach the Scattered Disk area.
let ageOutScatteredDisk = Math.floor(scatteredDiskDistanceOut / totalEarthTravelPerDay);
// console.log(ageOutScatteredDisk);
// Output: it takes approx 57'900 days (about 1'930 months or around 160 years) to exit the Scattered Disk area.

let oortCloudDistanceIn1 = (astronomicalUnit * 2000);
// console.log(oortCloudDistanceIn1);
let oortCloudDistanceIn2 = (astronomicalUnit * 5000);
// console.log(oortCloudDistanceIn2);
// Output: Estimated distance from Earth to reach the Oort Cloud is between 300'000'000'000km (300 billion km) and 750'000'000'000km (750 billion km).
let oortCloudDistanceOut1 = (astronomicalUnit * 10000);
// console.log(oortCloudDistanceOut1);
let oortCloudDistanceOut2 = (astronomicalUnit * 100000);
// console.log(oortCloudDistanceOut2);
// Output: Estimated distance from Earth to exit the Oort Cloud is between 1'500'000'000'000km (1,5 trillion km) and 15'000'000'000'000km (15 trillion km).
let ageInOort1 = Math.floor(oortCloudDistanceIn1 / totalEarthTravelPerDay);
// console.log(ageInOort1);
let ageInOort2 = Math.floor(oortCloudDistanceIn2 / totalEarthTravelPerDay);
// console.log(ageInOort2);
// Output: it takes between 115'916 days (about 322 years) and 289'790 day (about 805 years) to reach the Oort Cloud.
let ageOutOort1 = Math.floor(oortCloudDistanceOut1 / totalEarthTravelPerDay);
// console.log(ageOutOort1);
let ageOutOort2 = Math.floor(oortCloudDistanceOut2 / totalEarthTravelPerDay);
// console.log(ageOutOort2);
// Output: it takes between 579'579 days (around 1'610 years) and 5'795'792 days (around 16'099 years) to exit the Oort Cloud, and thus our Solar System.

console.log('--------\n');

// Now that all the constants are established, let's figure out how many kilometers you have personally traveled in space:

let distanceTraveled = Math.floor(totalDaysAlive() * totalEarthTravelPerDay);
console.log(`You have already traveled approximately ${distanceTraveled}km in your life time.`);

function whereInSpace (totalDaysAlive) {
  if (totalDaysAlive >= 1 && totalDaysAlive <21) {
    return 'You are floating between Earth and Venus!';
  } else if (totalDaysAlive === 21) {
    return 'You have reached Venus!';
  } else if (totalDaysAlive >= 22 && totalDaysAlive < 58) {
    return 'You are past Venus, and floating between Earth and the Sun!';
  } else if (totalDaysAlive === 58) {
    return 'I hope you packed some lotion because you\'ve reached the Sun!';
  } else if (totalDaysAlive >=59 && totalDaysAlive < 67) {
    return 'You are past Venus, and even the Sun, floating between Earth and Mars!';
  } else if (totalDaysAlive === 67) {
    return 'Say hello to the rovers, you\'re on Mars!';
  } else if (totalDaysAlive >= 68 && totalDaysAlive < 75) {
    return 'You are past Venus, the Sun, Mars, and floating between Earth and Mercury!';
  } else if (totalDaysAlive === 75) {
    return 'Congratulations, you\'ve reached Mercury!';
  } else if (totalDaysAlive >= 76 && totalDaysAlive <= 184) {
    return 'You are past Venus, the Sun, Mars, and Mercury, the Asteroid Belt is fast approaching!';
  } else if (totalDaysAlive >= 185 && totalDaysAlive <= 243) {
    return 'You are past Venus, the Sun, Mars, and Mercury... you are floating inside the Asteroid Belt!';
  } else if (totalDaysAlive >= 244 && totalDaysAlive < 273) {
    return 'You are past Venus, the Sun, Mars, Mercury, and the Asteroid Belt, floating between Earth and Jupiter!';
  } else if (totalDaysAlive === 274) {
    return 'Congratulations, you\'ve reached Jupiter!';
  } else if (totalDaysAlive >= 275 && totalDaysAlive < 558) {
    return 'You are past Venus, the Sun, Mars, Mercury, the Asteroid Belt, and Jupiter, floating between Earth and Saturn!';
  } else if (totalDaysAlive === 558) {
    return 'Wow, look at those rings! You\'ve reached Saturn already!';
  } else if (totalDaysAlive >= 559 && totalDaysAlive < 1202) {
    return 'You are past Venus, the Sun, Mars, Mercury, the Asteroid Belt, Jupiter, and Saturn with its rings, now floating between Earth and Uranus!';
  } else if (totalDaysAlive === 1202) {
    return 'Hey, I don\'t mean to make a dirty joke, but you\'re sitting on Uranus!';
  } else if (totalDaysAlive >= 1203 && totalDaysAlive <= 1681) {
    return 'You are past Venus, the Sun, Mars, Mercury, the Asteroid Belt, Jupiter, Saturn and even Uranus, enjoy floating between Earth and Neptune! There\'s more: you\'re entering the Kuiper Belt!';
  } else if (totalDaysAlive >= 1682 && totalDaysAlive < 1759) {
    return 'You are past Venus, the Sun, Mars, Mercury, the Asteroid Belt, Jupiter, Saturn and even Uranus, enjoy floating between Earth and Neptune! There\'s more: you\'re inside the Kuiper Belt!';
  } else if (totalDaysAlive === 1759) {
    return 'Congrats, you\'ve reached the last planet today: Neptune!';
  } else if (totalDaysAlive >= 1760 && totalDaysAlive <= 2840) {
    return 'You are past all of the planets now, and I hope you brought a helmet because you\'re well inside the Kuiper Belt! Look around for Pluto!';
  } else if (totalDaysAlive >= 2841 && totalDaysAlive <= 57900) {
    return 'You have traveled some distance: past all the planets, past even the Kuiper Belt, you are now inside the Scattered Disk area... Make yourself comfortable, you\'ll be here a while: approximately until your 160th birthday!';
  } else if (totalDaysAlive >= 57900 && totalDaysAlive <= 5795792) {
    return 'Here\'s the deal: either this javascript program lasted through the centuries, or you\'re cheating on your age! Well, if you could really live past 160 years old, you would float in space until you reach 322 years old, then you\'d enter the Oort Cloud and you\'d have until your 16\'000th birthday before you would get out of it. That\'s the estimated edge of our Solar System. Hopefully you brought some snacks!';
  }
};

console.log(whereInSpace(totalDaysAlive()));

console.log('--------\n');

console.log('When I thought of this idea, I imagined a lot of cool possibilities with all the objects we would float around throughout our lifetime. Turns out, if you\'re older than 8 it isn\'t all that exciting to spend 152 years in the Scattered Disk area.');

// Look at the bright side: never ran a marathon in you're life? No worries, the ground under your feet makes you travel through approx:

let dailyMarathons = Math.floor(totalEarthTravelPerDay / 42);
// console.log(dailyMarathons); 
// 61'621 marathons per day! 61'622 on days you actually do run a marathon.

console.log(`I guess the point is we're most definitely incredibly small, even if these numbers show we travel lots of distance in space during a single life... But there\'s good news too! If anybody ever calls you lazy, you can tell them you get through ${dailyMarathons} marathons every day just by sitting on your couch!`);

// I hope you enjoyed this beginner JavaScript program - it's the end of my first week learning this language! 10.05.2020