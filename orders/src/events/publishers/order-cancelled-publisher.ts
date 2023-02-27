import { Publisher, OrderCancelledEvent, Subjects } from "@vkticketing1/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    
}