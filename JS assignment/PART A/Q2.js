var products = [
                 {
                  id:1,
                  name:"mobile",
                  price:10000,
                  inStock:true
                 },
                 {
                    id:2,
                    name:"TV",
                    price:20000,
                    inStock:false
                 },
                 {
                    id:3,
                    name:"Refrigerator",
                    price:25000,
                    inStock:true
                 },
                 {
                    id:4,
                    name:"AC",
                    price:25000,
                    inStock:false
                 }
               ];

products.push({
      id:5,
      name:"Headphone",
      price:900,
      inStock:true
});
products[1].price = 40000;
console.log(products)
console.log("Headphone is pushed successfully into array");

console.log("item at index 1 is removed from the products array");
products.splice(1,1);

products[0].price=13000;
console.log("Updated price of mobile:"+products[0].price);

console.log("Products:");
products.forEach(p=>console.log(p.name));

console.log("Products in stock are:")
products.filter(product=>product.inStock).forEach(product=>console.log(product.name));