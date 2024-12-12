import emailjs from '@emailjs/browser';
import { CartItem } from '../types/order';
import { formatPrice } from './format';
import toast from 'react-hot-toast';

const EMAILJS_CONFIG = {
  serviceId: 'service_ad0k6le',
  templateId: 'template_m68czga',
  publicKey: '8DlkhOHxe5RbWMfje',
};

export const sendOrderNotification = async (items: CartItem[], total: number) => {
  try {
    const orderDetails = items
      .map(item => `${item.quantity}x ${item.name}${item.selectedSauce ? ` (${item.selectedSauce})` : ''} - ${formatPrice(item.price * item.quantity)}€`)
      .join('\n');

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        order_details: orderDetails,
        total_amount: `${formatPrice(total)}€`,
        order_date: new Date().toLocaleString('fr-FR'),
      },
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      toast.success('Commande envoyée avec succès !');
      return true;
    } else {
      throw new Error(`Erreur lors de l'envoi: ${response.text}`);
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la commande:', error);
    toast.error('Erreur lors de l\'envoi de la commande. Veuillez réessayer.');
    return false;
  }
};