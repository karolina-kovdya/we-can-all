import './Note.css';
import qr from '../../images/qr.png';
import romanov from '../../images/DSC09199.jpg';
import rasulov from '../../images/rasulov.jpg';
import inst from '../../images/inst.png';
import vk from '../../images/vk.png';

function Note() {
  return (
    <section className='note'>
      <div className='note__container'>
        <div className='note__block'>
          <div className='note__information'>
            <p className='note__info'>
              Сайт создан с целью информирования и поддержки пациентов с диагнозом плоскоклеточный рак анального канала, анального края,
              перианальной кожи C 21 C 44.5 по МКБ при поддержке Telegram сообщества пациентов
              <a className='note__link'
                href='https://t.me/+zpdVmwyIunhmOGMy'
                target='blanc'
                title='перейти в Telegram сообщество'>
                «Мы можем все»
              </a>
              и врачей:
            </p>
            <img className='note__qr' alt='qr-code' src={qr} title='сканировать QR-код для перехода в Telegram сообщество'/>
          </div>
        </div>
        <div className='note__cards'>
          <div className='note__card'>
            <img className='note__img' src={rasulov} alt='фотография Расулова'></img>
            <div className='note__doctors'>
              <a className='note__doctors-link' href='https://prodoctorov.ru/odincovo/vrach/358448-rasulov' target='blanc' title='перейти на сайт ПРОДОКТОРОВ'>
                Расулов Арсен Османович
              </a>
              <p className='note__card-info'>
                врач-колопроктолог,врач-онколог,доктор медицинских наук,
                заведующий отделением онкоколопроктологии КГ «Лапино - 2» г. Москва
              </p>
                <div className='note__card-contacts'>
                  <a className='note__card-link' href='https://www.instagram.com/dr_arsen_rasulov?igsh=MTl3MDFpOHJuMGV0eg==' target='blanc'>
                    <img 
                      className='node__card-iconInst' 
                      src={inst}
                      alt='иконка инстаграм'
                      title='посмотреть профиль в Instagram'
                    />
                  </a>
                  <a className='note__card-link' href='https://vk.com/dr_arsen_rasulov' target='blanc'>
                    <img 
                      className='node__card-iconVk' 
                      src={vk}
                      alt='иконка инстаграм'
                      title='посмотреть профиль в ВКонтакте'
                    />
                  </a>
                </div>
            </div>
          </div>
          <div className='note__card note__card_down'>
            <img className='note__img' src={romanov} alt='фотография Романова'></img>
            <div className='note__doctors'>
              <a className='note__doctors-link' href='https://prodoctorov.ru/moskva/vrach/365669-romanov' target='blanc' title='перейти на сайт ПРОДОКТОРОВ'>
                Романов Денис Сергеевич
              </a>
              <p className='note__card-info'>
                врач-онколог, зам. Генерального директора федеральной сети клиник экспертной онкологии «Евроонко» по научной деятельности,
                врач-радиотерапевт, заведующий радиотерапевтическим отделением ЧУЗ «ЦКБ «РЖД-Медицина»,
                доцент кафедры онкологии и лучевой терапии МГМСУ им. А.И. Евдокимова
              </p>
            </div>
          </div>
        </div>
        <div className='note__block note__block_note'>
          <p className='note__info'>
            Информация, размещённая на сайте, а также мнение специалиста носят исключительно ознакомительно-справочный характер
            и не являются медицинской услугой и медицинской помощью по смыслу Федерального закона от 21.11.2011 N 323-ФЗ
            «Об основах охраны здоровья граждан в Российской Федерации» и не заменяют очного приема врача.
            Определение диагноза и методик лечения остаётся прерогативой Вашего лечащего врача.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Note;