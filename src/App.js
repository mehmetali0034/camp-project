
import { Container } from 'semantic-ui-react';
import './App.css';//Uygulamanın css kodları buradan geliyor.
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'//Semantic UI react'ı import etmiş oldum.Bundan önce terminalden de npm install semantic-ui-react semantic-ui-css dedim
import Navi from './layouts/Navi';
function App() {//Buradaki kod aslında bize bir component oluşturur
  return (
    <div className="App">
      <Navi/>
      <Container className='main' >
        <Dashboard />
      </Container>
    </div>
  );
}
export default App;
