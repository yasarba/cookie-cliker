//variables
let cookies = 0;
let cookiesperclick = 1;
let cookiespersecond = 0;


// Upgrade data
let cpcupgradecost = 10;
let cpcupgradeamount = 1;
let cpsupgradecost = 100;
let cpsupgradeamount = 10;

//cookies per second upgrade data
// let cpsupgradecost = 100;
// let cpsupgradeamount = 10;

//cookie button
const cookie = document.getElementById("cookie")

//data labels
const cookiecounter = document.getElementById("cookiecounter");
const cookiespersecondcounter = document.getElementById("cookiespersecond");
const cookiesperclickcounter = document.getElementById("cookiesperclick");

//upgrade buttons
const upgradecookiesperclickbtn = document.getElementById("upgradecookiesperclick");
const upgradecookiespersecondbtn = document.getElementById("upgradecookiespersecond");

//saving data
const localstorage = window.localstorage;

//click the cookie - autoclicks once per second
function clickcookie(cookieAmount) {
  cookies += cookieAmount;
  updatecookies();
	
};

function autoclickcookie(){
  clickcookie(Math.round(cookiespersecond / 100));
  updatecookies();
};

//update all labels
function updatecookies(){
  cookiecounter.textContent = (cookies + " Cookies");
  cookiespersecondcounter.textContent = (cookiespersecond + " Cookies Per Second");
  cookiesperclickcounter.textContent = (cookiesperclick + " Cookie(s) Per Click");
  upgradecookiesperclickbtn.textContent = ("Upgrade Cookies Per Click: " + cpcupgradecost + " Cookies");
  upgradecookiespersecondbtn.textContent = ("Upgrade Cookies Per Second: " + cpsupgradecost + " Cookies");
};

//upgrade cookies per click
function upgradecookiesperclick(){
  
  if (cookies >= cpcupgradecost){
    cookies -= cpcupgradecost;
    cookiesperclick += cpcupgradeamount;
    
    cpcupgradecost = (Math.round(cpcupgradecost*2.5))
    
    updatecookies();
    
  };
  
  
};

function upgradecookiespersecond(){
  
  if (cookies >= cpsupgradecost){
    cookies -= cpsupgradecost;
    cookiespersecond += cpsupgradeamount;
    
    cpsupgradecost = (Math.round(cpsupgradecost*2.5))
    cpsupgradeamount = (Math.round(cpsupgradeamount*3))
    
    updatecookies();
    autoclickcookie();
  };
  
  
  
}


//disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

autoclickcookie();
updatecookies();
 
setInterval(autoclickcookie, 100);
 
setInterval(updatecookies, 1000);

setInterval(function(){
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cookiesperclick", cookiesperclick);
    localStorage.setItem("cookiespersecond", cookiespersecond);
    localStorage.setItem("cpcupgradecost", cpcupgradecost);
    localStorage.setItem("cpsupgradecost", cpsupgradecost);
    localStorage.setItem("cpsupgradeamount", cpsupgradeamount);
}, 10000);


















/*updatescookies();{
  this.cpsupgradeamount = 10;
  this.localstorage = window.localstorage;
  this.cookie = document.getElementById("cookie");
  this.cookiecounter = document.getElementById("cookiecounter");
  this.cookiespersecondcounter = document.getElementById("cookiespersecond");
  this.cookiesperclickcounter = document.getElementById("cookiesperclick");
  this.upgradecookiesperclickbtn = document.getElementById("upgradecookiesperclick");
  this.upgradecookiespersecondbtn = document.getElementById("upgradecookiespersecond");
  this.cookie.addEventListener("click", () => this.clickcookie(this.cookiesperclick));
    updatecookies();

  setInterval(() => this.autoclickcookie(), 10);
  this.upgradecookiesperclickbtn.addEventListener("click", () => this.upgradecookiesperclick());
  this.upgradecookiespersecondbtn.addEventListener("click", () => this.upgradecookiespersecond());
  setInterval(() => this.savethegame(), 1000);
  this.loadthegame();
};
console.log("Game Loaded");
*/