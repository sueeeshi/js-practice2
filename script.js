let registeredEarly = false;
var userAge;
var userName;
let raceNumber;

function getValueName() {
  userName = document.getElementById('userName').value;
}

function getValueAge() {
  userAge = document.getElementById('userAge').value;

  if (Number(userAge) >= 18){
    document.getElementById('showWhenAbove18').style.display = "block";
  } else {
    document.getElementById('showWhenAbove18').style.display = "none";
  }
}

function earlyYes() {
  registeredEarly = true;
}
function earlyNo() {
  registeredEarly = false;
}

function showResult() {
  raceNumber = Math.floor(Math.random() * 1000);
  if (registeredEarly && Number(userAge) >= 18) {
    document.getElementById('yourResult').innerHTML = (`Hi, ${userName}! Your race number is ${raceNumber + 1000}. <br /><br /> Race will start at 9:30 AM.`);
  } else if (!registeredEarly && userAge >= 18) {
    document.getElementById('yourResult').innerHTML = (`Hi, ${userName}! Your race number is ${raceNumber}.<br /><br /> Race will start at 11:00 AM.`);
  } else {
    document.getElementById('yourResult').innerHTML = (`Hi, ${userName}! Your race number is ${raceNumber}. <br /><br /> Race will start at 12:30 PM.`);
}

  document.getElementById("registerNow").reset();
  document.getElementById("showWhenAbove18").style.display = "none";
  return true;

};

document.querySelector("button").addEventListener("click", function(event) {
      showResult();
      event.preventDefault();
      registeredEarly = false;
  }, false);
