import { Menu as MenuIcon, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from './Link';
import { SnapchatIcon } from '../icons/SnapchatIcon';
import { SITE_CONFIG } from '../../utils/constants';
import { CartDialog } from '../order/CartDialog';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 text-white z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold text-red-500">
            {SITE_CONFIG.name}
          </Link>

          <div className="flex items-center gap-4">
            <CartDialog />
            
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:block absolute lg:relative top-full left-0 right-0 bg-black lg:bg-transparent lg:top-auto mt-0`}>
            <ul className="flex flex-col lg:flex-row gap-4 p-4 lg:p-0">
              <li><Link href="#home">Accueil</Link></li>
              <li><Link href="#menu">Menu</Link></li>
              <li><Link href="#horaires">Horaires</Link></li>
              <li><Link href="#about">À propos</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
            <a href={SITE_CONFIG.social.snapchat} className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <SnapchatIcon />
              @{SITE_CONFIG.snapchat}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}