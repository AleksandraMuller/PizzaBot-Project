const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80

let orderQuantity;
let orderName;
let orderTotal;
let minutes;

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

orderName = prompt("Enter the name of the pizza you want to order today!")


if(orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {

orderQuantity = prompt(`How many of ${orderName} do you want?`)
orderTotal = (orderQuantity * pizzaPrice)

    if(orderQuantity <= 2){
        minutes = 10
    } else if(orderQuantity >= 3 && orderQuantity <= 5){
        minutes = 15
    } else {
        minutes = 20
    } 

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizzas will take ${minutes} minutes`)
} else { 
    alert(`Select a pizza from the menu`)
}




