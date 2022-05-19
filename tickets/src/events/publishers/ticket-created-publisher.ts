import { Publisher, Subjects, TicketCreatedEvent } from '@jmtss/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  
}
