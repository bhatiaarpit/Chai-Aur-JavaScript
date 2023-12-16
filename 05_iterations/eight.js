const myNums = [1, 2, 4]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) =>{return acc + currval}, 0)



console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 6999
    },
    {
        itemName: "da course",
        price: 999
    },
    {
        itemName: "py course",
        price: 4000
    },
    {
        itemName: "app course",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);