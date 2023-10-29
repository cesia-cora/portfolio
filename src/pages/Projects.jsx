import { Cadmus, Hermes, Fastapi1, Marvel, Tableau, Hestia } from '../images';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Projects = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div class="title">
                {t('title.projects')}
            </div>
            <div class="container-proyecto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Cadmus} width="400" height="250" style={{ borderRadius: '5px' }} alt='Project Cadmus screenshot'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Django, SQLite</h3>
                                <p>{t('project.cadmus')}
                                </p>
                                <br></br><a class="btn-link" href="https://github.com/cesia-cora/Cadmus" target="_blank"><span>Github</span></a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Hestia} width="400" height="250" style={{ borderRadius: '5px' }} alt='Project Hestia screenshot'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Express.js, MySQL</h3>
                                <p>{t('project.hestia')}</p>
                                <br></br><a class="btn-link" href="https://github.com/cesia-cora/hestia-project"
                                    target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Fastapi1} width="400" height="250"></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>FastAPI, MongoDB</h3>
                                <p>{t('project.library')}</p>
                                <br></br><a class="btn-link" href=""
                                    target="_blank">(in progress)</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Marvel} width="400" height="250" style={{ borderRadius: '5px' }} alt='Project Marvel screenshot'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>React, Firebase</h3>
                                <p>{t('project.marveling')}</p>
                                <br></br><a class="btn-link" href="https://github.com/CristianMelero/TP_Int_React_CAC"
                                    target="_blank">Github</a>
                                <a class="btn-link" href="https://marveling.vercel.app"
                                    target="_blank">Deploy</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Tableau} width="400" height="250" style={{ borderRadius: '5px' }} alt='Project Adidas Sales Tableau dashboard'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Tableau</h3>
                                <p>{t('project.tableau')}</p>
                                <br></br><a class="btn-link" href="https://public.tableau.com/app/profile/cesia.cora/viz/ProyectoFinalCora/Presentacin" target="_blank">View Dashboard</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Hermes} width="300" height="200" style={{ borderRadius: '5px' }} alt='Project Hermes screenshot'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Django, PostgreSQL</h3>
                                <p>{t('project.hermes')}</p>
                                <br></br><a class="btn-link" href="" target="_blank">(en progreso)</a>
                            </div>
                        </div>
                    </div>
                </motion.div> */}

                <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src='' width="400" height="250" style={{ borderRadius: '5px' }}></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Python</h3>
                                <p>Predicciones de salud del sueño utilizando aprendizaje automático.</p>
                                <br></br><a class="btn-link" href="" target="_blank">(in progress)</a>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}