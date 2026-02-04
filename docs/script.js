// Hamburger menu toggle
function showMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Dark mode toggle
const darkModeBtn = document.getElementById("darkModeToggle");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Change icon
  const icon = darkModeBtn.querySelector("i");
  if(document.body.classList.contains("dark-mode")){
    icon.classList.replace("fa-moon","fa-sun");
  } else {
    icon.classList.replace("fa-sun","fa-moon");
  }
});

// Live crypto prices using CoinGecko API
async function fetchCryptoPrices() {
  const cryptoList = ["bitcoin","ethereum","binancecoin","cardano","solana","ripple"];
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoList.join(",")}&vs_currencies=usd`);
    const data = await res.json();
    const ul = document.getElementById("cryptoPrices");
    ul.innerHTML = "";
    cryptoList.forEach(coin => {
      ul.innerHTML += `<li><b>${coin.toUpperCase()} = $${data[coin].usd}</b></li>`;
    });
  } catch(err) {
    console.error("Error fetching crypto prices:", err);
  }
}

// Fetch prices every 30 seconds
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 30000);
