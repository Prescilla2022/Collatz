let stepsToOne = document.getElementById("steps-to-1");
let highestNumber = document.getElementById("highest-number");
let userNumber = document.getElementById("user-number");
let highest_Number = document.getElementById("highest_number");
let peak = document.getElementById("high");
let stepsHigh = document.getElementById("steps-high");
let numberstepshigh = document.getElementById("number-steps-high");

/*Collatz's conjecture*/
function challenge1() {
  let number = userNumber.value;
  let count = 0;
  let biggest = 0;
  while (number > 1) {
    if (number === 1) {
      break;
    } else if (number % 2 === 0) {
      count += 1;
      number = number / 2;
      if (number > biggest) {
        biggest = number;
      }
    } else {
      count += 1;
      number = number * 3 + 1;
      if (number > biggest) {
        biggest = number;
      }
    }
  }

  console.log("Number of steps to reach 1:" + count);
  console.log("Highest Number reached" + biggest);
  stepsToOne.textContent = count;
  highestNumber.textContent = biggest;
}

/*Extra challenge*/
/*function challenge2() {
  let user_number =userNumber.value;
  
  let highest_number = 0;
  let high = 0;
  let number_steps_high = 0;
  let steps_high = 0;

  for (let i = 1; i <= user_number; i++) {
    let counter = 0;
    let biggest_number = 0;
    biggest = i;
    let number = i;
    while (number > 1) {
      if (number === 1) {
        break;
      } else if (number % 2 === 0) {
        counter += 1;
        number = number / 2;
        if (number > biggest_number) {
          biggest_number = number;
        }
      } else {
        counter += 1;
        number = number * 3 + 1;
        if (number > biggest_number) {
          biggest_number = number;
        }
      }
    }

    
    console.log(i);
    console.log("Number of steps:" + counter);
    console.log("Biggest Number:" + biggest_number);
    if (biggest_number > highest_number) {
      highest_number = biggest_number;
      high = i;
    }
    if (counter > steps_high) {
      steps_high = counter;
      number_steps_high = i;
    }
  }
 
  console.log("Highest number:" + highest_number);
  console.log("Number which reached highest number:" + high);
  console.log("Highest number of steps:" + steps_high);
  console.log("Number with highest number of steps:" + number_steps_high);
}
*/
function challenge2() {
  let user_number = userNumber.value;
  let highest_number = 0;
  let high = 0;
  let number_steps_high = 0;
  let steps_high = 0;

  for (let i = 1; i <= user_number; i++) {
    let number = i;
    let counter = 0;
    let biggest_number = 0;
    while (number > 1) {
      if (number === 1) {
        number_steps_high = i;
        break;
      } else if (number % 2 === 0) {
        counter += 1;
        number = number / 2;
        if (number > biggest_number) {
          biggest_number = number;
        }
      } else {
        counter += 1;
        number = number * 3 + 1;
        if (number > biggest_number) {
          biggest_number = number;
        }
      }
    }

    console.log(i);
    console.log("Number of steps:" + counter);
    console.log("Biggest Number:" + biggest_number);
    if (biggest_number >= highest_number) {
      highest_number = biggest_number;
      high = i;
    }
    if (counter > steps_high) {
      steps_high = counter;
      number_steps_high = i;
    }
  }
  /*console.log("counter:" + counter);*/
  highest_Number.textContent = highest_number;
  peak.textContent = high;
  stepsHigh.textContent = steps_high;
  numberstepshigh.textContent = number_steps_high;
  console.log("Highest number:" + highest_number);
  console.log("Number which reached highest number:" + high);
  console.log("Highest number of steps:" + steps_high);
  console.log("Number with highest number of steps:" + number_steps_high);
}
