

export interface ShoppingCartItem {
    id: number;
    name: string;
    price: string;
  };

export interface ItemState {
    cartItems: ShoppingCartItem[]
  };
  
  type ShoppingCartAction =
    { type: 'ADD_ITEM'; payload: ShoppingCartItem } | 
    { type: 'REMOVE_ITEM'; payload: number };
  
  const shoppingCartReducer = (state: ItemState, action: ShoppingCartAction): ItemState => {
    switch(action.type){
        case "ADD_ITEM":
            console.log(action.payload);
            const newItem = action.payload;
            const newItemState = [...state.cartItems, newItem]  
            return {...state, cartItems: newItemState }

        case 'REMOVE_ITEM':
            const removeItemState = state.cartItems.filter((item) => 
                item.id !== action.payload)

            return {...state, cartItems: removeItemState }
        default:
            return state ;
    }
 
}

export default shoppingCartReducer
  