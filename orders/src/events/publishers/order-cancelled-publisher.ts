import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@tusphananh/common-v2";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
