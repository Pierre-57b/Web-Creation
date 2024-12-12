import * as Dialog from '@radix-ui/react-dialog';
import { X, ShoppingCart, Send } from 'lucide-react';
import { useState } from 'react';
import { useOrderStore } from '../../store/useOrderStore';
import { calculateOrderTotal } from '../../utils/order';
import { sendOrderEmail } from '../../utils/email';
import { OrderSummary } from './OrderSummary';
import { CartItem } from './CartItem';
import { DeliveryAddress, DeliveryAddressData } from './DeliveryAddress';
import toast from 'react-hot-toast';

export function CartDialog() {
  const { items, removeItem, updateQuantity, clearCart } = useOrderStore();
  const orderTotal = calculateOrderTotal(items);
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressData | null>(null);

  const handleSubmitOrder = async () => {
    if (!deliveryAddress) {
      toast.error('Veuillez renseigner votre adresse de livraison');
      return;
    }

    try {
      const success = await sendOrderEmail(items, orderTotal, deliveryAddress);
      if (success) {
        toast.success('Commande envoyée avec succès !');
        clearCart();
      }
    } catch (error) {
      toast.error('Erreur lors de l\'envoi de la commande');
      console.error('Order error:', error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="relative p-2">
          <ShoppingCart className="w-6 h-6 text-white" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <div className="flex flex-col h-full max-h-[85vh]">
            {/* Header - Fixed */}
            <div className="sticky top-0 bg-gray-900 pb-4 mb-4 border-b border-gray-800">
              <div className="flex justify-between items-center">
                <Dialog.Title className="text-xl font-bold text-white">
                  Votre panier
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1">
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingCart className="w-16 h-16 text-gray-600 mb-4" />
                <p className="text-gray-400 text-center">Votre panier est vide</p>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>

                  <div className="border-t border-gray-800 pt-6 mb-6">
                    <DeliveryAddress onAddressSubmit={setDeliveryAddress} />
                  </div>
                </div>

                {/* Footer - Fixed */}
                <div className="sticky bottom-0 bg-gray-900 pt-4 mt-4 border-t border-gray-800">
                  <OrderSummary {...orderTotal} />
                  <button
                    onClick={handleSubmitOrder}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors mt-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <Send className="w-5 h-5" />
                    Commander
                  </button>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}