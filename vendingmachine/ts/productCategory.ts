abstract class ProductCategory {
    protected imgPath = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name = "Soda";
    getImageUrl() {
        return this.imgPath + "SodaCan.png";
    }
}

class CandyCategory extends ProductCategory {
    name = "Candy";
    getImageUrl() {
        return this.imgPath + "Candy.png";
    }
}

class NutsCategory extends ProductCategory {
    name = "Nuts";
    getImageUrl() {
        return this.imgPath + "Nuts.png";
    }
}

class ChipsCategory extends ProductCategory {
    name = "Chips";
    getImageUrl() {
        return this.imgPath + "Chips.png";
    }
}

export { ProductCategory, SodaCategory, CandyCategory, NutsCategory, ChipsCategory as PotatoChipsCategory };