/**
 * Swagger Petstore - OpenAPI 3.0Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { OrderStatusEnum, orderStatusEnumSchema } from './orderStatusEnum';

export interface Order {
  id?: bigint;
  petId?: bigint;
  quantity?: number;
  shipDate?: string;
  orderStatus?: OrderStatusEnum;
  complete?: boolean;
}

export const orderSchema: Schema<Order> = object({
  id: ['id', optional(bigint())],
  petId: ['petId', optional(bigint())],
  quantity: ['quantity', optional(number())],
  shipDate: ['shipDate', optional(string())],
  orderStatus: ['orderStatus', optional(orderStatusEnumSchema)],
  complete: ['complete', optional(boolean())],
});
