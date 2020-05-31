/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const hm_time = parseInt(time)
  if (hm_time <12){
  return ("good morning")
}
  else if (hm_time >12 && hm_time <17) {
  return ("good Evening")
}
else {
  return("good night")
}


  }
}
  console.log(greet(1,0));
/* Write your implementation of displayMessage() */
