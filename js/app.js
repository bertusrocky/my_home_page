//Get UI elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const date = document.getElementById('todayDate');
const formInput = document.getElementById('searchBox');

// show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();
 
  //output time
  time.innerHTML = `${addZero(hour)}:${addZero(min)}`;

  setTimeout(showTime, 1000);
}

// Add zeros
function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting
function setBgGreet(){
  let today = new Date(),
  hour = today.getHours();

  if(hour < 12){
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
    greeting.textContent = 'Good Morning,';
    greeting.style.color = 'white';
    name.style.color = 'white';
    time.style.color= 'white';
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon,';
    greeting.style.color = 'white';
    name.style.color = 'white';
    time.style.color= 'white';
  } else {
    document.body.style.backgroundImage = "url('./images/evening.jpg')";
    greeting.textContent = 'Good Evening,';
    greeting.style.color = 'white';
    name.style.color = 'white';
    time.style.color= 'white';
  }
}

//get name function
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e){
  if (e.type === 'keypress'){
    if (e.key === 'Enter') {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

// Display today's date
let todayDate = new Date();
todayDate = todayDate.toDateString();
date.innerHTML = todayDate;


//run
showTime();
setBgGreet();
getName();