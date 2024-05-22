
let numOfStud = 10;

let ageOfFirstStu = Math.abs(+prompt("Please enter age of 1st student:"));
console.log(`Age of 1st student: ${ageOfFirstStu}`);
let ageOfSecStu = Math.abs(prompt("Please enter age of 2nd student:"));
console.log(`Age of 2nd student: ${ageOfSecStu}`);
let ageOfThirdStu = Math.abs(+prompt("Please enter age of 3rd student:"));
console.log(`Age of 3rd student: ${ageOfThirdStu}`);
let ageOfFourthStu = Math.abs(+prompt("Please enter age of 4th student:"));
console.log(`Age of 4th student: ${ageOfFourthStu}`);
let ageOfFifthStu = Math.abs(+prompt("Please enter age of 5th student:"));
console.log(`Age of 5th student: ${ageOfFifthStu}`);
let ageOfsixthStu = Math.abs(+prompt("Please enter age of 6th student:"));
console.log(`Age of 6th student: ${ageOfsixthStu}`);
let ageOfSevenStu = Math.abs(+prompt("Please enter age of 7th student:"));
console.log(`Age of 7th student: ${ageOfSevenStu}`);
let ageOfEighthStu = Math.abs(+prompt("Please enter age of 8th student:"));
console.log(`Age of 8th student: ${ageOfEighthStu}`);
let ageOfNinthStu = Math.abs(+prompt("Please enter age of 9th student:"));
console.log(`Age of 9thh student: ${ageOfNinthStu}`);
let ageOfTenthStu = Math.abs(+prompt("Please enter age of 10th student:"));
console.log(`Age of 10th student: ${ageOfTenthStu}`);
let sumOfAges = ageOfFirstStu + ageOfSecStu + ageOfThirdStu + ageOfFourthStu + ageOfFifthStu + ageOfsixthStu + ageOfSevenStu + + ageOfEighthStu +ageOfNinthStu + ageOfTenthStu;
alert(sumOfAges);

console.log(`Sum of ages of 10 students: ${sumOfAges}`);

let avrgAge = Math.round(sumOfAges / numOfStud);
alert(avrgAge);
console.log(`Average age of 10 students: ${avrgAge}`);
 