//Coding Challenge 4 
// Task 1 Create an Inventory Array of Product Objects

const inventory = [

    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
    
    ];

    console.log(inventory)
    
// Task 2 Create a Function to Display Product Details

function displayProductDetails(inventory) {
    if (inventory.quantity > inventory.lowStockLevel) {
        console.log(`Product ${inventory.name} is priced at $${inventory.price} and is in stock`);
    } else {
        console,log(`Product ${inventory.name} is priced at $${inventory.price} and is out of stock`);
    }
}


    inventory.forEach(inventory => displayProductDetails(inventory));

//Task 3 Create a function to update product stock after sales
function updateStock(quantity, unitsSold) {
     inventory.quantity = newQuantity = (inventory.quantity -= salesData.unitsSold);
    return quantity;
}
let stockData = [
    { product: "Laptop", unitsSold: 7 },   
    { product: "Smartphone", unitsSold: 3 },
    { product: "Tablet", unitsSold: 5}
   ];

   let updatedstockData = inventory.map(quantity => quantity - stockData.unitsSold);
   console.log(updatedstockData)

    inventory.forEach(salesData => updateStock(quantity, unitsSold));
console.log(updatedStock);

    function displayProductDetails(inventory) {
        if (inventory.quantity > inventory.lowStockLevel) {
            console.log(`Product ${inventory.name} is priced at $${inventory.price} and is in stock`);
        } else if (inventory.quantity < inventory.lowStockLevel)   {
            console.log(`Product ${inventory.name} is priced at $${inventory.price} and is low in stock`);
        } else {
            console.log(`product${inventory.name} is priced at $${inventory.price} and is out of stock`);
        } 
    }
    inventory.forEach(inventory => displayProductDetails(inventory));
// Task 4 Function to check low stock products
function checkLowStock(inventory) {
        if (inventory.quantity < inventory.lowStockLevel) { 
        console.log(`Product ${inventory.name} is low in Stock`);
        } 
    };
inventory.forEach(inventory => checkLowStock(inventory));

// Task 5 Create a Function to Calculate Total Inventory Value
let totalInventoryValue = 0;

for (let i = 0; <inventory.length; i++) {
    totalInventoryValue += inventory[i].price;
}
console.log(`total inventory value: $${totalInventoryValue}`);


