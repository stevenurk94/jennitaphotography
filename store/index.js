
function updateLocalStorage( cart ) {
    localStorage.setItem("cart", JSON.stringify(cart))
}


export const state = () => ({
    cart: []
})


export const mutations = ({

    // ADD-TO-CART FUNCTION
    addToCart ( state, product ) {

        let quantity = parseInt(product.quantity);
        let item = state.cart.find(item => item.id === product.id)
      
        if (item) {
            item.quantity += quantity
        } else {
            state.cart.push({ ...product, quantity })
        }

        updateLocalStorage(state.cart)
    },

    // REMOVE-FROM-CART FUNCTION
    removeOneFromCart (state, product ) {

        let item = state.cart.find(item => item.id === product.id)

        if (item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                state.cart = state.cart.filter( item => item.id !== product.id)
            }
        }

        updateLocalStorage(state.cart)
    },

    // ADD-ONE-TO-CART
    addOneToCart ( state, product ) {
        let item = state.cart.find(item => item.id === product.id)
        item.quantity++
        updateLocalStorage(state.cart)
    },

    // REMOVE-PRODUCT-FROM-CART
    removeProductFromCart (state, product ) {

        let item = state.cart.find(item => item.id === product.id)

        if (item) {
            state.cart = state.cart.filter( item => item.id !== product.id)
        }

        updateLocalStorage(state.cart)
    },

    // PULLING PRODUCT FROM LOCAL-STORAGE (SEE HEADER WHERE FUNCTION IS FIRED)
    updateCartFromLocalStorage ( state ) {
        const cart = localStorage.getItem("cart")

        if (cart) {
            state.cart = JSON.parse(cart)
        }
    },
})

export const getters = ({

    cartItems: state => {
        return state.cart;
    },

    cartItemCount: state => {
        return state.cart.reduce((a, b) => a + b.quantity, 0);
    },

    cartTotal: state => {
        return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0);
    }

})

export const actions = ({

})



























