import React from 'react';
import s from "./Navlinks.module.scss";

export const NavLinks = () => {
    return (
            <ul className={s.navlinks_list}>
                <li>
                    <a className={s.navlink_item} href="/#">Home</a>
                </li>
                <li>
                    <a className={s.navlink_item} href="/#">Skills</a>
                </li>
                <li>
                    <a className={s.navlink_item} href="/#">About Me</a>
                </li>
                <li>
                    <a className={s.navlink_item} href="/#">Projects</a>
                </li>
                <li>
                    <a className={s.navlink_item} href="/#">Contacts</a>
                </li>
            </ul>
    );
};

