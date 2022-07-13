import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
    it("should get total of all orders", () => {
        const item1 = new OrderItem("1", "1", "Item 1", 100, 1);
        const item2 = new OrderItem("2", "2", "Item 2", 200, 2);

        const order1 = new Order("1", "1", [item1]);
        const order2 = new Order("2", "1", [item2]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(500);
    });

    it("should place an order", () => {
        const customer = new Customer("1", "John Doe");
        const item1 = new OrderItem("1", "1", "Item 1", 100, 1);

        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(50);
        expect(order.total()).toBe(100);
    });
});