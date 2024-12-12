import emailjs from '@emailjs/browser';
import { ContactFormData } from './validation';
import toast from 'react-hot-toast';

const EMAILJS_CONFIG = {
  serviceId: 'service_ad0k6le', // Remplacez par votre Service ID
  templateId: 'template_m68czga', // Remplacez par votre Template ID
  publicKey: '8DlkhOHxe5RbWMfje', // Remplacez par votre clé publique
};

export const sendContactForm = async (data: ContactFormData) => {
  try {
    // Envoi des données à EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: data.name, // Nom de l'expéditeur
        from_phone: data.phone, // Numéro de téléphone (optionnel)
        message: data.message, // Message
        to_email: EMAILJS_CONFIG.toEmail, // Champ "to_email" configuré dans EmailJS
        reply_to: data.email, // Adresse e-mail pour les réponses
      },
      EMAILJS_CONFIG.publicKey // Clé publique
    );

    // Vérification de la réponse EmailJS
    if (response.status === 200) {
      toast.success('Message envoyé avec succès !');
      return true;
    } else {
      throw new Error(`Erreur inconnue : ${response.text}`);
    }
  } catch (error) {
    // Gestion des erreurs
    console.error('Erreur lors de l\'envoi du message:', error);
    toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    return false;
  }
};
