function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("num1").value;

  // If x is Not a Number or less than 2 or greater than 100
  if (isNaN(x) || x < 2 || x > 100) {
    text = "Invalid input, please try again.";
  } else {
    x = document.getElementById("num2").value;
      if (isNaN(x) || x < 2 || x > 100) {
        text="Invalid input, please try again."
      }else{
        function arry(num1, num2) {
          let primeArr=[];
          nextPrime:
          for (let i = Integer.valueOf(num1); i <=Integer.valueOf(num2); i++) {
              for (let j = 2; j<i; j++) {
                  if (i %j ==0) continue nextPrime;
              }
              primeArr.push(i);
          }
          return primeArr;
          console.log(primeArr)
        }
        
      }
  }
  
  document.getElementById("demo").innerHTML = text;
  document.getElementById("demo").style.color= "red";
  document.getElementById("demo").style.marginLeft = "25px";
}





// function arr() {
//   num1= document.getElementById("num1").value;
//   num2= document.getElementById("num2").value;
//   let primArr = [];
//   nextPrime:
//   for (let i=2; i <=num2; i++){
//     for (let j = num1; j<i; j++){
//       if (i % j == 0) continue nextPrime;
//     }
//     primeArr.push (i);
//   }
//   return primArr
// }
// console.log(primArr)
// text2 = "There are ... prime number"

// document.getElementById("demo").innerHTML = text;
// document.getElementById("demo").style.color= "teal";
// document.getElementById("demo").style.marginLeft = "25px";



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
// // sumPrimes(10)