import React from 'react';
import s from "./Navlinks.module.scss";
import {Link} from "react-scroll";

export const NavLinks = () => {
    return (
        <ul className={s.navlinks_list}>
            <li>
                <Link to={'home'} activeClass={s.active} spy={true} smooth={true} duration={450}
                      className={s.navlink_item}>Home</Link>
            </li>
            <li>
                <Link to={'skills'} activeClass={s.active} spy={true} smooth={true} duration={450}
                      className={s.navlink_item}>Skills</Link>
            </li>
            <li>
                <Link to={'about-me'} activeClass={s.active} spy={true} smooth={true} duration={450} className={s.navlink_item}>About
                    Me</Link>
            </li>
            <li>
                <Link to={'projects'} activeClass={s.active} spy={true} smooth={true} duration={450}
                      className={s.navlink_item}>Projects</Link>
            </li>
            <li>
                <Link to={'contacts'} activeClass={s.active} spy={true} smooth={true} duration={450}
                      className={s.navlink_item}>Contacts</Link>
            </li>
        </ul>
    );
};

