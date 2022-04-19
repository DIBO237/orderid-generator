# Ordersid-generator

### Installation


```bash
$ npm i ordersid-generator
```

### Usage
```javascript
//orderid(type,name)
const OrderID = require("ordersid-generator")

// Short OrderID
console.log(OrderID("short")) // 52386129

// Long OrderID
console.log(OrderID("long")) // 72386129-8264928

// Short orderID with Company Name
console.log(OrderID("short","FLIPKART")) // FLIPKART-72386129

// Long orderID with Company Name
console.log(OrderID("long","FLIPKART")) // FLIPKART-72386129-2377291
```
