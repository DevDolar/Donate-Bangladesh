// Update Donate
function inputAmount(id) {
  const input = document.getElementById(id).value;
  const inputType = parseFloat(input);
  return inputType;
}

// Update Donate Status
function statusAmount(id) {
  const status = document.getElementById("donate-balance-noakhali").innerText;
  const statusType = parseFloat(status);
  return statusType;
}

// Update Main Balance
function mainAmount(id) {
  const initial = document.getElementById("initial-amount").innerText;
  const initialType = parseFloat(initial);
  return initialType;
}
