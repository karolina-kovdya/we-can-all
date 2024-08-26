import './Footer.css';

function Footer(props) {
    return (
        <footer className='footer'>
            <p className='footer__info'>«Мы можем все»</p>
            <p className='footer__data'>{props.data}</p>
        </footer>
    )
}

export default Footer;
