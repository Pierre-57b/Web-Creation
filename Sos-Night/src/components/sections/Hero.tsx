import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../utils/constants';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex items-center justify-center"
    >
      {/* Image de fond avec gestion responsive */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=2000&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay plus sombre pour une meilleure lisibilité */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="text-red-500">{SITE_CONFIG.name}</span>
            <span className="block mt-2">Votre Livraison Nocturne de Burgers et Snacks !</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Commandez dès maintenant et faites-vous livrer vos repas préférés
            <span className="block mt-2">
              Ouvert tous les jours sauf le {SITE_CONFIG.openingHours.closedDay}
            </span>
            <span className="block mt-1">
              de {SITE_CONFIG.openingHours.open} à {SITE_CONFIG.openingHours.close}
            </span>
          </p>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Voir le Menu
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}