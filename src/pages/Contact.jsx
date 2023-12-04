import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Contact = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            {/*<div className='title' id='Contact'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
                    {t('title.contact')}
                </motion.div >
            </div>
            <div id="contactContainer">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
                    <form action="mailto:cesiacora@gmail.com" method="post" encType="text/plain" className="form-control">
                        <label for="name">{t('contact.email')}</label>
                        <input type="email" name="email" placeholder={t('contact.yourEmail')}></input>
                        <label for="subject">{t('contact.subject')}</label>
                        <input type="text" name="subject" placeholder={t('contact.yourSubject')}></input>
                        <label for="message">{t('contact.message')}</label>
                        <textarea placeholder={t('contact.yourMessage')}></textarea>
                        <input type="submit" className="btn-link" value={t('contact.submit')}></input>
                    </form>
                </motion.div>
            </div>*/}
        </>
    )
}