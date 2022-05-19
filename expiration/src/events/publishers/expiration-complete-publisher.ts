import { Subjects, Publisher, ExpirationCompleteEvent } from '@jmtss/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
