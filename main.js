let cookies = 100;
let cookiesperclick = 1;
let powerAmount = 0;
let cookiespersecond = 0;

//cookies per click upgrade data
let cpcupgradecost = 10;
let cpcupgradeamount = 1;

//cookies per second upgrade data
let cpsupgradecost = 100;
let cpsupgradeamount = 10;

//cookie button
const cookie = document.getElementById("cookie")

//data labels
const cookiecounter = document.getElementById("cookiecounter");
const cookiespersecondcounter = document.getElementById("cookiespersecond");
const cookiesperclickcounter = document.getElementById("cookiesperclick");

//upgrade buttons
const upgradecookiesperclickbtn = document.getElementById("upgradecookiesperclick");
const upgradecookiesperclick2btn = document.getElementById("upgradecookiesperclick2");
const upgradecookiespersecondbtn = document.getElementById("upgradecookiespersecond");

//saving data
const localstorage = window.localStorage;

//*Click the cookie
function clickcookie(cookieAmount) {
  cookies += cookieAmount * 2**powerAmount;
  updatecookies();
}

// Auto-click per tick
function autoclickcookie() {
  clickcookie(cookiespersecond);
  updatecookies();
}

// Update all labels
function updatecookies() {
  cookiecounter.textContent = cookies + " Cookies";
  cookiespersecondcounter.textContent = cookiespersecond + " Cookies Per Second";
  cookiesperclickcounter.textContent = cookiesperclick + " Cookie(s) Per Click";
  upgradecookiesperclickbtn.textContent = "Upgrade Cookies Per Click: " + cpcupgradecost + " Cookies";
  upgradecookiespersecondbtn.textContent = "Upgrade Cookies Per Second: " + cpsupgradecost + " Cookies";
  upgradecookiesperclick2btn.textContent = "Upgrade Double Click: 50 Cookies";
}

// Upgrade cookies per click
function upgradecookiesperclick() {
  if (cookies >= cpcupgradecost) {
    cookies -= cpcupgradecost;
    cookiesperclick += cpcupgradeamount;
    cpcupgradecost = Math.round(cpcupgradecost * 2.5);
   updatecookies();
  }
}

// Upgrade double click
function upgradecookiesperclick2() {
  if (cookies >= 50) {
    cookies -= 50;
    powerAmount += 1;
    updatecookies();
  }
}


// Upgrade cookies per second
function upgradecookiespersecond() {
  if (cookies >= cpsupgradecost) {
    cookies -= cpsupgradecost;
    cookiespersecond += cpsupgradeamount;
    cpsupgradecost = Math.round(cpsupgradecost * 2.5);
    cpsupgradeamount = Math.round(cpsupgradeamount * 3);
    updatecookies();
  }
}




 
//disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());
autoclickcookie();
setInterval(autoclickcookie, 1000);
updatecookies();
setInterval(function() {
  localstorage.setItem("cookies", cookies);
  localstorage.setItem("cookiesperclick", cookiesperclick);
  localstorage.setItem("cookiespersecond", cookiespersecond);
  localstorage.setItem("cpcupgradecost", cpcupgradecost);
  localstorage.setItem("cpsupgradecost", cpsupgradecost);
  localstorage.setItem("cpsupgradeamount", cpsupgradeamount);
  localstorage.setItem("powerAmount", powerAmount);
}, 1000);
console.log("cookie clicker loaded");