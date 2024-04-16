#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number
//input from user to guess number
//comparision of user and computer generated number
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1 to 10",
    },
]);
console.log(answer);
if (answer.userguessednumber === randomnumber) {
    console.log("you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
