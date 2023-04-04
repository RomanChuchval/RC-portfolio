import React from 'react';
import s from './Greeting.module.css'
import Typed from "typed.js";

export const Greeting = () => {

    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['React Developer.' , 'TypeScript Developer.' , 'Front-end Developer.'],
            typeSpeed: 90,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <span className={s.greeting}>Hello, I'm</span>
            <h1 className={s.main_FirstName}>Roman
                <span className={s.main_lastName}>Chuchval</span>
            </h1>
            <span className={s.main_based}>
                Minsk based <span className={s.main_frontend} ref={el}/>
            </span>
        </div>
    );
};

