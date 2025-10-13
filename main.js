let cookies = 100;
let cookiesperclick = 1;
let powerAmount = 0;
let cookiespersecond = 0;
let cookiespersecond2 = 0;

// Upgrade data
let cpcupgradecost = 10;
let cpcupgradeamount = 1;

let cpsupgradecost = 100;
let cpsupgradeamount = 10;

let cpsupgradecost2 = 10;
let cpsupgradeamount2 = 1;

// Cookie button
const cookie = document.getElementById("cookie");

// Data labels
const cookiecounter = document.getElementById("cookiecounter");
const cookiespersecondcounter = document.getElementById("cookiespersecond");
const cookiesperclickcounter = document.getElementById("cookiesperclick");

// Upgrade buttons
const upgradecookiesperclickbtn = document.getElementById("upgradecookiesperclick");
const upgradecookiesperclick2btn = document.getElementById("upgradecookiesperclick2");
const upgradecookiespersecondbtn = document.getElementById("upgradecookiespersecond");
const upgradecookiespersecond2btn = document.getElementById("upgradecookiespersecond2");

// Click the cookie
function clickcookie(cookieAmount) {
  cookies += cookieAmount * 2 ** powerAmount;
  updatecookies();
}

// Auto-click per second
function autoclickcookie() {
  let totalCPS = cookiespersecond + cookiespersecond2;
  cookies += totalCPS;
  updatecookies();
}

// Update labels
function updatecookies() {
  let totalCPS = cookiespersecond + cookiespersecond2;
  cookiecounter.textContent = Math.floor(cookies) + " Cookies";
  cookiespersecondcounter.textContent = totalCPS + " Cookies Per Second (CPS1: " + cookiespersecond + ", CPS2: " + cookiespersecond2 + ")";
  cookiesperclickcounter.textContent = cookiesperclick + " Cookie(s) Per Click";
  upgradecookiesperclickbtn.textContent = "Upgrade Cookies Per Click: " + cpcupgradecost + " Cookies";
  upgradecookiespersecondbtn.textContent = "Upgrade Cookies Per Second 1: " + cpsupgradecost + " Cookies";
  upgradecookiespersecond2btn.textContent = "Upgrade Cookies Per Second 2: " + cpsupgradecost2 + " Cookies";
  upgradecookiesperclick2btn.textContent = "Upgrade Double Click: 50 Cookies";
}

// Upgrades
function upgradecookiesperclick() {
  if (cookies >= cpcupgradecost) {
    cookies -= cpcupgradecost;
    cookiesperclick += cpcupgradeamount;
    cpcupgradecost = Math.round(cpcupgradecost * 2.5);
    updatecookies();
  }
}

function upgradecookiesperclick2() {
  if (cookies >= 50) {
    cookies -= 50;
    powerAmount += 1;
    updatecookies();
  }
}

function upgradecookiespersecond() {
  if (cookies >= cpsupgradecost) {
    cookies -= cpsupgradecost;
    cookiespersecond += cpsupgradeamount;
    cpsupgradecost = Math.round(cpsupgradecost * 2.5);
    cpsupgradeamount = Math.round(cpsupgradeamount * 3);
    updatecookies();
  }
}

function upgradecookiespersecond2() {
  if (cookies >= cpsupgradecost2) {
    cookies -= cpsupgradecost2;
    cookiespersecond2 += cpsupgradeamount2;
    cpsupgradecost2 = Math.round(cpsupgradecost2 * 2.5);
    cpsupgradeamount2 = Math.round(cpsupgradeamount2 * 2);
    updatecookies();
  }
}

// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Start game loop
setInterval(autoclickcookie, 1000);
updatecookies();



function resetgame() {
  if (confirm("Weet je zeker dat je je spel wilt resetten?")) {
    // Verwijder opgeslagen data
    localStorage.clear();

    // Zet alle waarden terug naar begin
    cookies = 0;
    cookiesperclick = 1;
    powerAmount = 0;
    cookiespersecond = 0;
    cookiespersecond2 = 0;
    cpcupgradecost = 10;
    cpcupgradeamount = 1;
    cpsupgradecost = 100;
    cpsupgradeamount = 10;
    cpsupgradecost2 = 10;
    cpsupgradeamount2 = 1;

    // Werk de tekst op het scherm bij
    updatecookies();

    console.log("Game reset!");
  }
}


console.log("Cookie Clicker loaded with 2 CPS systems!");
