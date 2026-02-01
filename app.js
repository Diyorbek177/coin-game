let coinsCount = parseInt(localStorage.getItem("coins")) || 0;
let energy = parseInt(localStorage.getItem("energy")) || 500;
let maxEnergy = parseInt(localStorage.getItem("maxEnergy")) || 500;

let tapPower = parseInt(localStorage.getItem("tapPower")) || 1;
let tapLevel = parseInt(localStorage.getItem("tapLevel")) || 1;
let energyLevel = parseInt(localStorage.getItem("energyLevel")) || 1;

let tapCost = parseInt(localStorage.getItem("tapCost")) || 2000;
let energyCost = parseInt(localStorage.getItem("energyCost")) || 2000;

updateUI();

function updateUI() {
  document.getElementById("coins").innerText = coinsCount;
  document.getElementById("energy").innerText = energy;
  document.getElementById("maxEnergy").innerText = maxEnergy;

  document.getElementById("tapLevel").innerText = tapLevel;
  document.getElementById("energyLevel").innerText = energyLevel;

  document.getElementById("tapCost").innerText = tapCost;
  document.getElementById("energyCost").innerText = energyCost;
}

function save() {
  localStorage.setItem("coins", coinsCount);
  localStorage.setItem("energy", energy);
  localStorage.setItem("maxEnergy", maxEnergy);

  localStorage.setItem("tapPower", tapPower);
  localStorage.setItem("tapLevel", tapLevel);
  localStorage.setItem("energyLevel", energyLevel);

  localStorage.setItem("tapCost", tapCost);
  localStorage.setItem("energyCost", energyCost);
}

function tap() {
  if (energy <= 0) return;

  coinsCount += tapPower;
  energy--;

  updateUI();
  save();
}

function upgradeTap() {
  if (coinsCount < tapCost) return alert("Coin yetarli emas");

  coinsCount -= tapCost;
  tapLevel++;
  tapPower++;

  tapCost = tapCost * 5;

  updateUI();
  save();
}

function upgradeEnergy() {
  if (coinsCount < energyCost) return alert("Coin yetarli emas");

  coinsCount -= energyCost;
  energyLevel++;

  maxEnergy += 500;
  energy = maxEnergy;

  energyCost = energyCost * 5;

  updateUI();
  save();
}

// Auto energy refill (5 minutda to‘lib boradi)
setInterval(() => {
  if (energy < maxEnergy) {
    energy++;
    updateUI();
    save();
  }
}, 600); // har 0.6 sekundda 1 energy (500 = 5 minut)
