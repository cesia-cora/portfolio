import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export const About = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="title" id="About-me">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
                    {t('title.about')}
                </motion.div>
            </div>
            <div>
                <div id="sobre-mi">
                    <div id="about">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
                            <div>
                                <p>{t('aboutMe.firstP')}</p>
                                <p>{t('aboutMe.secP')}</p>
                                <p>{t('aboutMe.thirdP')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}