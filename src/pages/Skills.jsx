import {
    CSS, Python, Django, NodeJS, React, Vite, Javascript,
    Express, Bootstrap, Bulma, FastAPI, Postman,
    Postgres, SQLite, MySQL, Mongo, Sass, Firebase, Tableau1, Git,
    Pandas, Numpy, Seaborn
} from '../images';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Skills = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div class="title">
                {t('title.skills')}
            </div>
            <div class="container-cards">
                <div class="card">
                    <div class="wrapper">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                            <div class="container-list">
                                <span class=''><img src={Python}></img>
                                    <p>Python</p>
                                </span>
                                <span><img src={Pandas}></img>
                                    <p>Pandas</p></span>
                                <span><img src={Numpy}></img>
                                    <p>Numpy</p></span>
                                <span><img src={Seaborn}></img>
                                    <p>Seaborn</p></span>
                                <span class=""><img src={Django}></img>
                                    <p>Django</p>
                                </span>
                                <span class=""><img src={FastAPI}></img>
                                    <p>FastAPI</p></span>
                                <span class=""><img src={SQLite} width="80"></img>
                                    <p>SQLite</p></span>
                                <span class=""><img src={MySQL} width="80"></img>
                                    <p>MySQL</p></span>
                                <span class=""><img src={Postgres} width="80"></img>
                                    <p>PostgreSQL</p></span>
                                <span class=""><img src={NodeJS}></img>
                                    <p>Node.js</p>
                                </span>
                                <span class=""><img src={Javascript} width="80"></img>
                                    <p>JavaScript</p></span>
                                <span class=""><img src={Express} width="80"></img>
                                    <p>Express.js</p></span>
                                <span class=""><img src={React} width="80"></img>
                                    <p>React</p></span>
                                <span class=""><img src={Vite} width="80"></img>
                                    <p>Vite</p></span>
                                <span class=""><img src={Mongo}></img>
                                    <p>MongoDB</p></span>
                                <span class=""><img src={Firebase}></img>
                                    <p>Firebase</p></span>
                                <span class=""><img src={CSS} width="80"></img>
                                    <p>CSS</p></span>
                                <span class=""><img src={Sass} width="80"></img>
                                    <p>Sass</p></span>
                                <span class=""><img src={Bootstrap} width="80"></img>
                                    <p>Bootstrap</p></span>
                                <span class=""><img src={Bulma} width="80"></img>
                                    <p>Bulma</p></span>
                                <span class=""><img src={Postman} width="90"></img>
                                    <p>Postman</p></span>
                                <span class=""><img src={Git} width="90"></img>
                                    <p>Git</p></span>
                                <span class=""><img src={Tableau1} width="80"></img>
                                    <p>Tableau</p></span>
                            </div>
                        </motion.div>
                    </div>
                </div>


                {/* <div class="card">
                    <div class="card-title"><Fade duration={2500}>Habilidades</Fade></div>
                    <div class="wrapper">
                        <Fade duration={2500}>
                        <div class="container-list">
                            <span class="tooltip"><img src={Python} width="80"></img><span
                                class="tooltiptext">Python</span></span>
                            <span class="tooltip"><img src={NodeJS} width="80"></img><span
                                class="tooltiptext">Node.js</span></span>
                            <span class="tooltip"><img src={Django} width="70"></img><span
                                class="tooltiptext">Django</span></span>
                            <span class="tooltip"><img src={FastAPI} width="100"></img><span
                                class="tooltiptext">FastAPI</span></span>
                            <span class="tooltip"><img src={Express} width="80"></img><span
                                class="tooltiptext">Express.js</span></span>
                            <span class="tooltip"><img src={SQLite} width="80"></img><span
                                class="tooltiptext">SQLite</span></span>
                            <span class="tooltip"><img src={MySQL} width="80"></img><span
                                class="tooltiptext">MySQL</span></span>
                            <span class="tooltip"><img src={Postgres} width="80"></img><span
                                class="tooltiptext">PosgreSQL</span></span>
                            <span class="tooltip"><img src={Mongo} width="70"></img><span
                                class="tooltiptext">MongoDB</span></span>
                            <span class="tooltip"><img src={Firebase} width="80"></img><span
                                class="tooltiptext">Firebase</span></span>
                            <span class="tooltip"><img src={Javascript} width="80"></img><span
                                class="tooltiptext">JavaScript</span></span>
                            <span class="tooltip"><img src={CSS} width="80"></img><span
                                class="tooltiptext">CSS</span></span>
                            <span class="tooltip"><img src={Sass} width="80"></img><span
                                class="tooltiptext">Sass</span></span>
                            <span class="tooltip"><img src={Bootstrap} width="80"></img><span
                                class="tooltiptext">Bootstrap</span></span>
                            <span class="tooltip"><img src={Bulma} width="80"></img><span
                                class="tooltiptext">Bulma</span></span>
                            <span class="tooltip"><img src={React} width="80"></img><span
                                class="tooltiptext">React</span></span>
                            <span class="tooltip"><img src={Vite} width="80"></img><span
                                class="tooltiptext">Vite</span></span>
                            <span class="tooltip"><img src={Postman} width="90"></img><span
                                class="tooltiptext">Postman</span></span>
                            <span class="tooltip"><img src={Git} width="90"></img><span
                                class="tooltiptext">Git</span></span>
                            <span class="tooltip"><img src={Tableau1} width="80"></img><span
                                class="tooltiptext">Tableau</span></span>
                        </div>
                        </Fade>
                    </div>
                </div> */}

                {/* <div class="card">
                    <div class="card-title"><Fade duration={2500}>Front-end</Fade></div>
                    <div class="wrapper">
                    <Fade duration={2500}>
                        <div class="container-list">
                            <span class="tooltip"><img src={Javascript} width="80"></img><span
                                class="tooltiptext">JavaScript</span></span>
                            <span class="tooltip"><img src={CSS} width="80"></img><span
                                class="tooltiptext">CSS</span></span>
                            <span class="tooltip"><img src={Sass} width="80"></img><span
                                class="tooltiptext">Sass</span></span>
                            <span class="tooltip"><img src={Bootstrap} width="80"></img><span
                                class="tooltiptext">Bootstrap</span></span>
                            <span class="tooltip"><img src={Bulma} width="80"></img><span
                                class="tooltiptext">Bulma</span></span>
                            <span class="tooltip"><img src={React} width="80"></img><span
                                class="tooltiptext">React</span></span>
                            <span class="tooltip"><img src={Vite} width="80"></img><span
                                class="tooltiptext">Vite</span></span>
                        </div>
                        </Fade>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title"><Fade duration={2500}>Herramientas</Fade></div>
                    <div class="wrapper">
                    <Fade duration={2500}>
                        <div class="container-list">
                            <span class="tooltip"><img src={Postman} width="90"></img><span
                                class="tooltiptext">Postman</span></span>
                            <span class="tooltip"><img src={Git} width="90"></img><span
                                class="tooltiptext">Git</span></span>
                            <span class="tooltip"><img src={Tableau1} width="80"></img><span
                                class="tooltiptext">Tableau</span></span>
                        </div>
                    </Fade>
                    </div>
                </div> */}
            </div>
        </>
    )
}