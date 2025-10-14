let cookies = 100;
let cookiesperclick = 1;
let powerAmount = 0;
let cookiespersecond = 0;

// Upgrade data
let cpcupgradecost = 10;
let cpcupgradeamount = 1;

class Autoclicker {
  cost;
  amount;
  amountIncrease;
  htmlid;
  buttontext;

  constructor(cost, amount, amountIncrease, htmlid, buttontext) {
    this.cost = cost;
    this.amount = amount;
    this.amountIncrease = amountIncrease;
    this.htmlid = htmlid;
    this.buttontext = buttontext;
  }

  upgradecookiespersecond() {
    if (cookies >= this.cost) {
      cookies -= this.cost;
      cookiespersecond += this.amount;
      this.cost = Math.round(this.cost * 2.5);
      this.amount = Math.round(this.amount * this.amountIncrease);
      updatecookies();
      this.updateUI();
    }
  }

  updateUI() {
    let button = document.getElementById(this.htmlid);
    button.textContent = this.buttontext + this.cost + " Cookies";
  }
}

let autoclicker1 = new Autoclicker(100, 10, 3, "upgradecookiespersecond", "Upgrade 1 Cookies Per Second: ");
let autoclicker2 = new Autoclicker(10, 1, 2, "upgradecookiespersecond2", "Upgrade 2 Cookies Per Second: ");

// let cpsupgradecost = 100;
// let cpsupgradeamount = 10;

// let cpsupgradecost2 = 10;
// let cpsupgradeamount2 = 1;

// Cookie button
const cookie = document.getElementById("cookie");

// Data labels
const cookiecounter = document.getElementById("cookiecounter");
const cookiespersecondcounter = document.getElementById("cookiespersecond");
const cookiesperclickcounter = document.getElementById("cookiesperclick");

// Upgrade buttons
const upgradecookiesperclickbtn = document.getElementById("upgradecookiesperclick");
const upgradecookiesperclick2btn = document.getElementById("upgradecookiesperclick2");
// const upgradecookiespersecondbtn = document.getElementById("upgradecookiespersecond");
// const upgradecookiespersecond2btn = document.getElementById("upgradecookiespersecond2");

/**
 * 1. Maak een class die alle properties die bij elkaar horen groepeert. (van per seconde)
 * 2. Vervang alle losse variabelen door een instantie van die class.
 * 3. Repareer je functies zodat ze met de class werken. (met de nieuwe namen)
 * 4. Probeer de functies die op elkaar lijken te combineren tot één functie die met een parameter werkt.
 * 5. Verplaats de functie naar de class en gebruik "this" om de properties aan te roepen.
 * 
 */

class Autocount {
  cost;
  amount;
  perSecond;
  buttonID;

  constructor(cost, amount, perSecond, buttonID) {
    this.cost = cost;
    this.amount = amount;
    this.perSecond = perSecond;
    this.buttonID = buttonID;
  }


  upgradecookiesperclick() {
    if (cookies >= this.cost) {
      cookies -= this.cost;
      cookiespersecond += this.perSecond;
      this.cost = Math.round(this.cost * 2.5);
      this.amount++;
      updatecookies();
      this.updateUI();
    }
  }
  updateUI() {
    let button = document.getElementById(this.buttonID);
    button.textContent = this.perSecond + " Double Click: " + this.cost + " Cookies";

  }
}
let autocount1 = new Autocount(10, 0, 1, "upgradecookiesperclick");
let autocount2 = new Autocount(50, 0, 5, "upgradecookiesperclick2");








///function upgradecookiesperclick() {
// if (cookies >= cpcupgradecost) {
//     cookies -= cpcupgradecost;
//     cookiesperclick += cpcupgradeamount;
//     cpcupgradecost = Math.round(cpcupgradecost * 2.5);
//     updatecookies();
//   }
// }

//function upgradecookiesperclick2() {
/// if (cookies >= 50) {
//     cookies -= 50;
//     powerAmount += 1;
//     updatecookies();
//   }
// }


// Click the cookie
function clickcookie(cookieAmount) {
  cookies += cookieAmount * 2 ** powerAmount;
  updatecookies();
}

// Auto-click per second
function autoclickcookie() {
  cookies += cookiespersecond;
  updatecookies();
}

//*Update labels
function updatecookies() {
  cookiecounter.textContent = Math.floor(cookies) + " Cookies";
  //cookiespersecondcounter.textContent = totalCPS + " Cookies Per Second (CPS1: " + cookiespersecond + ", CPS2: " + cookiespersecond2 + ")";
  //cookiesperclickcounter.textContent = cookiesperclick + " Cookie(s) Per Click";
  // upgradecookiesperclickbtn.textContent = "Upgrade Cookies Per Click: " + cpcupgradecost + " Cookies";
  // upgradecookiespersecondbtn.textContent = "Upgrade Cookies Per Second 1: " + cpsupgradecost + " Cookies";
  // upgradecookiespersecond2btn.textContent = "Upgrade Cookies Per Second 2: " + cpsupgradecost2 + " Cookies";
  autoclicker1.updateUI();
  autoclicker2.updateUI();
  autocount1.updateUI();
  autocount2.updateUI();
  // upgradecookiesperclick2btn.textContent = "Upgrade Double Click: 50 Cookies";
}

// Upgrades
//function upgradecookiesperclick() {
  //if (cookies >= cpcupgradecost) {
   // cookies -= cpcupgradecost;
    //cookiesperclick += cpcupgradeamount;
    //cpcupgradecost = Math.round(cpcupgradecost * 2.5);
    //updatecookies();
 // }
//}

function upgradecookiesperclick2() {
  if (cookies >= 50) {
    cookies -= 50;
    powerAmount += 1;
    updatecookies();
  }
}

// function upgradecookiespersecond(clicker) {
//   if (cookies >= clicker.cost) {
//     cookies -= clicker.cost;
//     cookiespersecond += clicker.amount;
//     clicker.cost = Math.round(clicker.cost * 2.5);
//     clicker.amount = Math.round(clicker.amount * clicker.amountIncrease);
//     updatecookies();
//   }
// }

// function upgradecookiespersecond2() {
//   if (cookies >= autoclicker2.cost) {
//     cookies -= autoclicker2.cost;
//     cookiespersecond += autoclicker2.amount;
//     autoclicker2.cost = Math.round(autoclicker2.cost * 2.5);
//     autoclicker2.amount = Math.round(autoclicker2.amount * 2);
//     updatecookies();
//   }
// }

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
