import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <section className='navigation'>
          <ul className='navigation__list'>
            <li className="navigation__links">
              <Link to="/tab1" className="navigation__link">Рекомендации</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >О диагнозе</Link>
            </li>
            <li className="navigation__links">
              <Link to="/tab3" className="navigation__link" >Обследования</Link>
            </li>
            <li className="navigation__links">
              <Link to="/tab4" className="navigation__link" >ХЛТ</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >Транспозиция яичников</Link>
            </li>
            <li className="navigation__links">
              <Link to="/tab6" className="navigation__link" >После ХЛТ</Link>
            </li>
            <li className="navigation__links">
              <Link to="/tab7" className="navigation__link" >После операции</Link>
            </li>
            <li className="navigation__links">
              <Link to="/tab8" className="navigation__link" >Клиники и ФЦ</Link>
            </li>
          </ul>
        </section>
    )
}

export default Navigation;