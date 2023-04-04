import React from 'react';
import s from './MainButtons.module.css';

export const MainButtons = () => {
    return (
        <div className={s.main_buttons_wrapper}>
            <button className={s.main_btn}>Hire me</button>
            <button className={s.ghost_btn}>About me</button>
        </div>
    );
};

