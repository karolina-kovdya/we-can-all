import './Tab7.css';
import Information from '../Information/Information';

function Tab7() {
    return (
        <section className='tab7'>
            <Information
                title='Наблюдение после хирургического лечения'
            >
                <p className='tab7__info-title'>Основные рекомендуемые обследования и анализы после операции</p>
                <table className='tab7___table'>
                    <tbody>

                        <tr className='tab7__table-line'>
                            <th className='tab7__table-cellTitle'>Наименование</th>
                            <th className='tab7__table-cellTitle'>1-2 год</th>
                            <th className='tab7__table-cellTitle'>3-5 год</th>
                            <th className='tab7__table-cellTitle'>&#62; 5 лет</th>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>ОАК
                                <span className='tab7__tableCell-speq'>*</span>
                            </td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>

                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>ОАМ
                                <span className='tab7__tableCell-speq'>*</span>
                            </td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>

                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>БАК
                                <span className='tab7__tableCell-speq'>*</span>
                            </td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>

                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Онкомаркеры SCC,<br></br>РЭА,СА-19-9<br></br> (онкомаркеры <br></br>не заменяют друг друга)
                                <span className='tab7__tableCell-speq'>**</span>
                            </td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>

                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Пальцевой осмотр<br></br> анального канала <br></br> и прямой кишки</td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Пальпация<br></br>лимфатических узлов<br></br>+/- УЗИ</td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Колоноскопия<br></br>(аноскопия, <br></br>ректроманоскопия,<br></br>ТРУзи). Вид <br></br>исследования по<br></br>усмотрению врача</td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>МРТ малого таза с в/в<br></br>контрастированием</td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Если ПЭТ – КТ
                                <span className='tab7__tableCell-speq'>***</span>
                            </td>
                            <td className='tab7__tableCell'>По усмотрению<br></br>врача, но не реже чем<br></br>каждые 6 мес.,<br></br>оптимально 3 мес.<br></br>и далее переход на 6 <br></br>мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Если комплекс КТ<br></br>грудной клетки и<br></br>органов брюшной<br></br>полости с в/в<br></br>контрастированием
                                <span className='tab7__tableCell-speq'>***</span>
                            </td>
                            <td className='tab7__tableCell'>Каждые 3 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Консультация врача<br></br>онколога</td>
                            <td className='tab7__tableCell'>Каждые 3 мес. на<br></br>основании<br></br>пройденных<br></br>исследований и<br></br>обследований</td>
                            <td className='tab7__tableCell'>Каждые 6 мес.</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell'>Осмотр гинеколога для<br></br>женщин</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                            <td className='tab7__tableCell'>1 раз в год</td>
                        </tr>
                        <tr className='tab7__table-line'>
                            <td className='tab7__tableCell tab7__tableCell_last'>ПАП тест для женщин</td>
                            <td className='tab7__tableCell tab7__tableCell_last'>1 раз в год</td>
                            <td className='tab7__tableCell tab7__tableCell_last'>1 раз в год</td>
                            <td className='tab7__tableCell tab7__tableCell_last'>1 раз в год</td>
                        </tr>
                    </tbody>
                </table>
                <p className='tab7__note'>*- именно онкологического смысла в сдаче этих анализов по факту удаления от окончания
                    лечения нет, смысл в контроле общего состояния организма
                </p>
                <p className='tab7__note'>** - если маркёры не были повышены до лечения (а РЭА и СА19.9 и вовсе не должны быть
                    показательны для ПРАК), то тоже резона сдавать их далее нет. Разве что при подозрении /
                    подтверждении рецидива или прогрессирования опухолевого процесса
                </p>
                <p className='tab7__note'>*** - пожалуй, частота выполнения КТ взамен ПЭТ-КТ должны быть одинаковой
                </p>
                <div className='tab7__block'>
                    <p className='tab7__block-note'>
                        Не все вышеуказанные исследования и обследования проходят в рамках ОМС данный вопрос
                        необходимо обсуждать с Вашим врачом. Информация носит рекомендательный характер.
                    </p>
                </div>
            </Information>
        </section>
    )
}

export default Tab7;