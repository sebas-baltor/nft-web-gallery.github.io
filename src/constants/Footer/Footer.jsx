import "./Footer.scss";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { BsChevronBarExpand } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__flex">
                <div className="footer__logo">
                    <div className="logo">
                        <BsChevronBarExpand /> Mylogo
                    </div>
                    <p>Creado con la colaboracion de agencia de diseño y empresa de desarrollo de software</p>
                    <div className="footer__logo--social">
                        <button className="btn"><FaFacebookF /></button>
                        <button className="btn"><FaInstagram /></button>
                        <button className="btn"><FaLinkedinIn /></button>
                        <button className="btn"><FaRedditAlien /></button>
                    </div>
                </div>
                <div className="footer__item">
                    <h4>Links utiles</h4>
                    <ul>
                        <li>Colexionables</li>
                        <li>Fotografias</li>
                        <li>Cartas de trade</li>
                        <li>Mundos virtuales</li>
                    </ul>
                </div>
                <div className="footer__item">
                    <h4>Nuestra politica</h4>
                    <ul>
                        <li>Centro de ayuda</li>
                        <li>Nuevas colexiones</li>
                        <li>Estado de la platoforma</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div className="footer__suscribe">
                    <h4>Newsletter</h4>
                    <p>Suscribete a nuestro newsletter para ser el primero en recibir descuentos, ofertas y actualizaciones</p>
                    <div className="footer__suscribe--form">
                        <input type="email" placeholder="Ingresa tu email" />
                        <button type="button" className="btn__dark"><FiSend /></button>
                    </div>
                </div>
            </div>
            <hr />
            <p>Copyright por Sebastian y Graphocraz todo los derechos recervados</p>
        </footer>
    )
}
