export const ACTION = {
    UPDATE_CART: "update_cart"
}

const updateLocalStorage = (state)=>{
    localStorage.setItem("state",JSON.stringify(state));
    return state;
}

const reducer =(state,action) =>{
    switch(action.type){
        case ACTION.UPDATE_CART: return updateLocalStorage({...state,cart:action.payload});
        default: return state;
    }
}
export default reducer;