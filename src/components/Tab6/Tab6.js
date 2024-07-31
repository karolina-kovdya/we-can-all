import './Tab6.css';
import Information from '../Information/Information';

function Tab6() {
    return (
        <section className='tab6'>
            <Information
                title='Наблюдение после ХЛТ'
            >
                <p className='tab6__info-title'> Основные рекомендуемые обследования и анализы и их рамки</p>
                <table className='tab6___table'>
                    <tbody>

                        <tr className='tab6__table-line'>
                            <th className='tab6__table-cellTitle'>Наименование</th>
                            <th className='tab6__table-cellTitle'>1-2 год</th>
                            <th className='tab6__table-cellTitle'>3-5 год</th>
                            <th className='tab6__table-cellTitle'>После 5 лет</th>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>ОАК
                                <span className='tab6__tableCell-speq'>*</span>
                            </td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>

                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>ОАМ
                                <span className='tab6__tableCell-speq'>*</span>
                            </td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>

                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>БАК
                                <span className='tab6__tableCell-speq'>*</span>
                            </td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>

                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Онкомаркеры SCC,РЭА, <br></br>СА-19-9 (онкомаркеры <br></br>не заменяют другдруга)
                                <span className='tab6__tableCell-speq'>**</span>
                            </td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>

                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Пальцевой осмотр<br></br> анального канала <br></br> и прямой кишки</td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Пальпация<br></br>лимфатических узлов<br></br>+/- УЗИ</td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Колоноскопия<br></br>(аноскопия, <br></br>ректроманоскопия,<br></br>ТРУзи). Вид <br></br>исследования по<br></br>усмотрению врача</td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>МРТ малого таза с в/в<br></br>контрастированием</td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Если ПЭТ – КТ
                                <span className='tab6__tableCell-speq'>***</span>
                            </td>
                            <td className='tab6__tableCell'>По усмотрению<br></br>врача, но не реже чем<br></br>каждые 6 месяцев,<br></br>оптимально 3 месяца<br></br>и далее переход на 6 <br></br>месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Если комплекс КТ<br></br>грудной клетки и<br></br>органов брюшной<br></br>полости с в/в<br></br>контрастированием
                                <span className='tab6__tableCell-speq'>***</span>
                            </td>
                            <td className='tab6__tableCell'>Каждые 3 месяца</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Консультация врача<br></br>онколога</td>
                            <td className='tab6__tableCell'>Каждые 3 месяца на<br></br>основании<br></br>пройденных<br></br>исследований и<br></br>обследований</td>
                            <td className='tab6__tableCell'>Каждые 6 месяцев</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell'>Осмотр гинеколога для<br></br>женщи</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                            <td className='tab6__tableCell'>Не реже чем 1 раз в год</td>
                        </tr>
                        <tr className='tab6__table-line'>
                            <td className='tab6__tableCell tab6__tableCell_last'>ПАП тест для женщин</td>
                            <td className='tab6__tableCell tab6__tableCell_last'>Не реже чем 1 раз в год</td>
                            <td className='tab6__tableCell tab6__tableCell_last'>Не реже чем 1 раз в год</td>
                            <td className='tab6__tableCell tab6__tableCell_last'>Не реже чем 1 раз в год</td>
                        </tr>
                    </tbody>
                </table>
                <p className='tab6__note'>*- именно онкологического смысла в сдаче этих анализов по факту удаления от окончания
                    лечения нет, смысл в контроле общего состояния организма
                </p>
                <p className='tab6__note'>** - если маркёры не были повышены до лечения (а РЭА и СА19.9 и вовсе не должны быть
                    показательны для ПРАК), то тоже резона сдавать их далее нет. Разве что при подозрении /
                    подтверждении рецидива или прогрессирования опухолевого процесса
                </p>
                <p className='tab6__note'>*** - пожалуй, частота выполнения КТ взамен ПЭТ-КТ должны быть одинаковой
                </p>
                <div className='tab6__block'>
                    <p className='tab6__block-note'>
                        Не все вышеуказанные исследования и обследования проходят в рамках ОМС данный вопрос
                        необходимо обсуждать с Вашим врачом. Информация носит рекомендательный характер.
                    </p>
                </div>
            </Information>
        </section>
    )
}

export default Tab6;