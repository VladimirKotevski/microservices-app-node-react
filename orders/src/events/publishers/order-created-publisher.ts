import { Publisher, OrderCreatedEvent, Subjects } from "@vkticketing1/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    
}