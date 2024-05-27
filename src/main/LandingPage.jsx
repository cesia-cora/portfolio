import { Header } from '../pages/Header';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';

export const LandingPage = () => {
    return(
        <>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}