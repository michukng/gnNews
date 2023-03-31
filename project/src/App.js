import './index.css';
import Header from './Header';
import Popup from './Popup';
import Home from './Home';
import Footer from './Footer';
import Country from './Country';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Popup />
      <Header title="Wiadomości z całego świata!" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />      
    </div>
  );
}

export default App;
