// Hamburger menu toggle
function showMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Fetch live crypto prices using CoinGecko API
async function fetchCryptoPrices() {
  const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,solana,ripple&vs_currencies=usd";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const pricesList = document.getElementById("cryptoPrices");
    pricesList.innerHTML = `
      <li><b>BTC = $${data.bitcoin.usd.toLocaleString()}</b></li>
      <li><b>ETH = $${data.ethereum.usd.toLocaleString()}</b></li>
      <li><b>BNB = $${data.binancecoin.usd.toLocaleString()}</b></li>
      <li><b>ADA = $${data.cardano.usd.toLocaleString()}</b></li>
      <li><b>SOL = $${data.solana.usd.toLocaleString()}</b></li>
      <li><b>XRP = $${data.ripple.usd.toLocaleString()}</b></li>
    `;
  } catch (error) {
    console.error("Failed to fetch crypto prices:", error);
  }
}

// Fetch prices on page load
fetchCryptoPrices();
// Update every 60 seconds
setInterval(fetchCryptoPrices, 60000);
