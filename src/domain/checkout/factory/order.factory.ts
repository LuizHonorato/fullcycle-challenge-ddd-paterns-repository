import Order from "../entity/order";
import OrderItem from "../entity/order_item";

interface OrderFactoryProps {
    id: string;
    customerId: string;
    items: {
        id: string;
        name: string;
        productId: string;
        quantity: number;
        price: number;
    }[]
}

export default class OrderFactory {
    public static create(props: OrderFactoryProps): Order {
        const items = props.items.map((item) => new OrderItem(item.id, item.productId, item.name, item.quantity, item.price));
        
        return new Order(props.id, props.customerId, items);
    }
}