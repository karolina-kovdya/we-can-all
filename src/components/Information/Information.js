import './Information.css';

function Information (props) {
    return (
        <div className='information'>
          <div className='information__container'>
            <div className='information__heading'>
              <h1 className='information__title'>{props.title}</h1>
            </div>
             {props.children}
          </div>
        </div>
    )
}

export default Information;