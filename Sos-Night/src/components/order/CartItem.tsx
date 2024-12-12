import { Trash2 } from 'lucide-react';
import { formatPrice } from '../../utils/format';
import { CartItem as CartItemType } from '../../types/order';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 bg-gray-800 p-3 rounded">
      <div className="flex-1">
        <h3 className="font-medium text-white">{item.name}</h3>
        {item.selectedSauce && (
          <p className="text-sm text-gray-400">Sauce: {item.selectedSauce}</p>
        )}
        <p className="text-sm text-gray-400">{formatPrice(item.price)}€</p>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
          className="bg-gray-700 text-white rounded px-2 py-1"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-400"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}