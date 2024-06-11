import './Header.css';
import icon from '../../images/tg.png';
import logo from '../../images/logo.png';

function Header () {
    return (
        <header className='header'>
            <div className='header__info'>
              <p className='header__info-text'>Сайт создан при поддержке сообщества</p>
              <p className='header__info-name'>«Мы можем все»</p>
              <a 
                className='header__link' 
                href='https://t.me/+zpdVmwyIunhmOGMy'
                target='blanc'
                >
                <img 
                  className='header__icon' 
                  alt='иконка телеграм' 
                  src={icon}
                />
              </a>
            </div>
            <img 
              className='header__logo'
              alt='логотип'
              src={logo}
            />
        </header>
    )
}

export default Header;
