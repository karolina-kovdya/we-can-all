import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Tab1 from '../Tab1/Tab1';

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
      </Routes>
    </div>
  );
}

export default App;
