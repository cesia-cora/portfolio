import { CACNode, CS50W, CS50x, DB } from '../images';
import { Fade } from "react-awesome-reveal";

export const Courses = () => {
    return(
        <>
            <div className="courses">
                <div className='cert'>
                    <Fade>
                    <a href="https://certificates.cs50.io/900a2962-c601-46a1-9250-7141d80e44ed.pdf" target='_blank'><img src={CS50x} alt='Computer Science Certification'></img></a>
                    <p>
                        Curso de Introducción a las Ciencias de la Computación.
                        En este trayecto aprendí programación, algoritmos y estructura de datos con C y Python.
                    </p>
                    </Fade>
                </div>
                <div className='cert'>
                    <Fade>
                    <a href='https://certificates.cs50.io/ec3e971d-4dc7-4da2-8ede-689943e659c4.pdf' target='_blank'><img src={CS50W} alt='Web Programming Certification'></img></a>
                    <p>
                        Curso de Desarrollo Web con Python y JavaScript.
                        Enseñanza en desarrollo front-end y back-end con el <i>framework</i> Django.
                    </p>
                    </Fade>
                </div>
                <div className='cert'>
                    <Fade>
                    <a href="https://drive.google.com/file/d/1P2P3F0VDBVBzIq4ymwxJQdGon8f51HdH/view?pli=1" target='_blank'><img src={CACNode} alt='Node.js Web Development Certification'></img></a>
                    <p>
                        Curso de desarrollo web back-end y front-end con JavaScript. Aplicaciones web con patrón de arquitectura MVC y base de datos con función CRUD.
                    </p>
                    </Fade>
                </div>
                <div className='cert'>
                    <Fade>
                    <a href='' target='_blank'><img src={DB} alt='Tableau Data Analysis Certification'></img></a>
                    <p>
                        Introducción al análisis de datos con la herramienta Tableau.
                    </p>
                    </Fade>
                </div>
            </div>
        </>
    )
}