import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {AboutMe} from "./components/about-me/AboutMe";
import {SoftSkills} from "./components/soft-skills/SoftSkills";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <AboutMe />
            <SoftSkills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
