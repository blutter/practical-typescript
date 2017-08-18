/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory
}

class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

class CocaCola implements Product {
    name = "Coco-Cola";
    price = 2.30;
    category = new SodaCategory();
}

class Chips implements Product {
    name = "Chips";
    price = 1.20;
    category = new ChipsCategory();
}

class Nuts implements Product {
    name = "Nuts";
    price = 1.50;
    category = new NutsCategory();
}

class CandyBar implements Product {
    name = "CandyBar";
    price = 1.75;
    category = new CandyCategory();
}