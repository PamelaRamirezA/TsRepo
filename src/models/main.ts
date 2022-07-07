import { products, addProduct, calcStock } from "./products_services";

addProduct({
    title: 'Prod1',
    size:'L',
    stock:9,
    createdAt: new Date(2022,5,1),
});

addProduct({
    title: 'Prod2',
    size:'S',
    stock:8,
    createdAt: new Date(2022,6,25),
});

console.log(calcStock());