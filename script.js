class FoodFactory {
    createItem(type) {
        switch(type) {
            case 'spaghetti':
                return {
                    name: 'Spaghetti',
                    price: 100,
                    ingredients: ['Pasta', 'Tomato Sauce', 'Ground Beef', 'Cheese'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            case 'fried-chicken':
                return {
                    name: 'Fried Chicken',
                    price: 60,
                    ingredients: ['Chicken', 'Flour', 'Spices'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            case 'burrito':
                return {
                    name: 'Burrito',
                    price: 80,
                    ingredients: ['Tortilla', 'Rice', 'Beans', 'Beef', 'Cheese', 'Salsa'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            default:
                return null;
        }
    }
}

class DrinkFactory {
    createItem(type) {
        switch(type) {
            case 'water':
                return {
                    name: 'Water',
                    price: 20,
                    ingredients: ['Purified Water'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            case 'sprite':
                return {
                    name: 'Sprite',
                    price: 20,
                    ingredients: ['Carbonated Water', 'High Fructose Corn Syrup', 'Citric Acid', 'Natural Flavors'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            case 'ice-tea':
                return {
                    name: 'Ice Tea',
                    price: 25,
                    ingredients: ['Tea', 'Water', 'Sugar', 'Lemon'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            default:
                return null;
        }
    }
}

class DessertFactory {
    createItem(type) {
        switch(type) {
            case 'ice-cream':
                return {
                    name: 'Ice Cream',
                    price: 50,
                    ingredients: ['Milk', 'Sugar', 'Cream', 'Flavoring'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            case 'cake':
                return {
                    name: 'Cake',
                    price: 100,
                    ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Baking Powder'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            case 'donut':
                return {
                    name: 'Donut',
                    price: 60,
                    ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Oil'],
                    describe: function() {
                        return `${this.name} : P${this.price.toFixed(2)} Made with ${this.ingredients.join(', ')}`;
                    }
                };
            default:
                return null;
        }
    }
}

const foodFactory = new FoodFactory();
const drinkFactory = new DrinkFactory();
const dessertFactory = new DessertFactory();

let currentOrder = [];

function addToOrder(category) {
    let selectedItem;
    
    switch(category) {
        case 'food':
            selectedItem = foodFactory.createItem(document.getElementById('food-select').value);
            break;
        case 'drink':
            selectedItem = drinkFactory.createItem(document.getElementById('drink-select').value);
            break;
        case 'dessert':
            selectedItem = dessertFactory.createItem(document.getElementById('dessert-select').value);
            break;
    }
    
    if (selectedItem) {
        currentOrder.push(selectedItem);
        updateOrderDisplay();
    }
}

function updateOrderDisplay() {
    const orderItemsDiv = document.getElementById('order-items');
    let html = '';
    
    currentOrder.forEach(item => {
        html += `<div>${item.name} - P${item.price.toFixed(2)}</div>`;
    });
    
    orderItemsDiv.innerHTML = html;
    
    const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('order-total').textContent = `Total: P${total.toFixed(2)}`;
}

function completeOrder() {
    if (currentOrder.length === 0) {
        alert('Please add items to your order first.');
        return;
    }
    
    const summaryItemsDiv = document.getElementById('summary-items');
    let html = '';
    
    currentOrder.forEach(item => {
        html += `<div>${item.describe()}</div>`;
    });
    
    summaryItemsDiv.innerHTML = html;
    
    const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('summary-total').textContent = `Total Amount: P${total.toFixed(2)}`;
    
    document.getElementById('order-summary').style.display = 'block';
}

function clearOrder() {
    currentOrder = [];
    updateOrderDisplay();
    console.log('Order cleared');
}