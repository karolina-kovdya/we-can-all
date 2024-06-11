import './Header.css';
import icon from '../../images/logo_telegram_airplane_air_plane_paper_airplane_icon_143169.png'

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
            <div className='header__logo'>LO<br></br>GO</div>
        </header>
    )
}

export default Header;
