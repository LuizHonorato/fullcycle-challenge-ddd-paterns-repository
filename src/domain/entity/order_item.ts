export default class OrderItem {
    private _id: string;
    private _product_id: string;
    private _name: string;
    private _price: number;
    private _quantity: number;

    constructor(id: string, product_id: string, name: string, price: number, quantity: number) {
        this._id = id;
        this._product_id = product_id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    get id(): string {
        return this._id;
    }

    get productId(): string {
        return this._product_id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price * this._quantity;
    }

    get quantity(): number {
        return this._quantity;
    }
}