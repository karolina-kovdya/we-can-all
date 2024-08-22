import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navgation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import Main from '../Main/Main';
import Tab1 from '../Tab1/Tab1';
import Tab3 from '../Tab3/Tab3';
import Tab6 from '../Tab6/Tab6';
import Tab7 from '../Tab7/Tab7';
import Tab8 from '../Tab8/Tab8';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  // useEffect(() => {
  //   const closePopupWithEsc = (e) => {
  //     if (e.key === "Escape") {
  //       closeBurgerMenu();
  //     }
  //   };
  //   window.addEventListener("keydown", closePopupWithEsc);
  //   return () => window.removeEventListener("keydown", closePopupWithEsc);
  // });

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  })

  function handleBurgerOpen () {
    setIsBurgerOpen(!isBurgerOpen)
  }

  function closeBurgerMenu () {
    setIsBurgerOpen(false)
  }

  return (
    <div className="App">
      <Burger isOpen={isBurgerOpen} onClose={closeBurgerMenu} />
      <Header />
      <Navgation />
      <Menu isOpen={isBurgerOpen} onBurger={handleBurgerOpen}/>
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
