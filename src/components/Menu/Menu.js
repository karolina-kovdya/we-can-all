import './Menu.css';

function Menu(props) {

  function handleClick() {
    props.onBurger();
  }

  return (
    <section className='menu'>
     {props.isOpen ? (
        <div className="menu__btn" onClick={handleClick}>
          <div className="menu__bar menu__bar1 menu__bar_close"></div>
          <div className="menu__bar menu__bar2 menu__bar_close"></div>
          <div className="menu__bar menu__bar3 menu__bar_close"></div>
        </div>
      ) : (
        <div className="menu__btn" onClick={handleClick}>
          <div className="menu__bar menu__bar1"></div>
          <div className="menu__bar menu__bar2"></div>
          <div className="menu__bar menu__bar3"></div>
        </div>
      )}
    </section>
  )
}

export default Menu;