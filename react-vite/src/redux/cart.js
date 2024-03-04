const LOAD_CART_ITEMS = 'cart/loadCartItems';
const ADD_CART_ITEM = 'cart/addCartItem';
const REMOVE_CART_ITEM = 'cart/removeCartItem';

const loadCartItems = (cartItems) => {
  return {
    type: LOAD_CART_ITEMS,
    cartItems
  }
}

const addCartItem = (cartItem) => {
  return {
    type: ADD_CART_ITEM,
    cartItem
  }
}

const removeCartItem = (cartItem) => {
  return {
    type: REMOVE_CART_ITEM,
    cartItem
  }
}

export const loadCartItemsThunk = (userId) => async (dispatch) => {
  const res = await fetch(`/api/cart_items/${userId}`)

  if (res.ok) {
    const data = await res.json();
    dispatch(loadCartItems(data))
    return data
  }
}

export const addCartItemThunk = (cartItem) => async (dispatch) => {
  const res = await fetch(`/api/cart_items/`, {
    method: "POST",
    body: cartItem
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(addCartItem(data))
    return data
  }
}


export const removeCartItemThunk = (itemId, userId) => async (dispatch) => {
  const res = await fetch(`/api/cart_items/${itemId}/${userId}`, {
    method: "DELETE",
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(removeCartItem(data))
    return data
  }
}

const initialState = {}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART_ITEMS: {
      return state
    }
    default:
      return state
  }
}

export default cartReducer
