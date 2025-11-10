import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
    const { t, i18n } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const [error, setError] = useState("");

    function onSubmit(e) {
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
                    setSuccess("Tu correo ha sido enviado.");
                    setName('');
                    setEmail('');
                    setMessage('');
                    setError('');
                }
                else if (res.code === 422) {
                    setError(res.message);
                    setSuccess('');
                }
                else {
                    setError(res.message);
                    setSuccess('');
                }
            })
            .catch((error) => { 
                setError(error.message ? error.message : String(error))
                setSuccess('');
            });
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
                    <form onSubmit={(e) => onSubmit(e)} method='POST' enctype="text/plain" className="form-control">
                        
                        <label htmlFor='name'>{t('contact.name')}</label>
                        <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder={t('contact.yourName')}></input>
                        
                        <label htmlfor="email">{t('contact.email')}</label>
                        <input type="email" name="email" id='email' placeholder={t('contact.yourEmail')} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        
                        <label htmlFor="message">{t('contact.message')}</label>
                        <textarea placeholder={t('contact.yourMessage')} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <input type="submit" name='message' id='message' className="btn-link" value={t('contact.submit')}></input>

                        {error && <div className="form-message error" role="alert">{error}</div>}
                        {success && <div className="form-message success" role="status">{success}</div>}
                    </form>
                </motion.div>
            </div>
        </>
    )
}