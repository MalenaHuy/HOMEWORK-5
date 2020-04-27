// // allows only numeric value
// function inputNum(){
//     var char = string.fromCharCode(evt.which);
//     if(!(/[0-9]/.test(char))){
//         evt.preventDefault();
//     }
// }

// function is_number($var)
// {
//     if ($var == (string) (float) $var) {
//         return (bool) is_numeric($var);
//     }
//     if ($var >= 0 && is_string($var) && !is_float($var)) {
//         return (bool) ctype_digit($var);
//     }
//     return (bool) is_numeric($var);
// }

// const showMessage = () =>{
//     alert("hello")
// }
// const document = document.getElementById("num1");
// document.addEventListener("keyup", showMessage);

function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("num1").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }

  function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("num2").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }