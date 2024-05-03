import { Home, Skill, About, Adress, Project, Resources, Blog } from '../images';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const locales = {
    en: { title: 'English' },
    es: { title: 'Español' },
    fr: { title: 'Français' }
};

export const Nav = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(0);

    const navigate = useNavigate();

    const handleNavigate = (path, hash) => {
        navigate(path);
        setTimeout(() => {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    return (
        <>
            <nav id="navbar">
                <Link to='/' onClick={() => handleNavigate('/', '#Index')}><span class="tooltip"><img src={Home} width="35" alt='Home icon'></img><span
                    class="tooltiptext">{t('nav.index')}</span></span></Link>
                <Link to='/' onClick={() => handleNavigate('/', '#About-me')}><span class="tooltip"><img src={About} width="35" alt='Profile icon'></img><span
                    class="tooltiptext">{t('nav.aboutMe')}</span></span></Link>
                <Link to='/' onClick={() => handleNavigate('/', '#Skills')}><span class="tooltip"><img src={Skill} width="35" alt='Skills icon'></img><span
                    class="tooltiptext">{t('nav.skills')}</span></span></Link>
                <Link to='/' onClick={() => handleNavigate('/', '#Projects')}><span class="tooltip"><img src={Project} width="35" alt='Projects icon'></img><span
                    class="tooltiptext">{t('nav.projects')}</span></span></Link>
                <Link to='/' onClick={() => handleNavigate('/', '#Contact')}><span class="tooltip"><img src={Adress} width="35"></img><span
                    class="tooltiptext">{t('nav.contact')}</span></span></Link>
                {/*<span className="tooltip"><img src={Resources} width="30"></img>
                <span className="tooltiptext">{t('nav.resources')}</span></span>
                <span className="tooltip"><img src={Blog} width="35"></img>
                <span className="tooltiptext">Blog</span></span>*/}
            </nav>

            <div className="languages">
                {Object.keys(locales).map((locale) => (
                    <li key={locale} style={{ listStyleType: 'None' }}>
                        <button className="ui-btn" onClick={() => i18n.changeLanguage(locale)}>
                            <span>{locales[locale].title}</span>
                        </button></li>
                ))}
            </div>
        </>
    )
}