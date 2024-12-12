import { formatPrice } from '../../utils/format';

interface OrderSummaryProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
  isFreeDelivery: boolean;
}

export function OrderSummary({ subtotal, deliveryFee, total, isFreeDelivery }: OrderSummaryProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Sous-total</span>
        <span className="text-white">{formatPrice(subtotal)}€</span>
      </div>
      
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Livraison</span>
        {isFreeDelivery ? (
          <span className="text-green-500">Gratuite</span>
        ) : (
          <span className="text-white">{formatPrice(deliveryFee)}€</span>
        )}
      </div>

      {!isFreeDelivery && (
        <p className="text-sm text-gray-400">
          Plus que {formatPrice(15 - subtotal)}€ pour la livraison gratuite
        </p>
      )}
      
      <div className="flex justify-between font-bold pt-2 border-t border-gray-700">
        <span className="text-white">Total</span>
        <span className="text-white">{formatPrice(total)}€</span>
      </div>
    </div>
  );
}