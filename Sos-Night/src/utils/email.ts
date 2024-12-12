import emailjs from '@emailjs/browser';
import { CartItem } from '../types/order';
import { formatPrice } from './format';
import { calculateOrderTotal } from './order';
import { DeliveryAddressData } from '../components/order/DeliveryAddress';

const EMAIL_CONFIG = {
  serviceId: 'service_ad0k6le',
  templateId: 'template_m68czga',
  publicKey: '8DlkhOHxe5RbWMfje',
};

export const sendOrderEmail = async (
  items: CartItem[], 
  orderTotal: ReturnType<typeof calculateOrderTotal>,
  address: DeliveryAddressData
) => {
  try {
    const orderDetails = items
      .map(item => {
        const itemTotal = item.price * item.quantity;
        return `${item.quantity}x ${item.name}${item.selectedSauce ? ` (${item.selectedSauce})` : ''} - ${formatPrice(itemTotal)}€`;
      })
      .join('\n');

    const fullAddress = [
      address.street,
      address.city,
      address.additionalInfo
    ].filter(Boolean).join('\n');

    const templateParams = {
      order_details: orderDetails,
      delivery_address: fullAddress,
      subtotal: `${formatPrice(orderTotal.subtotal)}€`,
      delivery_fee: orderTotal.isFreeDelivery ? 'Gratuite' : `${formatPrice(orderTotal.deliveryFee)}€`,
      total_amount: `${formatPrice(orderTotal.total)}€`,
      order_date: new Date().toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short',
      }),
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};