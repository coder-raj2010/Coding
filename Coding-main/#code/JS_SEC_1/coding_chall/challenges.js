/*Coding Challenge 1*/
// Task
/*1.done Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.*/


const marksMass = 78; //kg
const marksHeight = 1.69; //metre

const johnMass = 92; //kg
const johnHeight = 1.95; //metre

//BMI Calculation
// BMI = mass / (height * height)
const bmiMark = 78 / (1.69 ** 2)
const bmiJohn = 92 / (1.95 ** 2)
console.log(bmiMark, bmiJohn)

const higHerBMI = bmiMark > bmiJohn
const higherBMI = bmiJohn > bmiMark
console.log(higHerBMI, higherBMI)



/*Coding Challenge 2 */
// Your tasks:
/*
1.done Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Marks's BMI (${bmiMark})`)
}