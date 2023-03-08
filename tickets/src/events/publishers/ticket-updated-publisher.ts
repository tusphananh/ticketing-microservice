import { Publisher, Subjects, TicketUpdatedEvent } from "@tusphananh/common-v2";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
