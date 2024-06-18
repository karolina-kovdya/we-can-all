import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <section className='navigation'>
          <ul className='navigation__list'>
            <li className="navigation__links">
              <Link to="/tab1" className="navigation__link">Вкладка1</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >Вкладка2</Link>
            </li>
            <li className="navigation__links">
              <Link to="/tab3" className="navigation__link" >Вкладка3</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >Вкладка4</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >Вкладка5</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >Вкладка6</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >Вкладка7</Link>
            </li>
            <li className="navigation__links">
              <Link to="/" className="navigation__link" >Вкладка8</Link>
            </li>
          </ul>
        </section>
    )
}

export default Navigation;