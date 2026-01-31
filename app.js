let coins = 0;

let tapLevel = 1;
let tapCost = 2000;

let energyLevel = 1;
let maxEnergy = 500;
let energy = 500;
let energyCost = 2000;

function updateUI() {
  coinsEl.innerText = coins;
  document.getElementById("tapLevel").innerText = tapLevel;
  document.getElementById("tapCost").innerText = tapCost;

  document.getElementById("energyLevel").innerText = energyLevel;
  document.getElementById("energyCost").innerText = energyCost;

  document.getElementById("energy").innerText = energy;
  document.getElementById("maxEnergy").innerText = maxEnergy;
}

const coinsEl = document.getElementById("coins");

function tap() {
  if (energy <= 0) return;

  coins += tapLevel;
  energy -= 1;

  updateUI();
}

function upgradeTap() {
  if (coins < tapCost) return alert("Coin yetarli emas");

  coins -= tapCost;
  tapLevel += 1;
  tapCost *= 5;

  updateUI();
}

function upgradeEnergy() {
  if (coins < energyCost) return alert("Coin yetarli emas");

  coins -= energyCost;
  energyLevel += 1;
  maxEnergy += 500;
  energy = maxEnergy;
  energyCost *= 5;

  updateUI();
}

// Auto refill (5 minut = 300000 ms)
setInterval(() => {
  if (energy < maxEnergy) {
    energy += 1;
    updateUI();
  }
}, 300000 / maxEnergy);

updateUI();
