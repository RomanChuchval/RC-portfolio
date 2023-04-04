import React from 'react';
import s from './Main.module.css'
import sc from '../../common/styles/container.module.css'
import myPhoto from '../../assets/images/2023-03-20 16.14.05.jpg'
import Typed from 'typed.js';

export const Main = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front-end Developer.'],
            typeSpeed: 130,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className={s.main_block}>
            <div className={sc.container}>
                <div className={s.main_container}>
                    <div className={s.main_photo_wrapper}>
                        <img className={s.main_photo} src={myPhoto} alt="my_photo"/>
                    </div>
                    <div>
                        <span className={s.greeting}>Hello, I'm</span>
                        <h1 className={s.main_FirstName}>Roman
                            <span className={s.main_lastName}>Chuchval</span>
                        </h1>
                        <span className={s.main_based}>
                            Minsk based <span className={s.main_frontend} ref={el}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

