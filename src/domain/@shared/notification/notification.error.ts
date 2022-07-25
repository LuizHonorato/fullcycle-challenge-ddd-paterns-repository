import { NotificationErrorProps } from "./notifcation";

export default class NotificationError extends Error {
    constructor(public errors: NotificationErrorProps[]) {
        super(errors.map((error) => `${error.context}: ${error.message}`).join(","));
    }
}