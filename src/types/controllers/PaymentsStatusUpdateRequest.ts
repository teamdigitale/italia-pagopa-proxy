/**
 * PaymentsStatusUpdateRequest
 * Define the request to send to CD App to notify a payment status update
 */

import * as t from "io-ts";
import { WithinRangeString } from "italia-ts-commons/lib/strings";

export const PaymentsStatusUpdateRequest = t.interface({
  codiceContestoPagamento: WithinRangeString(1, 35),
  idPagamento: WithinRangeString(1, 35)
});
export type PaymentsStatusUpdateRequest = t.TypeOf<
  typeof PaymentsStatusUpdateRequest
>;