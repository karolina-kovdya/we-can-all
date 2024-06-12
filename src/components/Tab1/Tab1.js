import { Link } from 'react-router-dom';
import './Tab1.css';

function Tab1 () {
    return (
        <section className='tab1'>
          <Link to='/' className='tab1__link' >Главная</Link>
        </section>
    )
}

export default Tab1;
