import React from 'react';
import s from './MainButtons.module.scss';
import {Link} from "react-scroll";

export const MainButtons = () => {
    return (
        <div className={s.main_buttons_wrapper}>
            <button className={s.main_btn}>Hire me</button>
            <Link to={'about-me'} activeClass={s.active} spy={true} smooth={true} duration={450} className={s.navlink_item}>
                <button className={s.ghost_btn}>About me</button>
            </Link>
        </div>
    );
};

