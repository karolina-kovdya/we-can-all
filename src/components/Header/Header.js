import './Header.css';

function Header () {
    return (
        <header className='header'>
            <div className='header__info'>
              <p className='header__info-text'>Сайт создан при поддержке сообщества</p>
              <p className='header__info-name'>«Мы можем все»</p>
            </div>
            <div className='header__logo'>LO<br></br>GO</div>
        </header>
    )
}

export default Header;
