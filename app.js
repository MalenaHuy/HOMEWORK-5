function myFunction() {
  var text;
  

  // Get the value of the input field with id="numb"
  var x = document.getElementById("num1").value;
  // convert the string to interger
  var x = parseInt(x,10) 

  var y = document.getElementById("num2").value;
  var y = parseInt(y,10)
  
    // If x is Not a Number or less than 2 or greater than 100
  if ((isNaN(x) || x < 2 || x > 100) || (isNaN(y) || y < 2 || y>100)){
    text = "Invalid input, please try again.";
    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo").style.fontSize = "15px"
    document.getElementById("demo").style.color= "red";
    document.getElementById("demo").style.marginLeft = "25px";
    text="";
    document.getElementById("demo2").innerHTML = text;
  } else { if ( x > y){
    var pirmeNumberlist = minPrimes(x,y);
    function minPrimes(x,y)  {
      let primeArr = [];
      nextPrime:
      for (let i = y; i <= x; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
        primeArr.push(i);
      }
      return primeArr;
    }
      
  }else{
    var pirmeNumberlist = sumPrimes(x,y);
    function sumPrimes(x, y) {
      let primeArr = [];
      nextPrime:
      for (let i = x; i <= y; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
        primeArr.push(i);
      }
      return primeArr;
    }
  }

    
     
    var text1, text2;
    // console.log(pirmeNumberlist)
    text1 = pirmeNumberlist.toString();
    document.getElementById("demo2").innerHTML = text1;
    document.getElementById("demo2").style.fontSize = "15px"
    document.getElementById("demo2").style.color= "red";
    document.getElementById("demo2").style.marginLeft = "25px";

    var length= pirmeNumberlist.length;
    // console.log (pirmeNumberlist.length)
    text2 = "There are "+ length + " prime numbers";
    document.getElementById("demo").innerHTML = text2;
    document.getElementById("demo").style.fontSize = "30px"
    document.getElementById("demo").style.color= "teal";
    document.getElementById("demo").style.marginLeft = "25px";
  }
  
}
  
// function sumPrimes(x, y) {
//   let primeArr = [];
//   nextPrime:
//   for (let i = x; i <= y; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     primeArr.push(i);
//   }
//   return primeArr;
// }


// function minPrimes(x,y)  {
//   let primeArr = [];
//   nextPrime:
//   for (let i = y; i <= x; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     primeArr.push(i);
//   }
//   return primeArr;
// }
  








  
//   // If x is Not a Number or less than 2 or greater than 100
//   if ((isNaN(x) || x < 2 || x > 100) && (isNaN(y) || y < 2 || y > 100)){
//     text = "Invalid input, please try again.";
//     document.getElementById("demo").innerHTML = text;
//     document.getElementById("demo").style.color= "red";
//     document.getElementById("demo").style.marginLeft = "25px";
//   } else {

//         var pirmeNumberlist = sumPrimes(x,y);
//         console.log(pirmeNumberlist)
//         text = pirmeNumberlist.toString();
//         document.getElementById("demo").innerHTML = text;
//         document.getElementById("demo").style.color= "teal";
//         document.getElementById("demo").style.marginLeft = "25px";
//       }
  
// }

// function sumPrimes(num1, num2) {
//   let primeArr = [];
//   nextPrime:
//   for (let i = num1; i <= num2; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     primeArr.push(i);
//   }
//   return primeArr;
// }







// function myFunction() {
//   var text;
  

//   // Get the value of the input field with id="numb"
//   var x = document.getElementById("num1").value;
//   // convert the string to interger
//   var xx = preseInt(x,10) 

//   var y = document.getElementById("num2").value;
//   var yy = preseInt(y,10)

  
//   // If x is Not a Number or less than 2 or greater than 100
//   if ((isNaN(x) || x < 2 || x > 100) && (isNaN(y) || y < 2 || y > 100)){
//     text = "Invalid input, please try again.";
//     document.getElementById("demo").innerHTML = text;
//     document.getElementById("demo").style.color= "red";
//     document.getElementById("demo").style.marginLeft = "25px";
//   } else {

//         var pirmeNumberlist = sumPrimes(x,y);
//         console.log(pirmeNumberlist)
//         text = pirmeNumberlist.toString();
//         document.getElementById("demo").innerHTML = text;
//         document.getElementById("demo").style.color= "teal";
//         document.getElementById("demo").style.marginLeft = "25px";
//       }
  
// }

// function sumPrimes(num1, num2) {
//   let primeArr = [];
//   nextPrime:
//   for (let i = num1; i <= num2; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     primeArr.push(i);
//   }
//   return primeArr;
// }







// function myFunction() {
//   var x, text;
  

//   // Get the value of the input field with id="numb"
//   x = document.getElementById("num1").value;

//   // If x is Not a Number or less than 2 or greater than 100
//   if (isNaN(x) || x < 2 || x > 100) {
//     text = "Invalid input, please try again.";
//   } else {
//     y = document.getElementById("num2").value;
//       if (isNaN(y) || y < 2 || y > 100) {
//         text="Invalid input, please try again."
//       }else{
//         // accepts two inputs to create a prim number and create array 
//         function array (x, y) {
//           let primeArr=[];
//           nextPrime:
//           for (let i = Integer.valueOf(x); i <=Integer.valueOf(y); i++) {
//               for (let j = 2; j<i; j++) {
//                   if (i %j ==0) continue nextPrime;
//               }
//               primeArr.push(i);
//           }
//           return primeArr;
//         }
//         console.log (primeArr)
//         text1="prime arrya"
//         document.getElementById("demo").innerHTML = text1;
//         document.getElementById("demo").style.color= "teal";
//         document.getElementById("demo").style.marginLeft = "25px";
//       }
//   }
  
//   document.getElementById("demo").innerHTML = text;
//   document.getElementById("demo").style.color= "red";
//   document.getElementById("demo").style.marginLeft = "25px";
// }









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