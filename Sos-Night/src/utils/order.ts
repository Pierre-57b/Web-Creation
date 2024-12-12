import { CartItem } from '../types/order';
import { SITE_CONFIG } from './constants';

interface OrderTotal {
  subtotal: number;
  deliveryFee: number;
  total: number;
  isFreeDelivery: boolean;
}

export function calculateOrderTotal(items: CartItem[]): OrderTotal {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeDelivery = subtotal >= SITE_CONFIG.delivery.freeAbove;
  const deliveryFee = isFreeDelivery ? 0 : SITE_CONFIG.delivery.fee;

  return {
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
    isFreeDelivery
  };
}