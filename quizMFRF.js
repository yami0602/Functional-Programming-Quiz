var readyMart = [
    {id:314521, name:'Milk' ,price: 3, description: 'mcarthur'},
    {id:185412, name:'Almonds' ,price: 1, description: 'Blue Dimond'},
    {id:101239, name:'Skittles' ,price: 10, description: 'Taste the rainbow'},
    {id:149612, name:'Cookies' ,price: 4, description: 'chips ahoy'},
    {id:146231, name:'Coca-cola' ,price: 1, description: 'COKE'},
]



class NewProducts {

    constructor(readyMart) {
        this.getNames()

    }
    
        getNames() {
            var obj = readyMart.map(function(object){
            return object.name
            })
        return obj.sort();
        }

    getSaleItems() {
        return readyMart.filter(function(readyMart){
            return readyMart.price < 6
        })
    }

    orderItems() {
        var dollor = readyMart.map(function(object){
            return object.price
        })
        var money = dollor.reduce(function(acc, curr){
            return (acc + curr)

        })
        return money * 35
        
        
        
    
    }

}



const newProducts = new NewProducts(readyMart)
console.log(newProducts.getNames());
console.log(newProducts.getSaleItems());
console.log(newProducts.orderItems());



