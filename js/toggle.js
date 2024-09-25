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
