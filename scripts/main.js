class Products {
  constructor(title, category, price, description) {
    if (title === "" || typeof title !== "string") {
      console.log("Название товара не указано. ");
      this.title = "Default Name";
    } else {
      this.title = title;
    }
    if (category === "" || typeof category !== "string") {
      console.log("категория товара не указана. ");
      this.category = "Default category";
    } else {
      this.category = category;
    }
    if (price < 1 || typeof price !== "number") {
      throw new Error("Цена должна быть числом и больше 1!");
    } else {
      this.price = price;
    }

    this.description = description;
  }

  changePrice(newPrice) {
    if (typeof newPrice !== "number") {
      throw new Error("Цена должна быть числом!");
    }

    const updatedPrice = this.price + newPrice;

    if (updatedPrice < 1) {
      throw new Error("Цена должна быть больше 1!");
    }

    this.price = updatedPrice;
  }
}

class ShoppingCart {
  constructor() {
    this.productsStorage = {
      apple: 4,
      kiwi: 5,
      pineapple: 3,
      banan: 1,
    };
    this.totalPrice = 0;
  }

  addProduct(product) {
    if (!this.productsStorage[product.title]) {
      this.productsStorage[product.title] = 0;
    }
    this.productsStorage[product.title] += 1;
    this.totalPrice += product.price;
  }

  dropProduct(product) {
    if (!this.productsStorage[product.title]) {
      throw new Error("товара с таким названием нет на складе");
    }
    if (this.productsStorage[product.title] <= 0) {
      throw new Error("товара уже нет на складе");
    } else {
      this.productsStorage[product.title] -= 1;
      this.totalPrice -= product.price;
    }
  }
}

const product = new Products(
  "Ноутбук",
  "Электроника",
  1000,
  "Мощный и быстрый ноутбук для работы и игр."
);

product.changePrice(10);

const myShoppingCart = new ShoppingCart();
myShoppingCart.addProduct(product);

console.log(product);
console.log(myShoppingCart);
