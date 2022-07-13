import ProductFactory from "./product.factory";

describe("Product factory unit tests", () => {
    it("should create a product type a", () => {
        const product = ProductFactory.create("a", "Product a", 10);
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product a");
        expect(product.price).toBe(10);
        expect(product.constructor.name).toBe("Product");
    });

    it("should create a product type b", () => {
        const product = ProductFactory.create("b", "Product b", 20);
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product b");
        expect(product.price).toBe(40);
        expect(product.constructor.name).toBe("ProductB");
    });
});