import { Subjects, Publisher, ExpirationCompleteEvent } from "@vkticketing1/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}