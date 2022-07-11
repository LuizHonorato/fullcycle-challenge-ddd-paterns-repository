import Product from "../entity/product";
import ProductService from "./product.service";

describe("Product service unit tests", () => {
    it('should change the prices of all products', () => {
        const product1 = new Product("1", "Produto 1", 100);
        const product2 = new Product("2", "Produto 2", 200);

        const products = [product1, product2];

        ProductService.increasePrice(products, 100);

        expect(product1.price).toBe(200);
        expect(product2.price).toBe(400); 
    });
});