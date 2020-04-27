function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("num1").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 2 || x > 100) {
    text = "Invalid input, please try again.";
  } else {
    x = document.getElementById("num2").value;
      if (isNaN(x) || x < 2 || x > 100) {
        text="Invalid input, please try again."
      }else{
        text = "";
      }
  }
  document.getElementById("demo").innerHTML = text;
  document.getElementById("demo").style.color= "red";
  document.getElementById("demo").style.marginLeft = "25px";
}


