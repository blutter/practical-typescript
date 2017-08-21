import * as products from "./product";

export default function GetProduct(): products.Product {
    let random = Math.floor(Math.random() * 7);
    switch(random) {
        case 0: return new products.CocaCola();
        case 1: return new products.Chips();
        case 2: return new products.Nuts();
        case 3: return new products.CandyBar();
        default: return new products.CocaCola();
    }
}