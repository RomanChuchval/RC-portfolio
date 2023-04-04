import React from 'react';
import s from './NavSocial.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'


export const NavSocial = () => {
    return (
        <ul className={s.social_list}>
            <li className={s.social_item}>
                <a href="/#">
                    <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                </a>
            </li>
            <li className={s.social_item}>
                <a href="/#">
                    <FontAwesomeIcon icon={faTelegram} style={{color: "#ffffff",}} />
                </a>
            </li>
            <li className={s.social_item}>
                <a href="/#">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                </a>
            </li>
            <li className={s.social_item}>
                <a href="/#">
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
                </a>
            </li>
        </ul>
    );
};

