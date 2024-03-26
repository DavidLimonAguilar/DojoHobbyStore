import "../styles/info.css";

export const Informacion = () => {
    return (
        <>

            <div className="title-info">
                <h2 className="informacion"> INFORMACION</h2>
            </div>

            <div className="info-horarios">
                <h3>HORARIOS</h3>
                <div className="table-horario">
                    <table>
                        <thead>
                            <th></th>
                            <th>ABRE</th>
                            <th>CIERRA</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lunes</td>
                                <td>1:00 PM</td>
                                <td>8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Martes</td>
                                <td>1:00 PM</td>
                                <td>8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Miercoles</td>
                                <td>1:00 PM</td>
                                <td>8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Jueves</td>
                                <td>1:00 PM</td>
                                <td>8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Viernes</td>
                                <td>1:00 PM</td>
                                <td>8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Sabado</td>
                                <td>11:00 AM</td>
                                <td>8:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="ubicacion">
                <h3>¿DONDE NOS HUBICAMOS?</h3>

                <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7530.392190481139!2d-98.24725702212002!3d19.317295308714076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd9160a345e61%3A0x3715ea1624f46153!2sDojo+Hobby+Store!5e0!3m2!1ses-419!2smx!4v1526951688906"></iframe>
                </div>

            </div>
        </>
    )
}