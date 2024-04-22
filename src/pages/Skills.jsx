import {
    Python, Django, NodeJS, React, Javascript,
    Express, FastAPI,
    Postgres, SQLite, MySQL, Mongo, Firebase, Tableau1, Git,
} from '../images';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Skills = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div class="title" id='Skills'>
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
                                <span class=""><img src={Mongo}></img>
                                    <p>MongoDB</p></span>
                                <span class=""><img src={Firebase}></img>
                                    <p>Firebase</p></span>
                                <span class=""><img src={Git} width="90"></img>
                                    <p>Git</p></span>
                                <span class=""><img src={Tableau1} width="80"></img>
                                    <p>Tableau</p></span>
                            </div>
                        </motion.div>
                    </div>
                </div>

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