const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');

// show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
 
  //output time
  time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

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
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
    greeting.textContent = 'Good Afteroon';
    greeting.style.color = 'white';
    name.style.color = 'white';
    time.style.color= 'white';
  } else {
    document.body.style.backgroundImage = "url('./images/evening.jpg')";
    greeting.textContent = 'Good Evening';
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



//run
showTime();
setBgGreet();
getName();