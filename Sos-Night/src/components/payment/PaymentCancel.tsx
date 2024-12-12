import { XCircle } from 'lucide-react';

export function PaymentCancel() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg text-center max-w-md w-full">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-4">Paiement annulé</h1>
        <p className="text-gray-300 mb-6">
          Le paiement a été annulé. Vous pouvez réessayer ou choisir un autre mode de paiement.
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