/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  if (time <12){
  return ("good morning")
}
  else if (time >12 && time <17) {
  return ("good Evening")
}
  
  else (){
    
  }

}
console.log(greet(1,0));
/* Write your implementation of displayMessage() */
