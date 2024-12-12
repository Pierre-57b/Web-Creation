import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useOrderStore } from '../../store/useOrderStore';

export function PaymentSuccess() {
  const clearCart = useOrderStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg text-center max-w-md w-full">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-4">Paiement réussi !</h1>
        <p className="text-gray-300 mb-6">
          Votre commande a été confirmée. Nous la préparons dès maintenant.
        </p>
        <a
          href="/"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}