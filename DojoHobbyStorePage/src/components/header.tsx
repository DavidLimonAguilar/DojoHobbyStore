//import { Box, Image, Wrap, WrapItem, Flex, Center, Text } from '@chakra-ui/react';
import Imagen1 from '../images/Logo.svg';
import Imagen2 from '../images/fondo1.png';
import { Manga } from '../components/manga';
import { Informacion } from '../components/Informacion';
import { Eventos } from '../components/Eventos';
import {Footer} from '../components/footer';
import "../styles/header.css";
export const Header = () => {
    return (
        <>
            <header>
                <div className="main-header">
                    <div className="header-background">
                        <img src={Imagen2} alt="" />
                        <div className="black"></div>
                    </div>
                    <div className="container-Header">
                        <div className="first-header">
                            <img src={Imagen1} alt="sasas" />
                            <nav>
                                <ul>
                                    <li className="menu-1"><a href="#manga">INICIO </a></li>
                                    <li><a href="#info" className="menu-2">INFORMACION </a></li>
                                    <li><a href="#eventos" className="menu-3">EVENTOS </a></li>
                                    <li><a target="_blank" href="https://www.facebook.com/DojoHobbyStore?locale=es_LAs" className="menu-4">CATALOGO </a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="Text-header">
                            <p>BIENVENIDOS</p>
                            <p className="a">A</p>
                            <p>DOJO HOBBY STORE</p>
                        </div>

                        <div className="heacer-List">
                            <p>MANGA</p>
                            <p>ANIME</p>
                            <p>COMICS</p>
                            <p>YU-GI-OH!</p>
                            <p>MAGIC</p>
                        </div>
                    </div>
                </div>
            </header>

            <div id='manga'>
                <Manga></Manga>
            </div>

            <div id='info'>
                <Informacion></Informacion>
            </div>

            <div id='eventos'>
                <Eventos></Eventos>
            </div>

            <Footer></Footer>
        </>
    );
};
