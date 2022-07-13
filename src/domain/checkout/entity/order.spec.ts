import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
    it("should throw an error if ID is empty", () => {
        expect(() => {
            new Order("", "123", []);
        }).toThrowError("Id is required.");
    });

    it("should throw an error if customerId is empty", () => {
        expect(() => {
            new Order("123", "", []);
        }).toThrowError("customerId is required.");
    });

    it("should throw an error if items array is empty", () => {
        expect(() => {
            new Order("123", "123", []);
        }).toThrowError("Items qtd must be greater than 0.");
    });

    it("should calculate items total", () => {
        const item1 = new OrderItem("1", "123", "Item 1", 100, 2);
        const item2 = new OrderItem("2", "456", "Item 2", 150, 2);

        const order = new Order("123", "1", [item1, item2]);

        const total = order.total();

        expect(total).toBe(500);
    });

    it("should throw an error if the item qtd is less than or equal zero", () => {
        expect(() => {
            const item1 = new OrderItem("1", "123", "Item 1", 100, 0);
            new Order("1", "123", [item1]);

        }).toThrowError("Quantity must be greater than 0.");
    });
})