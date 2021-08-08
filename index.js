const readLineSync = require('readline-sync');
const chalk = require('chalk')

const userName = readLineSync.question(chalk.yellowBright("Hey , What's your name?\n"));

var year=0 ; 
const birthDate = readLineSync.question(chalk.yellowBright( userName.toUpperCase() +" , What's your birth-date ? (dd-mm-yyyy)\n"))
var birthDateArray = birthDate.split('-');
  if
  (
    (birthDateArray !=undefined && birthDateArray.length ==3)
     &&
    (birthDateArray[0] != undefined && 
     birthDateArray[1] != undefined && 
    birthDateArray[2] != undefined)
      &&
    (birthDateArray[0].length==2 && birthDateArray[0]>0 && birthDateArray[0]<=31  
    &&(birthDateArray[0]>0 && birthDateArray[1].length==2 && birthDateArray[1]<=12) &&
  birthDateArray[2].length ==4)
  )
  {
     year = birthDateArray[2];
     if((year%100 != 0 && year%4 ==0)|| year %400 ==0)
     {
        console.log(chalk.greenBright("CONGRATULATIONS  !! , You were born in a LEAP YEAR"))
     }
     else
     {
       console.log(chalk.greenBright("OH !! , You were born but NOT IN A LEAP YEAR"))
     }
  }

  else
  {
    console.log(chalk.redBright.bold("\n" +userName + " , Please enter a valid birthDate, as given."))
  }
