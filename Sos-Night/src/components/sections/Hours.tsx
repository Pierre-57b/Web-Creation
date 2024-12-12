import { Clock, MapPin, Truck } from 'lucide-react';

export function Hours() {
  return (
    <section id="horaires" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Horaires et Livraison</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
            <Clock className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Horaires d'ouverture</h3>
            <p className="text-gray-400">
              Ouvert tous les jours sauf le jeudi<br />
              de 20h30 à 04h00
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
            <Truck className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Frais de livraison</h3>
            <p className="text-gray-400">
              Livraison : +2€<br />
              Gratuite dès 15€ de commande
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
            <MapPin className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Zone de livraison</h3>
            <p className="text-gray-400">
              Fameck et ses alentours<br />
              PayPal ou espèces acceptés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}