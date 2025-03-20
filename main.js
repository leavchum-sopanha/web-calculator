const display = document.getElementById("display");
const button = document.querySelectorAll("button")
const num = document.querySelectorAll("num");
const empty = "";

button.forEach(element => {
   element.onclick = () => {
      // enter number-button
      if (element.id == "num") {
         display.innerHTML += element.value;  
         
         if (display.innerHTML.includes("E")) { //if the display include the word E (Errors!)
            display.innerHTML = empty;
            display.innerHTML += element.value;
         }
      }
      // enter operator-button
      else if (element.id == "btn-operator") {
         if (display.innerHTML == empty || display.innerHTML.includes("E")) { //if the display is empty or include the word E (Errors!)
            display.innerHTML += empty;
         }
         else if (display.innerHTML != "Error!") {
            display.innerHTML +=  " " + element.value + " ";
         } 
      }
      // see result
      else if (element.id == "btn-equal") {
         try {
            const result = Function("return " + display.innerHTML)()
            display.innerHTML = result;
         } catch {
            display.innerHTML = "Error!";
         };

      }
      // click to clear
      else if (element.id == "btn-clear") {
         display.innerHTML = empty;
      }
      // click to delete
      else if (element.id == "btn-delete") {
         const textLength = display.innerHTML.length
         const _delete = display.innerHTML.slice(0, textLength - 1);
         display.innerHTML = _delete;
      }
      // enter dot-button
      else if (element.id == "btn-dot") {
         if (display.innerHTML == empty) {
            display.innerHTML = "0."
         } else if (display.innerHTML.includes(".")) {
            display.innerHTML += empty; 
         } else {
            display.innerHTML += element.value;            
         }
      }
      else {
          display.innerHTML = empty;
      } 
   }
});

