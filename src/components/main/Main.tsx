import React from 'react';
import s from './Main.module.css'
import sc from '../../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={s.main_block}>
            <div className={sc.container}>
                <div className={s.main_greeting_container}>
                    <h1>Hi, I'm Roman Chuchval</h1>
                    <h2>Front-end developer</h2>
                    <p>based in Minsk, BY</p>
                </div>
                <div className={s.main_photo}>
                    my photo
                </div>
            </div>
        </div>
    );
};

