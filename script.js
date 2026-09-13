//your code here
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add-btn");
const cartBody = document.getElementById("cart-body");

let grandTotal = 0;

addButton.addEventListener("click", function () {
    const itemName = nameInput.value.trim();
    const itemPrice = priceInput.value.trim();

    if (itemName === "" || itemPrice === "" || Number(itemPrice) <= 0) {
        return;
    }

    const price = Number(itemPrice);

    const firstRow = cartBody.querySelector("tr");
    const totalCell = firstRow.querySelector('[data-ns-test="grandTotal"]');

    if (totalCell) {
        firstRow.remove();
    }

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

    grandTotal += price;

    const totalRow = document.createElement("tr");
    const totalCellNew = document.createElement("td");

    totalCellNew.setAttribute("data-ns-test", "grandTotal");
    totalCellNew.setAttribute("colspan", "2");
    totalCellNew.textContent = grandTotal;

    totalRow.appendChild(totalCellNew);
    cartBody.appendChild(totalRow);

    nameInput.value = "";
    priceInput.value = "";
});