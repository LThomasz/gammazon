const LOAD_ITEMS = 'item/loadItems';
const LOAD_ONE_ITEM = 'item/loadOneItem';
const LOAD_USER_ITEMS = 'item/loadUserItems';
const ADD_ITEM = 'item/addItem';
const EDIT_ITEM = 'item/editItem';
const DELETE_ITEM = 'item/deleteItem';

const loadItems = (items) => {
  return {
    type: LOAD_ITEMS,
    items
  }
}

const loadOneItem = (item) => {
  return {
    type: LOAD_ONE_ITEM,
    item
  }
}

const loadUserItems = (items) => {
  return {
    type: LOAD_USER_ITEMS,
    items
  }
}

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  }
}

const editItem = (itemId) => {
  return {
    type: EDIT_ITEM,
    itemId
  }
}

const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    itemId
  }
}

export const loadItemsThunk = () => async (dispatch) => {
  const res = await fetch('/api/items')

  if (res.ok) {
    const data = await res.json();
    dispatch(loadItems(data))
    return data
  }
}

export const loadOneItemThunk = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}`)

  if (res.ok) {
    const data = await res.json();
    dispatch(loadOneItem(data))
    return data
  }
}

export const loadUserItemsThunk = (userId) => async (dispatch) => {
  const res = await fetch(`/api/items/current/${userId}`)

  if (res.ok) {
    const data = await res.json();
    dispatch(loadUserItems(data))
    return data
  }
}

export const addItemThunk = (item) => async (dispatch) => {
  const res = await fetch(`/api/items/new-item`, {
    method: "POST",
    body: item
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(addItem(data))
    return data
  }
}

export const editItemThunk = (item, itemId) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}/edit`,{
    method: "PUT",
    body: item
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(editItem(data))
    return data
  }
}

export const deleteItemThunk = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}`, {
    method: "DELETE",
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(deleteItem(data))
    return data
  }
}

const initialState = {}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOAD_ITEMS: {
        const newState = { };
        action.items.items.forEach(el => {
          newState[el.id] = el
        });
        return newState;
      }
      case LOAD_ONE_ITEM: {
        const newState = { };

        return newState;
      }
      case LOAD_USER_ITEMS: {
        const newState = { }

        return newState
      }
      case ADD_ITEM: {
        const newState = { ...state }

        return newState;
      }
      case EDIT_ITEM: {
        const newState = { ...state }

        return newState
      }
      case DELETE_ITEM: {
        const newState = { ...state }
        return newState;
      }
      default:
          return state
  }
}

export default itemReducer
