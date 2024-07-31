import './Information.css';
import { Link } from 'react-router-dom';

function Information (props) {
    return (
        <div className='information'>
          <div className='information__container'>
            <Link to='/' className='information__link' >Главная</Link>
            <div className='information__heading'>
              <h1 className='information__title'>{props.title}</h1>
            </div>
             {props.children}
          </div>
        </div>
    )
}

export default Information;