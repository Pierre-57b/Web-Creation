import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

export interface DeliveryAddressData {
  street: string;
  city: string;
  additionalInfo?: string;
}

interface DeliveryAddressProps {
  onAddressSubmit: (address: DeliveryAddressData) => void;
}

export function DeliveryAddress({ onAddressSubmit }: DeliveryAddressProps) {
  const [address, setAddress] = useState<DeliveryAddressData>({
    street: '',
    city: '',
    additionalInfo: ''
  });

  // Auto-submit when all required fields are filled
  useEffect(() => {
    if (address.street && address.city) {
      onAddressSubmit(address);
    }
  }, [address, onAddressSubmit]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-white mb-4">
        <MapPin className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Adresse de livraison</h3>
      </div>

      <div>
        <label htmlFor="street" className="block text-sm font-medium text-gray-400 mb-1">
          Rue et numéro *
        </label>
        <input
          type="text"
          id="street"
          required
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
          className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="12 rue des Fleurs"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">
          Ville *
        </label>
        <input
          type="text"
          id="city"
          required
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="Fameck"
        />
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-400 mb-1">
          Informations complémentaires
        </label>
        <textarea
          id="additionalInfo"
          value={address.additionalInfo}
          onChange={(e) => setAddress({ ...address, additionalInfo: e.target.value })}
          className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="Code, étage, instructions..."
          rows={2}
        />
      </div>
    </div>
  );
}