import create from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  totalCount: 0,
  totalPrice: 0,
  
  addItem: (item) => set((state) => {
    const updatedItems = [...state.items, item];
    const updatedTotalCount = updatedItems.length;
    const updatedTotalPrice = updatedItems.reduce((total, currentItem) => total + currentItem.price, 0);
    return {
      items: updatedItems,
      totalCount: updatedTotalCount,
      totalPrice: updatedTotalPrice,
    };
  }),

  removeItem: (id) => set((state) => {
    const updatedItems = state.items.filter(item => item.id !== id);
    const updatedTotalCount = updatedItems.length;
    const updatedTotalPrice = updatedItems.reduce((total, currentItem) => total + currentItem.price, 0);
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