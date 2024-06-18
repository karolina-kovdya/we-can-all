import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Tab1 from '../Tab1/Tab1';
import Tab3 from '../Tab3/Tab3';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
