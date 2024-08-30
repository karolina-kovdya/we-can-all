import './Tab8.css';
import Information from '../Information/Information';

function Tab8 () {
    return (
        <section className='tab8'>
          <Information
            title='Крупнейшие профильные клиники и ФЦ России'
          >
            <ul className='tab8__list'>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://www.ronc.ru/?ysclid=lx0853koi5137310027'>
                      Национальный медицинский исследовательский центр онкологии имени Н.Н. Блохина 
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://lapino2.ru/?ysclid=lx0dch88tr322063450'>
                      Онкологический центр Лапино
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://new.nmicr.ru/mnioi/'>
                      ФГБУ «НМИЦ радиологии» Минздрава России
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://med-rf.ru/?ysclid=lx087m8171282051936'>
                      НМИЦ ЛРЦ Минздрава России
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://inuclear.ru/uslugi-po-oms/luchevaya-terapiya-po-oms/'>
                      Институт ядерной медицины
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://rzd-medicine.ru/'>
                      «РЖД-Медицина» в Москве и МО
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://gnck.ru/'>
                      НМИЦ колопроктологии имени А.Н. Рыжих
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://proctocentr.ru/'>
                      ККМХ Первого МГМУ им. И. М. Сеченова
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://www.k31.ru/?ysclid=lx0dbkxuby4118720467'>
                      К+31
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://www.niioncologii.ru/'>
                      НМИЦ онкологии им. Н.Н. Петрова
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://ldc.ru/'>
                      МИБС Медицинский институт имени Березина Сергея
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://oncocentre.ru/'>
                      Онкологический центр имени Н.П. Напалкова
                    </a>
                </li>
                <li className='tab8__point'>
                    <a 
                      className='tab8__info' 
                      target='blank'
                      href='https://rrcrst.ru/?ysclid=m0fav1lvja774580335'>
                      Российский научный центр радиологии и хирургических технологий имени академика А.М. Гранова
                    </a>
                </li>
            </ul>
          </Information>
        </section>
    )
}

export default Tab8;
