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

    const statusBalance = statusAmountNoakhali("donate-balance-noakhali");

    const totalNoakhaliBalance = noakhaliAmount + statusBalance;

    document.getElementById("donate-balance-noakhali").innerText =
      totalNoakhaliBalance;

    const UpdateinitialAmount = initialAmount - noakhaliAmount;
    document.getElementById("initial-amount").innerText = UpdateinitialAmount;
    modal.showModal();

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

    // Clear Value
    document.getElementById("donate-amount-noakhali").value = "";
  });

// ********************************************** Feni Donate ***************************************************************
document.getElementById("btn-feni").addEventListener("click", function (event) {
  event.preventDefault();

  // Feni Amount Get
  const feniAmount = inputAmount("donate-amount-feni");

  // Main Balance Update
  const initialAmount = mainAmount("initial-amount");

  // Validate Initial Amount
  if (initialAmount <= 0) {
    alert("You do not have sufficient balance.");
    return;
  }

  // Validate Number
  if (isNaN(feniAmount) || feniAmount <= 0) {
    alert("Please write a correct amount.");
    return;
  }

  const statusBalance = statusAmountFeni("donate-balance-feni");

  const totalfeniBalance = feniAmount + statusBalance;

  document.getElementById("donate-balance-feni").innerText = totalfeniBalance;

  const UpdateinitialAmount = initialAmount - feniAmount;
  document.getElementById("initial-amount").innerText = UpdateinitialAmount;
  modal.showModal();

  // Transaction History
  const feniTitleName = document.getElementById("feniTitle").innerText;
  const h2 = document.createElement("h2");
  h2.classList.add("text-xl", "font-bold");
  h2.innerText = `${feniAmount} Taka is ${feniTitleName}`;

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

  // Clear Value
  document.getElementById("donate-amount-feni").value = "";
});

// ********************************************** Quota Donate ***************************************************************
document
  .getElementById("btn-quota")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Quota Amount Get
    const quotaAmount = inputAmount("donate-amount-quota");

    // Main Balance Update
    const initialAmount = mainAmount("initial-amount");

    // Validate Initial Amount
    if (initialAmount <= 0) {
      alert("You do not have sufficient balance.");
      return;
    }

    // Validate Number
    if (isNaN(quotaAmount) || quotaAmount <= 0) {
      alert("Please write a correct amount.");
      return;
    }

    const statusBalance = statusAmountQuota("donate-balance-quota");

    const totalquotaBalance = quotaAmount + statusBalance;

    document.getElementById("donate-balance-quota").innerText =
      totalquotaBalance;

    const UpdateinitialAmount = initialAmount - quotaAmount;
    document.getElementById("initial-amount").innerText = UpdateinitialAmount;
    modal.showModal();

    // Transaction History
    const quotaTitleName = document.getElementById("quotaTitle").innerText;
    const h2 = document.createElement("h2");
    h2.classList.add("text-xl", "font-bold");
    h2.innerText = `${quotaAmount} Taka is ${quotaTitleName}`;

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

    // Clear Value
    document.getElementById("donate-amount-quota").value = "";
  });
