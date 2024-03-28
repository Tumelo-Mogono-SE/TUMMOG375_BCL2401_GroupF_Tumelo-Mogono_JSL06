// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");
    // Loop through each category and its items in the menu object
    for(const [ category, items] of Object.entries(menu)){

        const categoryElement = document.createElement("h3");
        categoryElement.textContent = category;

        menuContainer.appendChild(categoryElement);

        const listContainer = document.createElement("ul");
        menuContainer.appendChild(listContainer);

        items.forEach( item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            listItem.addEventListener("click", () => addToOrder(item));
            listContainer.appendChild(listItem);
            
        });
    }    
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderListItemElement = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    const clearOrderElement = document.getElementById("clear-order");

    // Create a list item for the order
    const orderItem = document.createElement("li");
    orderItem.textContent = itemName;
    orderListItemElement.appendChild(orderItem);
   
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const itemPrice = 60; 
    const newTotal = currentTotal + itemPrice;
    orderTotalElement.textContent = newTotal.toFixed(2);
    
    orderItem.addEventListener('click', () => removeOrder(orderItem));
    clearOrderElement.addEventListener('click', () => clearOrderFunction() )
}

function removeOrder (orderItem) {
    const orderListItemElement = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    
        orderListItemElement.removeChild(orderItem);

        const currentTotal = parseFloat(orderTotalElement.textContent);
        const itemPrice = 60; 
        const newTotal = currentTotal - itemPrice;
        orderTotalElement.textContent = newTotal.toFixed(2);
}

function clearOrderFunction () {
    const orderListItemElement = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    while (orderListItemElement.firstChild){
        orderListItemElement.removeChild(orderListItemElement.firstChild);
    }


    const newTotal = 0;
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
