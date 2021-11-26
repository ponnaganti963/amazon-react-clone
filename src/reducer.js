export const initialState = {
    cart: [],
};

export const getTotal = (cart) =>
    cart?.reduce((count,item) => parseInt(item.count) + parseInt(count), 0);


export const getCartTotal = (cart)=>
    cart?.reduce((amount, item) => item.price * item.count + amount , 0);


const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'INCREMENT_COUNT':
            var l = -1;
            state.cart.forEach((e,i)=> {if(e['id'] == action.item.id){l = i }})
            console.log(l);
            if (l != -1){
                state.cart[l]['count'] = action.item.count
            }

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            if (index >= 0){
                newCart.splice(index,1);
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in Cart!`
                )
            }

            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
};

export default reducer;