import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerChangedHisAddressEvent from "../customer-changed-his-address";

export default class SendConsoleLogWhenCustomerChangeHisAddress implements EventHandlerInterface<CustomerChangedHisAddressEvent> {
    handle(event: CustomerChangedHisAddressEvent): void { 
        const { id, name, address } = event.eventData;

        console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${address}`);
    }
    
}