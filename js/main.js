// Noakhali Donate Flood
document
  .getElementById("btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Noakhali Amount Get
    const noakhaliAmount = inputAmount("donate-amount-noakhali");

    // Main Balance Update
    const initialAmount = mainAmount("initial-amount");

    // Validate Initial Amount
    if (initialAmount <= 0) {
      alert("You do not have sufficient balance.");
      return;
    }

    // Validate Number
    if (isNaN(noakhaliAmount) || noakhaliAmount <= 0) {
      alert("Please write a correct amount.");
      return;
    }

    const statusBalance = statusAmount("donate-balance-noakhali");

    const totalNoakhaliBalance = noakhaliAmount + statusBalance;

    document.getElementById("donate-balance-noakhali").innerText =
      totalNoakhaliBalance;

    const UpdateinitialAmount = initialAmount - noakhaliAmount;
    document.getElementById("initial-amount").innerText = UpdateinitialAmount;

    // Transaction History
    const noakhaliTitleName =
      document.getElementById("noakhaliTitle").innerText;
    const h2 = document.createElement("h2");
    h2.classList.add("text-xl", "font-bold");
    h2.innerText = `${noakhaliAmount} Taka is ${noakhaliTitleName}`;

    // Date Added
    const dateTime = document.createElement("p");
    dateTime.innerText = `Date: ${Date()}`;

    // Create a new div for each transaction entry
    const transactionEntry = document.createElement("div");
    transactionEntry.classList.add(
      "transaction-entry",
      "flex",
      "flex-col",
      "gap-4",
      "border",
      "rounded-lg",
      "p-10",
      "mt-5"
    );

    // Append Title and dateTime to the new transaction entry
    transactionEntry.appendChild(h2);
    transactionEntry.appendChild(dateTime);

    // Added Transaction Status
    document.getElementById("transaction").appendChild(transactionEntry);
  });

// ********************************************** Feni Donate ***************************************************************
