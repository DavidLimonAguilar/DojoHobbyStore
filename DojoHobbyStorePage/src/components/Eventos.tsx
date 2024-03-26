import "../styles/eventos.css"
import imge1 from "../images/amazing-moving-anime-wallpapers-for-desktop-37.jpg";
import imge2 from "../images/wall.png";
import imge3 from "../images/eventoss3.jpg";

export const Eventos = () => {
    return (
        <>
            <div className="main-events">
                <div className="title-eve"><h3 className="eve">EVENTOS</h3></div>
                <div className="targets">
                    <div className="main-target">
                        <img className="background1" src={imge2} alt="" />
                        <div className="content">
                            <h2>JUEVES</h2>
                            <div className="text">
                                <h3 className="title-targets">Torneo Yu-Gi-Oh!</h3>
                                <div>
                                    <p>Horario: 4:00pm - 8:00pm</p>
                                    <p>Formato: Avanzado</p>
                                    <p>Costo: $35</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-target">
                        <img className="background2" src={imge1} alt="" />
                        <div className="content">
                            <h2>SABADOS</h2>
                            <div>
                                <h3 className="title-targets">Torneo Booster Draft</h3>
                                <div className="text">
                                    <p>Horario: 5:00pm - 8:00pm</p>
                                    <p>Formato: draft</p>
                                    <p>Costo: $280</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-target">
                        <img className="background3" src={imge3} alt="" />
                        <div className="content">
                            <h2>DOMINGOS</h2>
                            <div>
                                <h3 className="title-targets">Torneo Booster Draft</h3>
                                <div className="text">
                                    <p>Horario: 3:00pm - 6:00pm</p>
                                    <p>Formato: draft</p>
                                    <p>Costo: $280</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}