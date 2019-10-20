const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80

let orderQuantity;
let orderName;
let orderTotal;
let minutes;


console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

let checkOrderName = (orderName) => {
    
    if(orderName === vegetarian || orderName === hawaiian || orderName === pepperoni){
        return true
    } else {
       return false
    }
}

let totalCost= (orderQuantity) => {
 
    orderTotal = (orderQuantity * pizzaPrice) 
}

let cookingTime= (orderQuantity) =>{

    if(orderQuantity <= 2){
        minutes = 10
    } else if(orderQuantity >= 3 && orderQuantity <= 5){
        minutes = 15
    } else {
        minutes = 20
    } 
} 

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)
orderName = prompt("Enter the name of the pizza you want to order today!")

let checkOrderTrue = checkOrderName(orderName)



if(checkOrderTrue) {
    
        orderQuantity = prompt(`How many of ${orderName} do you want?`)
    
        totalCost(orderQuantity)
    
        cookingTime(orderQuantity)

        document.getElementById("pizza-bot").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizzas will take ${minutes} minutes`
    // alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizzas will take ${minutes} minutes`)
    } else { 
        alert(`Select a pizza from the menu`)
    }

