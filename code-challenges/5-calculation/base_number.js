// Base Number System 🔢
// @parzivalkei

const baseNumberSystem = (start, end, base) => {

  const arrayOfExponentialNumbers = [];

  for (let exponent = start; exponent <= end; exponent++) {
    arrayOfExponentialNumbers.push((base ** exponent).toLocaleString('en'));
  }

  arrayOfExponentialNumbers.unshift(`base ${base}:`); 

  return arrayOfExponentialNumbers;

};

console.log(baseNumberSystem(0, 12, 2));
console.log(baseNumberSystem(0, 12, 3));
console.log(baseNumberSystem(0, 12, 5));