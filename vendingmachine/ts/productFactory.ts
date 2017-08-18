/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): Product {
        let random = Math.floor(Math.random() * 7);
        switch(random) {
            case 0: return new CocaCola();
            case 1: return new Chips();
            case 2: return new Nuts();
            case 3: return new CandyBar();
            default: return new CocaCola();
        }
    }
}