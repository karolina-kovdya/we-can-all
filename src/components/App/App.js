import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navgation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Tab1 from '../Tab1/Tab1';
import Tab3 from '../Tab3/Tab3';
import Tab6 from '../Tab6/Tab6';
import Tab7 from '../Tab7/Tab7';
import Tab8 from '../Tab8/Tab8';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navgation />
      <Routes >
        <Route 
          path='/'
          element={<Main />}
        />
        <Route 
          path='/tab1'
          element={<Tab1 />}
        />
        <Route 
          path='/tab3'
          element={<Tab3 />}
        />
        <Route 
          path='/tab6'
          element={<Tab6 />}
        />
        <Route 
          path='/tab7'
          element={<Tab7 />}
        />
        <Route 
          path='/tab8'
          element={<Tab8 />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
