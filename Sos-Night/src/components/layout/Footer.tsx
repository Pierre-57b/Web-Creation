import { Phone } from 'lucide-react';
import { SnapchatIcon } from '../icons/SnapchatIcon';
import { HalalIcon } from '../icons/HalalIcon';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <HalalIcon className="w-12 h-12 text-red-500" />
            <span className="text-sm">Tous nos produits sont certifiés Halal</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="tel:0641868942" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4" />
              06 41 86 89 42
            </a>
            <a href="https://snapchat.com/add/SOS.NIGHT57" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <SnapchatIcon />
              @SOS.NIGHT57
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SOS Night. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}