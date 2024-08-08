
import {create} from 'zustand'

const favStore = create((set) => ({
    favourites: [],

    addFavourites: (item) => set((state) => ({
        favourites: [...state.favourites, item],
    }) ),

    removeFavourites: (item) => set((state) => ({
        favourites: state.favourites.filter(fav => fav !== item),
    }))
}))

export default favStore