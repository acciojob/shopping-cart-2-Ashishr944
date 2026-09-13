//your code here

const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add-btn");
const cartBody = document.getElementById("cart-body");

let grandTotal = 0;

addButton.addEventListener("click", function () {
    const itemName = nameInput.value.trim();
    const priceValue = priceInput.value.trim();

    // Reject invalid input
    if (itemName === "" || priceValue === "") {
        return;
    }

    const price = Number(priceValue);

    if (!Number.isFinite(price) || price <= 0) {
        return;
    }

    // Remove total row temporarily
    const totalRow = document.getElementById("total-row");
    if (totalRow) {
        totalRow.remove();
    }

    // Create item row
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.setAttribute("data-ns-test", "item-name");
    nameCell.textContent = itemName;

    const priceCell = document.createElement("td");
    priceCell.setAttribute("data-ns-test", "item-price");
    priceCell.textContent = price;

    row.appendChild(nameCell);
    row.appendChild(priceCell);

    cartBody.appendChild(row);

    // Update total
    grandTotal += price;

    // Add total row at bottom
    const newTotalRow = document.createElement("tr");
    newTotalRow.id = "total-row";

    const totalCell = document.createElement("td");
    totalCell.setAttribute("data-ns-test", "grandTotal");
    totalCell.setAttribute("colspan", "2");
    totalCell.textContent = grandTotal;

    newTotalRow.appendChild(totalCell);
    cartBody.appendChild(newTotalRow);

    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";
});