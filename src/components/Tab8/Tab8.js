import './Tab8.css';
import { Link } from 'react-router-dom';
import Information from '../Information/Information';

function Tab8 () {
    return (
        <section className='tab8'>
          <Link to='/' className='tab8__link' >Главная</Link>
          <Information
            title='Крупнейшие клиники и ФЦ ЦО РФ'
          >
            <ul className='tab8__list'>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://www.ronc.ru/?ysclid=lx0853koi5137310027'>
                      Национальный медицинский исследовательский центр онкологии имени Н.Н. Блохина 
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://new.nmicr.ru/mnioi/'>
                      ФГБУ «НМИЦ радиологии» Минздрава России
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://med-rf.ru/?ysclid=lx087m8171282051936'>
                      НМИЦ ЛРЦ Минздрава России
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://inuclear.ru/uslugi-po-oms/luchevaya-terapiya-po-oms/'>
                      Институт ядерной медицины
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://rzd-medicine.ru/'>
                      «РЖД-Медицина» в Москве и МО
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://gnck.ru/'>
                      НМИЦ колопроктологии имени А.Н. Рыжих
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://proctocentr.ru/'>
                      ККМХ Первого МГМУ им. И. М. Сеченова
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://www.k31.ru/?ysclid=lx0dbkxuby4118720467'>
                      К+31
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://lapino2.ru/?ysclid=lx0dch88tr322063450'>
                      Онкологический центр Лапино
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__link' 
                      href='https://www.niioncologii.ru/'>
                      НМИЦ онкологии им. Н.Н. Петрова
                    </a>
                </li>
            </ul>
          </Information>
        </section>
    )
}

export default Tab8;
