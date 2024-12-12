import { SITE_CONFIG } from './constants';

export const generateTitle = (page: string) => 
  `${page} | ${SITE_CONFIG.name} - Livraison de Burgers Halal à Fameck`;

export const generateMetaDescription = (description: string) =>
  `${description} | ${SITE_CONFIG.name} - Service de livraison nocturne à ${SITE_CONFIG.delivery.area}`;

export const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": SITE_CONFIG.name,
  "image": `https://${SITE_CONFIG.domain}/og-image.jpg`,
  "url": `https://${SITE_CONFIG.domain}`,
  "telephone": SITE_CONFIG.phone,
  "servesCuisine": "Burgers Halal, Fast Food",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fameck",
    "addressRegion": "Grand Est",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": SITE_CONFIG.openingHours.open,
    "closes": SITE_CONFIG.openingHours.close
  }
});