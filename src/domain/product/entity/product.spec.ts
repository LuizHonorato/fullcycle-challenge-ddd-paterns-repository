import Product from "./product";

describe("Product unit tests", () => {
    it("should throw an error when id is empty", () => {
        expect(() => {
            new Product("", "Product 1", 100);
        }).toThrowError("Id is required.");
    });

    it("should throw an error when name is empty", () => {
        expect(() => {
            new Product("123", "", 100);
        }).toThrowError("Product name is required.");
    });

    it("should throw an error when price is less than zero", () => {
        expect(() => {
            new Product("123", "Product 1", -1);
        }).toThrowError("Product price must be greater than 0.");
    });

    it("should change product name", () => {
        const product = new Product("123", "Product 1", 100);
        product.changeName("Product 2");
        expect(product.name).toBe("Product 2");
    });

    it("should change product price", () => {
        const product = new Product("123", "Product 1", 100);
        product.changePrice(150);
        expect(product.price).toBe(150);
    });
})