
import Imagen1 from '../images/Logo.svg';
import WS from '../images/ws.svg';
import Face from '../images/face.svg';
import Insta from '../images/insta.svg';
import "../styles/footer.css";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer1">
                    <div className="logo-footer">
                        <img src={Imagen1} alt="" />
                    </div>
                    <div className="follow">
                        <div className="foll">
                            <p>SIGUENOS</p>
                        </div>
                        <div className="redes">
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=2463956356"><img src={WS} alt="" /></a>
                            <a target="_blank" href="https://www.facebook.com/DojoHobbyStore/?locale=es_LA"><img src={Face} alt="" /></a>
                            <a target="_blank" href="https://www.instagram.com/DojoHobbyStore?fbclid=IwAR1UZeysT_fIBzRzxcQmx4N5YaTqH4hT73W89LNHs8lXVt5dpYocAjSop6A"><img src={Insta} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer2">
                    <p>© Todos los derechos reservados a David Limón Aguilar</p>
                </div>
            </footer>
        </>
    )
}