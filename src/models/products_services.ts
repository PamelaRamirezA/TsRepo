import { Product } from "./products_models";

export const products: Product[] = []; //inicializamos el array

export const addProduct = (data: Product)=>{
    products.push(data);
};

export const calcStock = (): number =>{
    let total = 0;
    products.forEach((item) =>{
        total += item.stock;
    });
    return total;
};