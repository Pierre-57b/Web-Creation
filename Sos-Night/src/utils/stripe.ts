import { loadStripe } from '@stripe/stripe-js';
import { CartItem } from '../types/order';

const STRIPE_PUBLIC_KEY = 'pk_test_51OxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

export const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export async function createPaymentSession(items: CartItem[]) {
  try {
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.selectedSauce ? `Sauce: ${item.selectedSauce}` : undefined,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lineItems }),
    });

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating payment session:', error);
    throw error;
  }
}