import { Cadmus, Fastapi1, Marvel, Tableau, Hestia, Sleep } from '../images';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Projects = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div class="title" id='Projects'>
                {t('title.projects')}
            </div>
            <div class="container-proyecto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Cadmus} className='imgProj' style={{ borderRadius: '5px' }} alt='Project Cadmus screenshot'></img>
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
                                <img src={Hestia} className='imgProj' style={{ borderRadius: '5px' }} alt='Project Hestia screenshot'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Express.js, MySQL</h3>
                                <p>{t('project.hestia')}</p>
                                <br></br><a class="btn-link" href="https://github.com/cesia-cora/hestia"
                                    target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Fastapi1} className='imgProj' style={{ borderRadius: '5px' }} alt='FastAPI screenshot'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>FastAPI, MongoDB</h3>
                                <p>{t('project.library')}</p>
                                <br></br><a class="btn-link" href="https://github.com/cesia-cora/fastapi-project"
                                    target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Marvel} className='imgProj' style={{ borderRadius: '5px' }} alt='Project Marvel screenshot'></img>
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
                                <img src={Tableau} className='imgProj' style={{ borderRadius: '5px' }} alt='Project Adidas Sales Tableau dashboard'></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Tableau</h3>
                                <p>{t('project.tableau')}</p>
                                <br></br><a class="btn-link" href="https://public.tableau.com/app/profile/cesia.cora/viz/ProyectoFinalCora/Presentacin" target="_blank">View Dashboard</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Sleep} className='imgProj' style={{ borderRadius: '5px' }}></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Python</h3>
                                <p>{t('project.ML-1')}</p>
                                <br></br><a class="btn-link" href="https://github.com/cesia-cora/sleep_health" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="" className='imgProj' style={{ borderRadius: '5px' }}></img>
                            </div>
                            <div className="flip-card-back">
                                <h3>Python</h3>
                                <p>Análisis de pronóstico y detección de tormentas, inundaciones y huracanes usando datos de clima de open-meteo.</p>
                                <br></br>
                                <a class="btn-link" href="" target="_blank">Deploy</a> 
                                <a class="btn-link" href="" target="_blank">(in progress)</a>
                            </div>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </>
    )
}