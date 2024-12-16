// CONDITIONAL PROJECT
// #1 ELECTRIC BILL
    // console.log("Q1 Enter Electricity Unit and calculate amount to pay .");
    //     let  amt, extra , total;
    //     let unit= +prompt("Enter Unit ...");
    //     if(unit >= 50){
    //         amt = unit* 1;
    //         console.log("Bill is : ", amt);
    //         }
    //         else if(unit >= 100){
    //         amt = ( unit*2) + (unit -50 * 1);
    //         console.log("Bill is : ", amt);
    //         }
    //         else if(unit >= 200){
    //         amt = (unit * 3) + ( unit -100 * 2) + (unit -50 * 1) ;
    //         extra = amt * 0.20;
    //         total = amt + extra;
    //         console.log("Bill is : ", total);
    //         }else if(unit >= 200)
    //             {
    //             amt = (unit * 4) (unit -100 * 3) + ( unit -100 * 2) + (unit -50 * 1) ;
    //             extra = amt * 0.20;
    //             total = amt + extra;
    //             console.log("Bill is : ", total);
    //         }else {
    //         console.log("Invalid");   
    //         } 
            // EXPECTED OUTPUT=
            //  UNIT=200
            // BILL=200

// #2 Season indicators
//     let seasons = +prompt("Enter Month => ");

//   switch (seasons) {
//     case 1:
//         console.log("Winter");
//         break;
//     case 2:
//         console.log("Winter");
//         break;
//     case 3:
//         console.log("Winter");
//         break;
//     case 4:
//         console.log("Winter");
//         break;
//     case 5:
//         console.log("Summer");
//         break;
//     case 6:
//         console.log("Summer");
//         break;
//     case 7:
//         console.log("Summer");
//         break;
//     case 8:
//         console.log("Summer");
//         break;
//     case 9:
//         console.log("Monsoon");
//         break;
//     case 10:
//         console.log("Monsoon");
//         break;
//     case 11:
//         console.log("Monsoon");
//         break;
//     case 12:
//         console.log("Monsoon");
//         break;
//      default:
//         console.log("Invalid input");
//         break;
//   }
//   EXPECTED OUTPUT=
    // MONTH(1-4)=WINTER
    // MONTH(5-8)=SUMMER
    // MONTH(9-12)=MONSOON

// #3  INTEREST RATE 
        // console.log("Q3 make intrest calculetor :");
        // let p = +prompt("Enter Principal amount >>>>>> ");
        // let t = +prompt("Enter years>>>>>> ");
        // let finalAMT;

// if (p> 3 || p <= 5){
//     finalAMT = (p*3*t)/100; 
//     console.log("Intrest  amount is : ",finalAMT );
// }else if(p > 5 || p <= 8) {
//     finalAMT = (pamt*5*t)/100; 
//     console.log("Intrest is amount is : ",finalAMT );
// }else if(p > 8 || p <= 12) {
//     finalAMT = (p*12*t)/100; 
//     console.log("Intrest  amount is : ",finalAMT );
// }else if (p >= 12) {
//     finalAMT = (p*15*t)/100;  
//     console.log("Intrest amount is : ",finalAMT);
// }else{
//     console.log("Please enter correct amount and time ======/. ");
// }


/*
  p = 15000
  time = 5 years 
  Intrest amount is : 2250
*/

// #4 Voting
    // let age=+ prompt("Enter your age");
    // console.log("age",age);
    // if(age>=18){
    //     console.log("You are eligible for voting");
    // }
    // else{
    //     console.log("You are not eligible for voting");
    // }

    // EXPECTED-OUTPUT
        // AGE(0-17)=NOT ELIGIBLE FOR VOTING.
        // AGE(>18)=ELIGIBLE FOR VOTING


// #5 AGE-GROUPS
// let age=+ prompt("Enter your age");
// console.log("age",age);
// if (age>1 && age<=14) {
//     console.log("you are a child");
//     } 
//     else if (age>14 && age<=18) {
//        console.log("you are a teenager");    
//     } 
//     else if (age>18 && age<=60) {
//         console.log("you are adult")
//     } 
//     else if (age>60 && age<=100) {
//         console.log("you are senior citizen")
//     } 
//     else {
//         console.log("Enter valid age");
//     } 
     // EXPECTED-OUTPUT
        // AGE(0-14)=CHILD
        // AGE(15-18)=TEENAGER
        // AGE(19-60)=ADULT
        // AGE(61-100)=SENIOR-CITIZEN
