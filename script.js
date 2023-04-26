// getting input thorugh id 
let input = document.getElementById("input");
// getting all button 
let button = document.querySelectorAll("button");
// an empty string for storing data 
let string = "";

// making an array of buttons 
let arr = Array.from(button);
// applying forEach loop on button array 
arr.forEach((button) => {
   // adding a click event of button array 
  button.addEventListener("click", (e) => {

   // getting output through if else loop 
   
    if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "DE") {
      string = string.slice(0, -1);
      input.value = string;
    }
     else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
