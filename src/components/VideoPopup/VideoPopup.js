import './VideoPopup.css';

function VideoPopup(props) {
    return (
        <section className={props.isOpen ? "videoPopup_opened videoPopup": "videoPopup" } onClick={props.onClose} >
            <div className="videoPopup__container" onClick={e => e.stopPropagation()}>
              <button onClick={props.onClose} className="videoPopup__close" type="button" aria-label="Close"></button>
              <video className="videoPopup__video" src={props.video} controls />
            </div>
        </section>
    )
}

export default VideoPopup;
