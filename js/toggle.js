function toggleFeature(id) {
  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("transaction-list").classList.add("hidden");

  // Show Element
  document.getElementById(id).classList.remove("hidden");
}

document.getElementById("donation-tab").addEventListener("click", function () {
  toggleFeature("donation-form");
});

document.getElementById("history-tab").addEventListener("click", function () {
  toggleFeature("transaction-list");
});

// Button Toggle Color Set
const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab");

const activeStyle = "bg-[#B4F461]";
const inactiveStyle = "btn-outline";

function setActiveButton(activeButton, inactiveButton) {
  activeButton.classList.add(activeStyle);
  activeButton.classList.remove(inactiveStyle);
  inactiveButton.classList.add(inactiveStyle);
  inactiveButton.classList.remove(activeStyle);
}

// Add event listeners
donationTab.addEventListener("click", function () {
  setActiveButton(donationTab, historyTab);
});

historyTab.addEventListener("click", function () {
  setActiveButton(historyTab, donationTab);
});
