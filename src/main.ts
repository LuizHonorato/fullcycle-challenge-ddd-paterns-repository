import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Luiz Honorato");
let address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "123", "Item 1", 10, 2);
const item2 = new OrderItem("2","456", "Item 2", 20, 1);

const order = new Order("1", customer.id, [item1, item2]);

console.log(customer);
console.log(order);