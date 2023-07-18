import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/configureStore";
import "react-toastify/dist/ReactToastify.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//Burası ana componentimizdir.İlk başlatılacak olan js dosyamız.Ve burada hangi üst componentle başlayacağımızı söylüyoruz.Mesela burada root demişiz
   //<React.StrictMode>
//Provider ve içerisindeki parametresi sayesinde artık uygulamanın tamamı bizim store'umuzdan faydalabilir.
   <Provider store={store} >
      <BrowserRouter><App /></BrowserRouter>
   </Provider>
   //</React.StrictMode>
);
//, document.getElementById('root')//App componentini root'a yerleştir.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
