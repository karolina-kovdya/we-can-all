import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

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
        
        />
      </Routes>
    </div>
  );
}

export default App;
