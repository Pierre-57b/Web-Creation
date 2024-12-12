import { create } from 'zustand';
import { OrderState, MenuItem, CartItem } from '../types/order';

export const useOrderStore = create<OrderState>((set, get) => ({
  items: [],
  total: 0,

  addItem: (item: MenuItem, sauce?: string) => {
    set((state) => {
      const newItem: CartItem = {
        ...item,
        id: `${item.name}-${Date.now()}`,
        quantity: 1,
        selectedSauce: sauce
      };

      const newItems = [...state.items, newItem];
      return {
        items: newItems,
        total: calculateTotal(newItems)
      };
    });
  },

  removeItem: (id: string) => {
    set((state) => {
      const newItems = state.items.filter(item => item.id !== id);
      return {
        items: newItems,
        total: calculateTotal(newItems)
      };
    });
  },

  updateQuantity: (id: string, quantity: number) => {
    set((state) => {
      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      return {
        items: newItems,
        total: calculateTotal(newItems)
      };
    });
  },

  clearCart: () => {
    set({ items: [], total: 0 });
  }
}));

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}