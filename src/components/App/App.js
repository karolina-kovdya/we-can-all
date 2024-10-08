import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navgation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import Main from '../Main/Main';
import Tab1 from '../Tab1/Tab1';
import Tab3 from '../Tab3/Tab3';
import Tab4 from '../Tab4/Tab4';
import Tab6 from '../Tab6/Tab6';
import Tab7 from '../Tab7/Tab7';
import Tab8 from '../Tab8/Tab8';
import Footer from '../Footer/Footer';
import VideoPopup from '../VideoPopup/VideoPopup';
import { useEffect, useState } from 'react';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [video, setVideo] = useState({});

  useEffect(() => {
    const closePopupWithEsc = (e) => {
      if (e.key === "Escape") {
        closeBurgerMenu();
        closePopup();
      }
    };
    window.addEventListener("keydown", closePopupWithEsc);
    return () => window.removeEventListener("keydown", closePopupWithEsc);
  });

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0,0);
    } else {
      document.body.style.overflow = 'unset';
    }
  })

  function handleBurgerOpen () {
    setIsBurgerOpen(!isBurgerOpen)
  }

  function handlePopupOpen(video) {
    setIsPopupOpen(!isPopupOpen);
    setVideo(video)
  }

  function closeBurgerMenu () {
    setIsBurgerOpen(false)
  }

  function closePopup() {
    setIsPopupOpen(false);
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
          element={<Main onOpen={handlePopupOpen}/>}
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
          path='/tab4'
          element={<Tab4 />} 
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
      <VideoPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        video={video}
      />
      <Footer />
    </div>
  );
}

export default App;
