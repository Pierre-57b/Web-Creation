import { useState } from 'react';
import { MenuItem } from '../../types/order';
import { useOrderStore } from '../../store/useOrderStore';
import { ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

interface AddToCartButtonProps {
  item: MenuItem;
}

export function AddToCartButton({ item }: AddToCartButtonProps) {
  const [selectedSauce, setSelectedSauce] = useState<string>('');
  const addItem = useOrderStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (item.sauces && !selectedSauce) {
      toast.error('Veuillez sélectionner une sauce');
      return;
    }
    
    addItem(item, selectedSauce);
    toast.success('Produit ajouté au panier');
    setSelectedSauce('');
  };

  return (
    <div className="mt-4 space-y-2">
      {item.sauces && (
        <div className="relative">
          <select
            value={selectedSauce}
            onChange={(e) => setSelectedSauce(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Sélectionner une sauce</option>
            {item.sauces.map((sauce) => (
              <option key={sauce} value={sauce}>
                {sauce}
              </option>
            ))}
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}
      
      <button
        onClick={handleAddToCart}
        className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
      >
        <ShoppingCart className="w-4 h-4" />
        Ajouter au panier
      </button>
    </div>
  );
}