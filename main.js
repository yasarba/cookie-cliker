let cookies = 100;
let cookiesperclick = 1;
let powerAmount = 0;
let cookiespersecond = 0;
 

let cpcupgradecost = 10;
let cpcupgradeamount = 1;
 
class Autoclicker {
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
    document.getElementById(this.htmlid).textContent =
      this.buttontext + this.cost + " Cookies";
  }
}
 
let autoclicker1 = new Autoclicker(100, 10, 3, "upgradecookiespersecond", "Upgrade 1 CPS: ");
let autoclicker2 = new Autoclicker(10, 1, 2, "upgradecookiespersecond2", "Upgrade 2 CPS: ");
 

class Autocount {
  constructor(cost, amount, perClick, buttonID) {
    this.cost = cost;
    this.amount = amount;
    this.perClick = perClick;
    this.buttonID = buttonID;
  }
 
  upgradecookiesperclick() {
    if (cookies >= this.cost) {
      cookies -= this.cost;
      cookiesperclick += this.perClick; 
      this.cost = Math.round(this.cost * 2.5);
      this.amount++;
      updatecookies();
      this.updateUI();
    }
  }
 
  updateUI() {
    document.getElementById(this.buttonID).textContent =
      "Upgrade +" + this.perClick + " per click: " + this.cost + " Cookies";
  }
}
 
let autocount1 = new Autocount(10, 0, 1, "upgradecookiesperclick");
let autocount2 = new Autocount(50, 0, 5, "upgradecookiesperclick2"); 
 
// --- functies ---
function clickcookie(cookieAmount) {
  cookies += cookieAmount * 2 ** powerAmount;
  updatecookies();
}
 
function autoclickcookie() {
  cookies += cookiespersecond;
  updatecookies();
}
 
function updatecookies() {
  document.getElementById("cookiecounter").textContent =
    Math.floor(cookies) + " Cookies";
  document.getElementById("cookiespersecond").textContent =
    cookiespersecond + " Cookies per second";
  document.getElementById("cookiesperclick").textContent =
    cookiesperclick + " Cookies per click";
 
  autoclicker1.updateUI();
  autoclicker2.updateUI();
  autocount1.updateUI();
  autocount2.updateUI();
}
 
document.addEventListener("contextmenu", (e) => e.preventDefault());
setInterval(autoclickcookie, 1000);
updatecookies();
 
function resetgame() {
  if (confirm("Weet je zeker dat je je spel wilt resetten?")) {
    cookies = 0;
    cookiesperclick = 1;
    cookiespersecond = 0;
    powerAmount = 0;
    updatecookies();
    console.log("Game reset!");
  }
}

// --- Thema Switcher Functie ---
function setTheme(themeName) {
  // Verwijder de donkere class
  document.body.classList.remove("theme-dark");

  // Voeg de donkere class toe als dat de keuze is
  if (themeName === 'theme-dark') {
    document.body.classList.add("theme-dark");
  }
  
  // Sla de keuze op in de browser voor de volgende keer
  localStorage.setItem('cookieTheme', themeName);
}

// --- Thema Lader (draait bij het laden van de pagina) ---
(function() {
  const savedTheme = localStorage.getItem('cookieTheme');
  if (savedTheme) {
    setTheme(savedTheme); // Pas het opgeslagen thema toe
  }
})();