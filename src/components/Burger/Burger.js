import { Link } from "react-router-dom";
import './Burger.css'

function Burger(props) {
  return (
    <section className={`${props.isOpen ? 'burger burger_opened' : 'burger'}`} onClick={props.onClose} >
      <div className="burger__container" onClick={e => e.stopPropagation()}>
        <ul className="burger__list">
          <li className="burger__links">
            <Link to="/" className="burger__link" onClick={props.onClose}>Главная</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab1" className="burger__link " onClick={props.onClose}>Рекомендации</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab2" className="burger__link" onClick={props.onClose}>О диагнозе</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab3" className="burger__link" onClick={props.onClose}>Обследования</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab4" className="burger__link" onClick={props.onClose}>ХЛТ</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab5" className="burger__link" onClick={props.onClose}>Транспозиция яичников</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab6" className="burger__link" onClick={props.onClose}>После ХЛТ</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab7" className="burger__link" onClick={props.onClose}>Хирургия</Link>
          </li>
          <li className="burger__links">
            <Link to="/tab8" className="burger__link" onClick={props.onClose}>Клиники и ФЦ</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Burger;