import { Home, Skill, About, Adress, Project, Resources } from '../images';
import { useTranslation } from 'react-i18next';
import { useState } from "react";

const locales = {
    en: { title: 'English' },
    es: { title: 'Español' },
    fr: { title: 'Français' }
};

export const Nav = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(0);

    return (
        <>
            <nav id="navbar">
                <span class="tooltip"><a href="#Index" alt="Inicio de página"><img src={Home} width="35" alt='Home icon'></img></a><span
                    class="tooltiptext">{t('nav.index')}</span></span>
                <span class="tooltip"><a href="#About-me" alt="Sobre mi"><img src={About} width="35" alt='Profile icon'></img></a><span
                    class="tooltiptext">{t('nav.aboutMe')}</span></span>
                <span class="tooltip"><a href="#Skills" alt="Habilidades"><img src={Skill} width="35" alt='Skills icon'></img></a><span
                    class="tooltiptext">{t('nav.skills')}</span></span>
                <span class="tooltip"><a href="#Projects" alt="Proyectos"><img src={Project} width="35" alt='Projects icon'></img></a><span
                    class="tooltiptext">{t('nav.projects')}</span></span>
                <span class="tooltip"><a href="#Contact" alt="Contáctame"><img src={Adress} width="30"></img></a><span
                    class="tooltiptext">{t('nav.contact')}</span></span>
                {/*<span className="tooltip"><img src={Resources} width="30"></img>
                <span className="tooltiptext">{t('nav.resources')}</span></span>*/}
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