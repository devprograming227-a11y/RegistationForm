// let moode = "Rainbow";
// let color;

// if(moode === "Black"){
//     color = "black";
// } else if(moode === "Rainbow"){
//     color = "rainbow";
// }else if(moode === "Eraser"){
//     color = "eraser";
// }else
// {
//     color = "white";
// }
// console.log(color);

//using input Promt
// let num = prompt("Messages");
// console.log(num);
// let num = prompt("Check the number is divide by 5");
// if(num % 5 === 0){
//     console.log(num,"is divide by 5");
// }else
// {
//     console.log(num,"is not a divide by 5");
// }

// check A Grades of student
// let score = 75;
// let grade;

// let num = prompt("enter a number");
// if(num >= 90 && num<=100 ){
//     console.log("Grade A");
// }else if(num >= 70 && num<=89){
//     console.log("Grade B");
// }else if(num >= 60 && num<=69){
//     console.log("Grade C");
// }else if(num >= 50 && num<=59){
//     console.log("Grade D");
// }else if(num >= 0 && num<=49){
//     console.log("f");
// }else{
//     console.log("Invalide Number");
// }

// Start with loop 

// for(let i =1; i<=5; i++){
//     console.log(i + " Hello World");
// }
// let num =prompt("Enter a number");
// for (let i = 1; i<=10; i++){
//     sum = sum * i;
// console.log(sum + " sum");
// console.log(sum * i);
// console.log(num + " x " + i + " = " + (num * i));
// }

// while loop
// let i = 1;
// let sum = 0 ;
// while(i <=5){
//     sum = sum + i;
//     //console.log(i+ " hello");
//     console.log("sum= "+ sum);
//     i++;
// }
// let i=1;
// do{
//     console.log("Hello");
//     i++;
// }while(i<=5);

//for-of loop
// let str = "JavaScript";
// let size = 0;

// for(let val of str){
//     console.log("val="+val);
//     size++;
// }
// console.log("String size = " , size); // 10

//using for-in loop
// let obj = {
//     name : "Jone",
//     age : 30,
//     city : "New York",
//     profession : "Developer:"
// }
// let size = 0;
// for(let key in obj){
//     console.log(key + " : " + obj[key]);
//     size++;
// }
// console.log("Object size = " , size); // 4

// let num = 100;
// for(let i = 1; i<=num; i++){
//     if(i % 2 !=0){
//         //console.log(i+ " is even number");
//         console.log(i+ " is odd number");
//     }
//     // else{
//     //     console.log(i+ " is odd number");
//     // }
// }

// create games
// let gameNumber = 25;
// let userInput = prompt("Guess the number between 1 to 100");
// while(userInput != gameNumber){
//     userInput = prompt("Wrong guess! Try again. Guess the number between 1 to 100");
// }
// console.log("Congratulations! You guessed the number correctly.");

// let str = `This is a template literal `;
// console.log(str);
// let obj ={
//     items: "pen",
//     price: 10,
// };
//console.log("The cost is", obj.items,"is",obj.price,"Rupees");
//beast bay to print 
// let output= `The cost is ${obj.items} \n is ${obj.price} rupees `;
// console.log(output);
// console.log(typeof(output));
// console.log(`size of string ${output.length}`);
// let user = prompt("Enter full name");
// let add = "@";
// console.log(`${add}${user} ${user.length}`);
//Calculator using switch case
// let a = Number(prompt("Enter a number"));
// let b = Number(prompt("Enter another number"));
// let op = prompt("Enter the operation you want to perform: +, -, *, /");
// switch(op){
//     case "+":
//         console.log(`${a} + ${b} = ${a + b}`);
//         break;
//     case "-":
//         console.log(`${a} - ${b} = ${a - b}`);
//         break;
//     case "*":
//         console.log(`${a} * ${b} = ${a * b}`);
//         break;
//     case "/":
//         console.log(`${a} / ${b} = ${a / b}`);
//         break;
//     default:
//         console.log("Invalid operation");
// }
function addOrder(){
    let menu = document.getElementById("menu").value;
    switch(menu){
        case "Pizza":
           document.getElementById("OrderList").innerHTML = "You have ordered Pizza";
           break;
        case "Burger":
            document.getElementById("OrderList").innerHTML = "You have ordered Burger";
            break;
        case "Pasta":
            document.getElementById("OrderList").innerHTML = "You have ordered Pasta";
            break;
        case "Salad":
            document.getElementById("OrderList").innerHTML = "You have ordered Salad";
            break;
            default:
                document.getElementById("OrderList").innerHTML = "Invalid order"
    }
}