import { Subjects, Publisher, OrderCancelledEvent } from '@jmtss/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
