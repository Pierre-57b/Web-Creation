import { Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { SnapchatIcon } from '../icons/SnapchatIcon';
import { ContactFormData, validateContactForm } from '../../utils/validation';
import { sendContactForm } from '../../utils/contact';
import { SITE_CONFIG } from '../../utils/constants';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await sendContactForm(formData);
        setFormData({ name: '', phone: '', message: '' });
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contactez-nous</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Informations de contact</h3>
            <div className="space-y-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
              <a href={SITE_CONFIG.social.snapchat} className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
                <SnapchatIcon />
                @{SITE_CONFIG.snapchat}
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-red-500 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-red-500 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className={`w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-red-500 ${
                  errors.message ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}