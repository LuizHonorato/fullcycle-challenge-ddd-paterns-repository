import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw an error if ID is empty", () => {
        expect(() => {
            new Customer("", "John Doe");
        }).toThrowError("Id is required.");
    });

    it("should throw an error if Name is empty", () => {
        expect(() => {
            new Customer("123", "");
        }).toThrowError("Name is required.");
    });

    it("should throw an error if Name and ID is empty", () => {
        expect(() => {
            new Customer("", "");
        }).toThrowError("customer: Id is required.,customer: Name is required.");
    });


    it("should change name", () => {
        const customer = new Customer("123", "John Doe");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    });

    it("should activate a customer", () => {
        const customer = new Customer("123", "Customer 1");
        const address = new Address("Street 1", 1, "14055-340", "Ribeirão");
        customer.Address = address;
        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it("should throw an error if try to activate a customer without a address", () => {
        expect(() => {
            const customer = new Customer("123", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer.");
    });

    it("should deactivate a customer", () => {
        const customer = new Customer("123", "Customer 1");
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });

    it("should add reward points", () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);

        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);

        expect(customer.rewardPoints).toBe(20);
    });
})