function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb1"
  x = document.getElementById("num1").value;

  // If x is Not a Number or less than 2 or greater than 100
  if (isNaN(x) || x < 2 || x > 100) {
    text1 = "Invalid input, please try again.";
  } else {
    // Get the value of the input field with id="numb2"
    x = document.getElementById("num2").value;
      if (isNaN(x) || x < 2 || x > 100) {
        text1="Invalid input, please try again."
      }else{
        text2 = "There are ... prime number"
      }
      document.getElementById("demo").innerHTML = text2;
      document.getElementById("demo").style.color= "teal";
      document.getElementById("demo").style.marginLeft = "25px";
  }
  document.getElementById("demo").innerHTML = text1;
  document.getElementById("demo").style.color= "red";
  document.getElementById("demo").style.marginLeft = "25px";
}

function myFunction2() {

}



// // find all the prime number
// function listPrimes() {
//   num1 = document.getElementById("num1").value
//   num2 = document.getElementById("num2").value
//   let i = num1;
//   let list = [];
//   while (i <= num2) {
//     if (isPrime(i)) {
//       list += i;
//     }
//     i++;
//   }
//   return list;
// }
// Console.log ("list");
// //function to check if a number is prime or not
// function isPrime(num2) {
//   for (let i = num1; i < num; i++) {
//     if (x % i === 0) return false;
//   }
//   return x !== 1 && x !== 0;
// }
// //test here
// // sumPrimes(10);