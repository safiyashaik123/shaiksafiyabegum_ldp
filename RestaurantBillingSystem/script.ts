// =========================================
// INTERFACES
// =========================================

interface MenuItem {
    id: number;
    name: string;
    category: string;
    price: number;
}

interface OrderItem {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
}

interface RestaurantTable {
    id: number;
    name: string;
    totalItems: number;
    totalPrice: number;
    orders: OrderItem[];
}
// =========================================
// CURRENT TABLE
// =========================================

let currentTable: RestaurantTable | null = null;

// =========================================
// MENU DATA
// =========================================

const menu: MenuItem[] = [
    {
        id: 1,
        name: "Chicken Biryani",
        category: "Main Course",
        price: 250
    },
    {
        id: 2,
        name: "Veg Fried Rice",
        category: "Main Course",
        price: 180
    },
    {
        id: 3,
        name: "French Fries",
        category: "Appetizer",
        price: 120
    },
    {
        id: 4,
        name: "Coke",
        category: "Beverage",
        price: 50
    },
    {
        id: 5,
        name: "Ice Cream",
        category: "Dessert",
        price: 80
    }
];

// =========================================
// TABLE DATA
// =========================================

const tables: RestaurantTable[] = [
    {
        id: 1,
        name: "Table 1",
        totalItems: 0,
        totalPrice: 0,
        orders: []
    },
    {
        id: 2,
        name: "Table 2",
        totalItems: 0,
        totalPrice: 0,
        orders: []
    },
    {
        id: 3,
        name: "Table 3",
        totalItems: 0,
        totalPrice: 0,
        orders: []
    },
    {
        id: 4,
        name: "Table 4",
        totalItems: 0,
        totalPrice: 0,
        orders: []
    }
];

// =========================================
// DISPLAY MENU
// =========================================

function displayMenu(menuItems: MenuItem[]): void {

    const menuContainer = document.getElementById("menuContainer");

    if (!menuContainer) return;

    menuContainer.innerHTML = "";

    menuItems.forEach((item) => {

        const card = document.createElement("div");

        card.className = "menu-card";

        card.setAttribute("draggable", "true");

        card.dataset.id = item.id.toString();

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>Category : ${item.category}</p>
            <p>Price : ₹${item.price}</p>
        `;

        menuContainer.appendChild(card);

    });

}

// =========================================
// DISPLAY TABLES
// =========================================

function displayTables(tableList: RestaurantTable[]): void {

    const tablesContainer = document.getElementById("tablesContainer");

    if (!tablesContainer) return;

    tablesContainer.innerHTML = "";

    tableList.forEach((table) => {

        const card = document.createElement("div");

        card.className = "table-card";

        card.dataset.id = table.id.toString();

        card.innerHTML = `
            <h3>${table.name}</h3>

            <p>Total Items : ${table.totalItems}</p>

            <p>Total Price : ₹${table.totalPrice}</p>
        `;

        card.addEventListener("click", () => {

            openOrderModal(table);

        });

        tablesContainer.appendChild(card);

    });

}
// =========================================
// INITIAL LOAD
// =========================================

displayMenu(menu);

displayTables(tables);
// =========================================
// SEARCH MENU
// =========================================

const menuSearch = document.getElementById("menuSearch") as HTMLInputElement;

menuSearch.addEventListener("input", () => {

    const searchText = menuSearch.value.toLowerCase();

    const filteredMenu = menu.filter(item =>

        item.name.toLowerCase().includes(searchText) ||

        item.category.toLowerCase().includes(searchText)

    );

    displayMenu(filteredMenu);

    enableDrag();

});

// =========================================
// SEARCH TABLE
// =========================================

const tableSearch = document.getElementById("tableSearch") as HTMLInputElement;

tableSearch.addEventListener("input", () => {

    const searchText = tableSearch.value.toLowerCase();

    const filteredTables = tables.filter(table =>

        table.name.toLowerCase().includes(searchText)

    );

    displayTables(filteredTables);

    enableDrop();

});


// =========================================
// DRAG ITEM VARIABLE
// =========================================

let draggedItem: MenuItem | null = null;
// =========================================
// MODAL ELEMENTS
// =========================================

const modal = document.getElementById("orderModal") as HTMLDivElement;

const orderContainer = document.getElementById("orderContainer") as HTMLDivElement;

const closeModal = document.getElementById("closeModal") as HTMLSpanElement;

const grandTotal = document.getElementById("grandTotal") as HTMLHeadingElement;

const generateBillBtn = document.getElementById("generateBill") as HTMLButtonElement;

// =========================================
// BILL MODAL ELEMENTS
// =========================================

const billModal = document.getElementById("billModal") as HTMLDivElement;

const billContainer = document.getElementById("billContainer") as HTMLDivElement;

const closeBill = document.getElementById("closeBill") as HTMLSpanElement;

const printBill = document.getElementById("printBill") as HTMLButtonElement;

// =========================================
// ENABLE DRAG
// =========================================

function enableDrag(): void {

    const menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach((card) => {

        card.addEventListener("dragstart", (event) => {

            const element = event.currentTarget as HTMLElement;

            const id = Number(element.dataset.id);

            draggedItem = menu.find(item => item.id === id) || null;

        });

    });

}
// =========================================
// ENABLE DROP
// =========================================

function enableDrop(): void {

    const tableCards = document.querySelectorAll(".table-card");

    tableCards.forEach((card) => {

        card.addEventListener("dragover", (event) => {

            event.preventDefault();

            const element = event.currentTarget as HTMLElement;

            element.classList.add("drag-over");

        });

        card.addEventListener("dragleave", (event) => {

            const element = event.currentTarget as HTMLElement;

            element.classList.remove("drag-over");

        });

        card.addEventListener("drop", (event) => {

            event.preventDefault();

            const element = event.currentTarget as HTMLElement;

            element.classList.remove("drag-over");

            const tableId = Number(element.dataset.id);

            const table = tables.find(t => t.id === tableId);

            if (!table || !draggedItem) return;

            const existingItem = table.orders.find(order => order.id === draggedItem!.id);

            if (existingItem) {

                existingItem.quantity++;

            } else {

                table.orders.push({

                    ...draggedItem,

                    quantity: 1

                });

            }

            table.totalItems++;

            table.totalPrice += draggedItem.price;

            displayTables(tables);

            enableDrop();

        });

    });

}


// =========================================
// ENABLE EVENTS
// =========================================

enableDrag();

enableDrop();
// =========================================
// OPEN MODAL
// =========================================

function openOrderModal(table: RestaurantTable): void {

    currentTable = table;

    modal.style.display = "flex";

    renderOrders();

}
// =========================================
// CLOSE MODAL
// =========================================

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});
window.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});
// =========================================
// DISPLAY ORDERS
// =========================================

// =========================================
// DISPLAY ORDERS
// =========================================

function renderOrders(): void {

    if (!currentTable) return;

    orderContainer.innerHTML = "";

    currentTable.orders.forEach((item) => {

        const row = document.createElement("div");

        row.className = "order-item";

        row.innerHTML = `

            <div class="order-details">

                <h4>${item.name}</h4>

                <p>₹${item.price}</p>

            </div>

            <div class="order-actions">

                <button class="minus-btn" data-id="${item.id}">-</button>

                <span>${item.quantity}</span>

                <button class="plus-btn" data-id="${item.id}">+</button>

                <button class="delete-btn" data-id="${item.id}">🗑</button>

            </div>

        `;

        orderContainer.appendChild(row);

    });

    grandTotal.innerText = `Grand Total : ₹${currentTable.totalPrice}`;

    attachOrderEvents();

}
// =========================================
// ORDER BUTTON EVENTS
// =========================================

function attachOrderEvents(): void {

    // PLUS BUTTON

    document.querySelectorAll(".plus-btn").forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number((button as HTMLElement).dataset.id);

            increaseQuantity(id);

        });

    });


    // MINUS BUTTON

    document.querySelectorAll(".minus-btn").forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number((button as HTMLElement).dataset.id);

            decreaseQuantity(id);

        });

    });


    // DELETE BUTTON

    document.querySelectorAll(".delete-btn").forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number((button as HTMLElement).dataset.id);

            deleteItem(id);

        });

    });

}
// =========================================
// INCREASE QUANTITY
// =========================================

function increaseQuantity(id: number): void {

    if (!currentTable) return;

    const item = currentTable.orders.find(order => order.id === id);

    if (!item) return;

    item.quantity++;

    currentTable.totalItems++;

    currentTable.totalPrice += item.price;

    renderOrders();

    displayTables(tables);

    enableDrop();

}
// =========================================
// DECREASE QUANTITY
// =========================================

function decreaseQuantity(id: number): void {

    if (!currentTable) return;

    const item = currentTable.orders.find(order => order.id === id);

    if (!item) return;

    item.quantity--;

    currentTable.totalItems--;

    currentTable.totalPrice -= item.price;

    if (item.quantity === 0) {

        deleteItem(id);

        return;

    }

    renderOrders();

    displayTables(tables);

    enableDrop();

}
// =========================================
// DELETE ITEM
// =========================================

function deleteItem(id: number): void {

    if (!currentTable) return;

    const item = currentTable.orders.find(order => order.id === id);

    if (!item) return;

    currentTable.totalItems -= item.quantity;

    currentTable.totalPrice -= item.quantity * item.price;

    currentTable.orders = currentTable.orders.filter(order => order.id !== id);

    renderOrders();

    displayTables(tables);

    enableDrop();

}
// =========================================
// GENERATE BILL
// =========================================

// =========================================
// GENERATE BILL
// =========================================

generateBillBtn.addEventListener("click", () => {

    if (!currentTable) return;

    let html = "";

    html += `
    <div class="bill-header">

        <h3>Restaurant Bill</h3>

        <p><strong>Table :</strong> ${currentTable.name}</p>

        <hr>

        <div class="bill-row">

            <strong>Item</strong>

            <strong>Qty</strong>

            <strong>Amount</strong>

        </div>

        <hr>

    </div>
`;

    currentTable.orders.forEach((item) => {

        const amount = item.quantity * item.price;

html += `
<div class="bill-row">

    <div>${item.name}</div>

    <div>${item.quantity}</div>

    <div>₹${amount}</div>

</div>
`;

    });

    html += `
<hr>

<div class="bill-row">

    <strong>Total</strong>

    <strong></strong>

    <strong>₹${currentTable.totalPrice}</strong>

</div>
`;
    billContainer.innerHTML = html;

    modal.style.display = "none";

    billModal.style.display = "flex";

});
// =========================================
// CLOSE BILL
// =========================================

closeBill.addEventListener("click", () => {

    billModal.style.display = "none";

});
// =========================================
// PRINT BILL
// =========================================

printBill.addEventListener("click", () => {

    window.print();

    if (!currentTable) return;

    currentTable.orders = [];

    currentTable.totalItems = 0;

    currentTable.totalPrice = 0;

    billModal.style.display = "none";

    displayTables(tables);

    enableDrop();

});
