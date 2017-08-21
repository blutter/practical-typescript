import * as categories from "./productCategory";

export interface Product {
    name: string;
    price: number;
    category?: categories.ProductCategory
}

export class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

export class CocaCola implements Product {
    name = "Coco-Cola";
    price = 2.30;
    category = new categories.SodaCategory();
}

export class Chips implements Product {
    name = "Chips";
    price = 1.20;
    category = new categories.PotatoChipsCategory();
}

export class Nuts implements Product {
    name = "Nuts";
    price = 1.50;
    category = new categories.NutsCategory();
}

export class CandyBar implements Product {
    name = "CandyBar";
    price = 1.75;
    category = new categories.CandyCategory();
}