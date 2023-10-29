import { Telegram, Linkedin, Github, Document } from '../images/';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export const Header = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className='all-header'>
                <div id="container-header">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <div class="texto">
                            <p>Cesia Cora</p>
                            <p>{t('header.developer')}</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <div class="redes">
                            <div className='red'>
                                <a href='' download><img src={Document} width='70' alt='Resume icon' loading='lazy'></img></a>
                                <p>{t('download.curriculum')}</p>
                            </div>
                            <div class="red">
                                <a href="https://linkedin.com/in/cesia-cora" target="_blank"><img src={Linkedin} width="70"
                                    alt="LinkedIn icon" loading="lazy"></img></a>
                                <p>LinkedIn</p>
                            </div>
                            <div class="red">
                                <a href="https://github.com/cesia-cora" target="_blank"><img src={Github} width="70"
                                    alt="Github icon" loading="lazy"></img></a>
                                <p>Github</p>
                            </div>
                            <div class="red">
                                <a href="https://telegram.me/cesia_c"><img src={Telegram} width="70" loading="lazy" alt='Telegram icon'></img></a>
                                <p>Telegram</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}