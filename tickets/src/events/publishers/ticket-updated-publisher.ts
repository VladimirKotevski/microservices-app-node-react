import { Publisher, Subjects, TicketUpdatedEvent } from '@vkticketing1/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
