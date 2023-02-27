import { Subjects, Publisher, PaymentCreatedEvent } from "@vkticketing1/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}