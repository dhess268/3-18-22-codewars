// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . 
// The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'\


// Code Answer
function usdcny(usd) {
    let cny = 0
    
    cyn = (usd * 6.75).toFixed(2)
    return cyn + ' Chinese Yuan'
  }





// Question: Pillars
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).



// Code answer

function pillars(num_pill, dist, width) {
  
  if (num_pill === 1) {
    return 0
  }
  else{
    let distInCM = dist * 100
    return (num_pill - 1) * distInCM + (num_pill - 2) * width
  }
  
}

// Test cases

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let i = 0;
while (i < 10){
  console.log(pillars(randInt(1, 10), randInt(10, 30), randInt(10, 50)))
  i++
}