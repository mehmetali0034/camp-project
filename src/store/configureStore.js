import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
//Store'umu oluşturacağım ardından içerisine rootreducerımı koyacağım yer.Böylece store üzerinden bütün reducer'larıma ulaşabileceğim.
const store = configureStore({
    reducer:rootReducer,
    devTools : true// geliştirici araçlarını etkinleştirir.Örn:React devtools
})
export default store;
