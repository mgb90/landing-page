//DOM Elements
const time = document.getElementById('time'),
 greeting = document.getElementById('greeting'),
 name = document.getElementById('name'),
 focus = document.getElementById('focus');

//options 
const showAmPm = true;

//Show Time
function showTime(){
 let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    
    //set AM or Pm
    const amPm = hour >= 12 ? "PM" : "AM";

    //12hr Format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ""}`;

    setTimeout(showTime, 1000);
}

// add Zeros
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBgGreet() {
    let bgNum = Math.floor(Math.random() * 5) + 1 ;
    let today = new Date(),
    hour = today.getHours();

    // if(hour < 12) {
    //     document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080?morning')";
    //     greeting.textContent = "Good Morning";
    // } else if (hour < 18) {
    //     document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1280x720?afternoon')";
    //     greeting.textContent = "Good Afternoon";
    // } else {
    //     document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080?night')";
    //     greeting.textContent = "Good Evening";
    //     document.body.style.color = "white";
    // }
    if(hour < 12) {
        document.body.style.backgroundImage = "url('img/bg__morning"+ bgNum + ".jpg')";
        greeting.textContent = "Good Morning";
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('img/bg__afternoon"+ bgNum + ".jpg')";
        greeting.textContent = "Good Afternoon";
    } else {
        document.body.style.backgroundImage = "url('img/bg__evening"+ bgNum + ".jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    }
}

//get name 
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

//set name 
function setName(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();   
        }
    } else {
      localStorage.setItem('name', e.target.innerText);  
    }
}
//get focus 
function getFocus () {
    if(localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

//set focus
function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();   
        }
    } else {
      localStorage.setItem('focus', e.target.innerText);  
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();
