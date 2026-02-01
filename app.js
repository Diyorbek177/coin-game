const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

let coins = 0;

let tapLevel = 1;
let tapCost = 2000;

let energyLevel = 1;
let maxEnergy = 500;
let energy = 500;
let energyCost = 2000;

function update() {
  coins.innerText = coinsCount;
}

const coinsEl = document.getElementById("coins");

function refresh() {
  coinsEl.innerText = coins;
  energyEl.innerText = energy;
  maxEnergyEl.innerText = maxEnergy;

  tapLevelEl.innerText = tapLevel;
  tapCostEl.innerText = tapCost;

  energyLevelEl.innerText = energyLevel;
  energyCostEl.innerText = energyCost;
}

const energyEl = document.getElementById("energy");
const maxEnergyEl = document.getElementById("maxEnergy");
const tapLevelEl = document.getElementById("tapLevel");
const tapCostEl = document.getElementById("tapCost");
const energyLevelEl = document.getElementById("energyLevel");
const energyCostEl = document.getElementById("energyCost");

function tap() {
  if (energy <= 0) return;

  coins += tapLevel;
  energy--;

  refresh();
}

function upgradeTap() {
  if (coins < tapCost) return alert("Coin yetarli emas");

  coins -= tapCost;
  tapLevel++;
  tapCost *= 5;

  refresh();
}

function upgradeEnergy() {
  if (coins < energyCost) return alert("Coin yetarli emas");

  coins -= energyCost;
  energyLevel++;
  maxEnergy += 500;
  energy = maxEnergy;
  energyCost *= 5;

  refresh();
}

setInterval(() => {
  if (energy < maxEnergy) {
    energy++;
    refresh();
  }
}, 300000 / maxEnergy);

refresh();
