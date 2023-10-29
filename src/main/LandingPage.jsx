import { Header } from '../pages/Header';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
    return(
        <>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}