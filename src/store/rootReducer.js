//Tüm stateleri topladığım yer.

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer=combineReducers({
    cart : cartReducer
    //başka reducer'ım olurda onlarıda bunun içerisine yazacağım örneğin user olsa user:userReducer gibi
})
 export default rootReducer;


