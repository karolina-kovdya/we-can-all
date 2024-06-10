import './Note.css';
import img from '../../images/doctor.png'

function Note() {
  return (
    <div className='note'>
      <div className='note__container'>
        <p className='note__info'>
          Сайт создан с целью информирования и поддержки пациентов с диагнозом плоскоклеточный рак анального канала, анального края,
          перианальной кожи C 21 C 44.5 по МКБ при поддержке Telegram сообщества пациентов
          <span className='note__info-called'>«Мы можем все»</span>
        </p>
        <div className='note__cards'>
          <div className='note__card'>
            <img className='note__img'src={img} alt='фотография Романова'></img>
            <p className='note__card-name'>Романова</p>
          </div>
          <div className='note__card'>
            <img className='note__img'src={img} alt='фотография Расулова'></img>
            <p className='note__card-name'>Расулова</p>
          </div>
        </div>
        <p className='note__info'>
          Информация, размещённая на сайте, а также мнение специалиста носит исключительно ознакомительно-справочный характер
          и не является медицинской услугой и медицинской помощью по смыслу Федерального закона от 21.11.2011 N 323-ФЗ
          «Об основах охраны здоровья граждан в Российской Федерации» и не заменяет очного приема врача.
          Определение диагноза и методик лечения остаётся прерогативой Вашего лечащего врача.
        </p>
      </div>
    </div>
  )
}

export default Note;