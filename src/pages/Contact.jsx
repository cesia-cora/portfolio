import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
    const { t, i18n } = useTranslation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState("");

    function submit(e) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/JbQHV-Vn5bi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200) {
                    alert("Tu correo ha sido enviado.");
                }
                else if (res.code === 422) {
                    setError(res.message);
                }
                else {
                    setError(res.message);
                }
            })
            .catch((error) => setError(error.message ? error.message : error));
    }

    return (
        <>
            <div className='title' id='Contact'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
                    {t('title.contact')}
                </motion.div >
            </div>
            <div id="contactContainer">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
                    <form onSubmit={(e) => onSubmit(e)} method="post" enctype="text/plain" className="form-control">
                        
                        <label form='name'>{t('contact.name')}</label>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder={t('contact.yourName')}></input>
                        
                        <label for="email">{t('contact.email')}</label>
                        <input type="email" name="email" placeholder={t('contact.yourEmail')} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        
                        <label for="message">{t('contact.message')}</label>
                        <textarea placeholder={t('contact.yourMessage')} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <input type="submit" className="btn-link" value={t('contact.submit')}></input>
                    </form>
                </motion.div>
            </div>
        </>
    )
}