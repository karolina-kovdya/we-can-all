import './Information.css';

function Information (props) {
    return (
        <div className='information'>
          <div className='information__container'>
            <div className='information__heading'>
              <h1 className='information__title'>Диагноз:</h1>
              <h2 className='information__sibtitle'>{props.sibtitle}</h2>
            </div>
             {props.children}
          </div>
        </div>
    )
}

export default Information;