import { ADD_TO_CART, REMOVE_FORM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find(c => c.product.id === payload.id);
      if (product) {
        const updatedCartItems = state.cartItems.map(item => {
          if (item.product.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
        return {
          ...state,
          cartItems: updatedCartItems
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }]
        };
      }
    case REMOVE_FORM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
      };
    default:
      return state;
  }
}

// import { ADD_TO_CART, REMOVE_FORM_CART } from "../actions/cartActions";
// import { cartItems } from "../initialValues/cartItems";

// const initialSatate={//Başlangıç durumumu tutmak için yazdım.
//     cartItems : cartItems
// }
// export default function cartReducer(state=initialSatate,{type,payload}){
// switch (type) {
//     case ADD_TO_CART:
//         let product=state.cartItems.find(c=>c.product.id===payload.id)//Yani eklediğim üründen önceden sepette varsa
//         if(product){
//             //Bu benim Sepetimdeki miktarın değişmesini sağlar ama her yere yansımaz sadece sepetime girdiğimde görürüm.Her yere yansıması için bunun referansını değiştirmem gerekir.
//             product.quantity++
//             return{
//                 ...state//Yani mesela miktarım 1 olan çubuk kraker vardı referansı arkada a olsun ben sadece miktarı arttırıp
//                 //bıraktığımda referans a olur miktar 2 olur isim kraker olur ama ben aynı zamanda spread kullanıp bunu ayrıştırırsam 
//                 //yeni referanslı bir nesne oluşturur.Referans değiştiği için redux bunu algılar.Böylece her yerde bu etki görür ve değişiklik her yere yansır.
//         }
//         }else{
//             return{
//                 /*Yeni eleman eklediğim zaman eğer bunu push ile yaparsam referans değişmez.Reduxta push kullnmayız.Bunun yerine burada
//                 referansın değişmesi için olan dizinin elemanlarını spread yöntemi ile ayırırız.yeni bir diziye koyarız yanınada yeni
//                 gelen ürünümüzü (payload) ekleriz.Tabii bunuda obje olarak ekleriz böylece yeni referanslı yeni bir dizi içerisinde 
//                 eklediğimiz ürün ve önceki ürünler olur.Referans değiştiği içinde gerekli olan her yerde render edilir.
//                 */
//                ...state,
//                 cartItems:[...state.cartItems,{quantity:1,product:payload}]
//         }           
//         }
//         case REMOVE_FORM_CART:
//             return{
//                 ...state,
//                 cartItems:state.cartItems.filter(c=>c.product.id!==payload.id)//Zaten filter işlemi sonucu her türü yeni bir dizi oluşur.Onun için bunu tekrar dizi içerisinde yazmadık.
//             }
//     default:
//         return state;
        
// }
// }

