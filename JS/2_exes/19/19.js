// FUNCTIONS




const functionName = parameter => transformation;


const functionName2 = parameter => {
     // statements
     return result;
   };




function showProperties(obj) {
     for (let key in obj) {
        console.log(`${key} : ${obj[key]}`)
     }
   };






// EXERCISE :


function formatNumbers(numbers) {
  return numbers.map(num => num.toString().padStart(4, "0"));
}

// Call it with an array
let result = formatNumbers([1, 42, 999, 1234]);
console.log(result);  // ["0001", "0042", "0999", "1234"]





const square = x => x * x;

const isEven = num => num % 2 === 0;

const getFullName = (firstName, lastName) => firstName + " " + lastName;