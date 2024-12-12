export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  sauces?: string[];
  quantity?: number;
}

export interface CartItem extends MenuItem {
  id: string;
  quantity: number;
  selectedSauce?: string;
}

export interface OrderState {
  items: CartItem[];
  addItem: (item: MenuItem, sauce?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}