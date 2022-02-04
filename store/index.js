
function updateLocalStorage( cart ) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function updateCustomerDetails( billingDetails ) {
    localStorage.setItem("billingDetails", JSON.stringify(billingDetails))
}

function updateFormDetails( formDetails ) {
    localStorage.setItem("formDetails", JSON.stringify(formDetails))
}


export const state = () => ({
    cart: [],
    billingDetails: [],
    formDetails: [],
})


export const mutations = ({

    // SAVING BILLINGDETAILS
    saveCustomerDetails ( state, customerDetails ) {

        if (state.billingDetails[0]) {
            state.billingDetails[0].firstName = customerDetails[0].firstName;
            state.formDetails[0].firstName = customerDetails[0].firstName;
            state.billingDetails[0].lastName = customerDetails[0].lastName;
            state.formDetails[0].lastName = customerDetails[0].lastName;
            state.billingDetails[0].streetName = customerDetails[0].streetName;
            state.formDetails[0].streetName = customerDetails[0].streetName;
            state.billingDetails[0].streetNumber = customerDetails[0].streetNumber;
            state.formDetails[0].streetNumber = customerDetails[0].streetNumber;
            state.billingDetails[0].addition = customerDetails[0].addition;
            state.formDetails[0].addition = customerDetails[0].addition;
            state.billingDetails[0].zipCode = customerDetails[0].zipCode;
            state.formDetails[0].zipCode = customerDetails[0].zipCode;
            state.billingDetails[0].place = customerDetails[0].place;
            state.formDetails[0].place = customerDetails[0].place;
            state.billingDetails[0].country = customerDetails[0].country;
            state.formDetails[0].country = customerDetails[0].country;
            state.billingDetails[0].email = customerDetails[0].email;
            state.formDetails[0].email = customerDetails[0].email;
            state.billingDetails[0].phoneNumber = customerDetails[0].phoneNumber;
            state.formDetails[0].phoneNumber = customerDetails[0].phoneNumber;

        } else {
            state.billingDetails = customerDetails;
            state.formDetails = customerDetails;
        }

        updateCustomerDetails(state.billingDetails);
        updateFormDetails(state.formDetails);

    },

    // SAVING SHIPPINGDETAILS
    saveShipping ( state, shipping ) {
        state.billingDetails[0].shipping = shipping;
        state.formDetails[0].shipping = shipping;

        if (shipping == "Verzending via PostNL") {
            state.billingDetails[0].shippingCosts = 5;
            state.formDetails[0].shippingCosts = 5;
            state.billingDetails[0].shippingLabel = "5,00";
            state.formDetails[0].shippingLabel = "5,00";

        }
        else if (shipping == "Gratis bezorging in Genemuiden en Urk") {
            state.billingDetails[0].shippingCosts = 0;
            state.formDetails[0].shippingCosts = 0;
            state.billingDetails[0].shippingLabel = "0,00";
            state.formDetails[0].shippingLabel = "0,00";
        }

        updateCustomerDetails(state.billingDetails);
        updateFormDetails(state.formDetails);
    },

    // SAVING PAYMENTDETAILS
    savePaymethod ( state, paymethod ) {
        state.billingDetails[0].paymethod = paymethod;
        state.formDetails[0].paymethod = paymethod;
        updateCustomerDetails(state.billingDetails);
        updateFormDetails(state.formDetails);
    },







    // ################################################### CART ########################################################### //


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
                state.cart = state.cart.filter(item => item.id !== product.id)
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
            state.cart = state.cart.filter(item => item.id !== product.id)
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

    updateBillingDetailsFromLocalStorage ( state ) {
        const billingDetails = localStorage.getItem("billingDetails")

        if (billingDetails) {
            state.billingDetails = JSON.parse(billingDetails)
        }
    },

    updateFormDetailsLocalStorage ( state ) {
        const formDetails = localStorage.getItem("formDetails")

        if (formDetails) {
            state.formDetails = JSON.parse(formDetails)
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
    },

    // GET BILLINGDETAILS
    formDetails: state => {
        return state.formDetails;
    },
    customerDetails: state => {
        return state.billingDetails;
    }
})

export const actions = ({

})



























