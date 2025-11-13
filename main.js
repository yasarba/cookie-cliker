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

// --- SAVE GAME FUNCTIE ---
function saveGame() {
  const saveData = {
    cookies: cookies,
    cookiesperclick: cookiesperclick,
    cookiespersecond: cookiespersecond,
    powerAmount: powerAmount,
    // Opslaan van upgrades
    autoclicker1: { cost: autoclicker1.cost, amount: autoclicker1.amount },
    autoclicker2: { cost: autoclicker2.cost, amount: autoclicker2.amount },
    autocount1: { cost: autocount1.cost, amount: autocount1.amount },
    autocount2: { cost: autocount2.cost, amount: autocount2.amount },
  };

  localStorage.setItem("cookieSave", JSON.stringify(saveData));
  alert("🎉 Game saved!");
  console.log("Game saved!");
}

// --- LOAD GAME FUNCTIE ---
function loadGame() {
  const savedData = localStorage.getItem("cookieSave");
  if (savedData) {
    const data = JSON.parse(savedData);

    cookies = data.cookies || 0;
    cookiesperclick = data.cookiesperclick || 1;
    cookiespersecond = data.cookiespersecond || 0;
    powerAmount = data.powerAmount || 0;

    if (data.autoclicker1) {
      autoclicker1.cost = data.autoclicker1.cost;
      autoclicker1.amount = data.autoclicker1.amount;
    }
    if (data.autoclicker2) {
      autoclicker2.cost = data.autoclicker2.cost;
      autoclicker2.amount = data.autoclicker2.amount;
    }
    if (data.autocount1) {
      autocount1.cost = data.autocount1.cost;
      autocount1.amount = data.autocount1.amount;
    }
    if (data.autocount2) {
      autocount2.cost = data.autocount2.cost;
      autocount2.amount = data.autocount2.amount;
    }

    updatecookies();
    alert("📂 Game loaded!");
    console.log("Game loaded!");
  } else {
    alert("⚠️ Geen opgeslagen game gevonden!");
  }
}

// --- AUTOSAVE ELKE 60 SEC ---
setInterval(saveGame, 60000);

// --- LAAD AUTOMATISCH BIJ OPSTART ---
window.addEventListener("load", loadGame);


    
    
    function setTheme(themeName) {
 
  document.body.classList.remove("theme-dark");

  
  if (themeName === 'theme-dark') {
    document.body.classList.add("theme-dark");
  }
  
 
  localStorage.setItem('cookieTheme', themeName);
}


(function() {
  const savedTheme = localStorage.getItem('cookieTheme');
  if (savedTheme) {
    setTheme(savedTheme); 
  }
})();

