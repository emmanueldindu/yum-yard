import create from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  totalCount: 0,
  totalPrice: 0,
  
  addItem: (item) => set((state) => {
    const existingItemIndex = state.items.findIndex(i => i.id === item.id);
    let updatedItems;

    if (existingItemIndex >= 0) {
      updatedItems = state.items.map((i, index) => 
        index === existingItemIndex ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedItems = [...state.items, { ...item, quantity: 1 }];
    }

    const updatedTotalCount = updatedItems.reduce((count, currentItem) => count + currentItem.quantity, 0);
    const updatedTotalPrice = updatedItems.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);

    return {
      items: updatedItems,
      totalCount: updatedTotalCount,
      totalPrice: updatedTotalPrice,
    };
  }),

  removeItem: (id) => set((state) => {
    const existingItemIndex = state.items.findIndex(item => item.id === id);
    let updatedItems;

    if (existingItemIndex >= 0) {
      if (state.items[existingItemIndex].quantity > 1) {
        updatedItems = state.items.map((i, index) => 
          index === existingItemIndex ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        updatedItems = state.items.filter(item => item.id !== id);
      }
    } else {
      updatedItems = [...state.items];
    }

    const updatedTotalCount = updatedItems.reduce((count, currentItem) => count + currentItem.quantity, 0);
    const updatedTotalPrice = updatedItems.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);

    return {
      items: updatedItems,
      totalCount: updatedTotalCount,
      totalPrice: updatedTotalPrice,
    };
  }),

  clearCart: () => set({
    items: [],
    totalCount: 0,
    totalPrice: 0,
  }),
}));

export default useCartStore;