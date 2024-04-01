import "../styles/manga.css";
import chivi1 from "../images/chareventos.png";

export const Manga = () => {
    return (
        <>
            <div className="manga-main">
                <h2>MANGA</h2>
                <div className="manga-text">
                    <p>Es la palabra japonesa para designar a las historietas en general. Fuera de japón se utiliza tanto para referirse a las historiatas de origen japonés como al estilo de dibujo utilizado en estas. Abarca una extensa variedad de géneros
                        y llega a publicos diversos.Tenemos los títulos más famosos y grandiosos del manga como: Dragon Ball, Naruto, One Piece, Death Note de la mano  de los distribuidores oficiales como lo son PANINI  COMICS MEXICO y KAMITE.</p>
                    <div className="charlotte">
                        <img src={chivi1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}