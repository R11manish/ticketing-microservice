import { Subjects, Publisher, PaymentCreatedEvent } from '@jmtss/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
