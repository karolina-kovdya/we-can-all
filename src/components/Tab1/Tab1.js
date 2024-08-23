import './Tab1.css';
import Information from '../Information/Information';
import file1 from '../../files/ClinikC21.pdf';
import file2 from '../../files/PrC21.pdf';
import file3 from '../../files/RC21.pdf';

function Tab1() {
  return (
    <section className='tab1'>
      <Information
        title='Что почитать?'
      >
        <p className='tab1__info-title'>Информация для ознакомления:</p>
        <ul className='tab1__list'>
          <li className='tab1__list-point'>
            <p className='tab1__info'>- Клинические рекомендации</p>
            <a
              className='tab1__file'
              href={file1}
              target="_blank"
              rel="noreferrer">
              Открыть файл PDF
            </a>
          </li>
          <li className='tab1__list-point'>
            <p className='tab1__info'>- Практические рекомендации</p>
            <a
              className='tab1__file'
              href={file2}
              target="_blank"
              rel="noreferrer">
              Открыть файл PDF
            </a>
          </li>
          <li className='tab1__list-point'>
            <p className='tab1__info'>- Руководство NCCN</p>
            <a
              className='tab1__file'
              href={file3}
              target="_blank"
              rel="noreferrer">
              Открыть файл PDF
            </a>
          </li>
          <li className='tab1__list-point'>
            <p className='tab1__info'>- ФЗ №323-ФЗ от 21.11.2011<br></br> «Об основах охраны здоровья граждан в РФ»</p>
            <a
              className='tab1__file'
              href='https://minzdrav.gov.ru/documents/7025-federalnyy-zakon-323-fz-ot-21-noyabrya-2011-g'
              target="_blank"
              rel="noreferrer">
              ФЗ №323-ФЗ
            </a>
          </li>
          <li className='tab1__list-point'>
            <p className='tab1__info'>- Справочник супергерои</p>
            <a
              className='tab1__file'
              href='https://onco-patients.ru/'
              target="_blank"
              rel="noreferrer">
              Справочник
            </a>
          </li>
        </ul>
      </Information>
    </section>
  )
}

export default Tab1;
