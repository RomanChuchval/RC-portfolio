import React from 'react';
import s from './Greeting.module.css'
import Typed from "typed.js";

export const Greeting = () => {

    const type = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(type.current, {
            strings: ['Front-end Developer.'],
            typeSpeed: 90,
            loop: true,
            backSpeed: 50,
            startDelay: 800,
            backDelay: 800
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className={s.greeting_wrapper}>
            <span className={s.greeting}>Hello, I'm</span>
            <h1 className={s.main_firstName}>Roman
                <span className={s.main_lastName}>Chuchval</span>
            </h1>
            <span className={s.main_based}>
                Minsk based <span className={s.main_frontend} ref={type}/>
            </span>
        </div>
    );
};

