
import EventDispatcher from "../../@shared/event/event-dispatcher";
import Customer from "../entity/customer";
import Address from "../value-object/address";
import CustomerChangedHisAddressEvent from "./customer-changed-his-address";
import CustomerCreatedEvent from "./customer-created.event";
import SendConsoleLogWhenCustomerChangeHisAddress from "./handler/send-console-log-when-customer-change-his-address";
import SendConsoleLogWhenCustomerIsCreated1 from "./handler/send-console-log-when-customer-is-created-1";
import SendConsoleLogWhenCustomerIsCreated2 from "./handler/send-console-log-when-customer-is-created-2";

describe("Customer event unit tests", () => {
    it("should be able to notify 2 console.log events when customer is created", () => {
        const customer = new Customer("123", "Customer 1");

        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new SendConsoleLogWhenCustomerIsCreated1();
        const eventHandler2 = new SendConsoleLogWhenCustomerIsCreated2();

        const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
        const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2)

        const customerCreatedEvent = new CustomerCreatedEvent(customer);

        eventDispatcher.notify(customerCreatedEvent);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);
        expect(spyEventHandler1).toBeCalledTimes(1);
        expect(spyEventHandler2).toBeCalledTimes(1);
    });

    it("should be able to notify when customer changed his address", () => {
        const customer = new Customer("1", "John Doe");
        const address = new Address("Street 1", 1, "14000-000", "Metrópolis");
        customer.changeAddress(address);

        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendConsoleLogWhenCustomerChangeHisAddress();

        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("CustomerChangedHisAddressEvent", eventHandler);

        const customerChangedHisAddressEvent = new CustomerChangedHisAddressEvent({
            id: customer.id,
            name: customer.name,
            address: `${address.street}, ${address.number} - CEP: ${address.zip} - Cidade: ${address.city}`
        });

        eventDispatcher.notify(customerChangedHisAddressEvent);

        expect(eventDispatcher.getEventHandlers["CustomerChangedHisAddressEvent"][0]).toMatchObject(eventHandler);
        expect(spyEventHandler).toBeCalled();
    });
});