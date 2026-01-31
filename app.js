let coins = 0;
let totalEarned = 0;
let power = 1;

function powerCost() {
  return 50 + (power - 1)*25;
}

function openTab(tab) {
  document.querySelectorAll('.tab').forEach(t=>t.style.display="none");
  document.getElementById(tab).style.display="block";
}

openTab('earn');

function tap() {
  coins += power;
  totalEarned += power;
  update();
}

function buyPower() {
  const cost = powerCost();
  if (coins >= cost) {
    coins -= cost;
    power++;
    update();
  } else alert("Coin yetarli emas!");
}

function update() {
  document.getElementById("coins").innerText = coins;
  document.getElementById("total").innerText = totalEarned;
  document.getElementById("powerDisplay").innerText = power;
  document.getElementById("powerCost").innerText = powerCost();
  document.getElementById("refCode").value = "REF" + Math.floor(Math.random()*999999);
}
