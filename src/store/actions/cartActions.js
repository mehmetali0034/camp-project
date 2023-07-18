export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FORM_CART="REMOVE_FROM_CART"
export function addToCart(product){
    //redux bizden fonksiyon içerisinde ona bir obje göndermemizi ve bu objenin içeriisnde action adı ve payload (state'i etkileyecek olan veri) ister.
    return{
        type : ADD_TO_CART, 
        payload : product 
    }
 }
 export function removeFormCart(product){
    return{
        type : REMOVE_FORM_CART,
        payload : product
    }
 }