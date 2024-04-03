import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function submit(e) {
        // This will prevent page refresh
        e.preventDefault();

        // replace this with your own unique endpoint URL
        fetch("https://formcarry.com/s/XXXXXXX", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ email: email, subject: subject, message: message })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(res.message);
                }
            })
            .catch((error) => setError(error));
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (submitted) {
        return <p>We've received your message, thank you for contacting us!</p>;
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
                    <form onSubmit={submit} method="post" enctype="text/plain" className="form-control">
                        <label for="name">{t('contact.email')}</label>
                        <input type="email" name="email" placeholder={t('contact.yourEmail')} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label for="subject">{t('contact.subject')}</label>
                        <input type="text" name="subject" placeholder={t('contact.yourSubject')} value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                        <label for="message">{t('contact.message')}</label>
                        <textarea placeholder={t('contact.yourMessage')} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <input type="submit" className="btn-link" value={t('contact.submit')}></input>
                    </form>
                </motion.div>
            </div>
        </>
    )
}