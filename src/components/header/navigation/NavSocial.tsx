import React from 'react';
import s from './NavSocial.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'


export const NavSocial = () => {
    return (
        <ul className={s.social_list}>
            <li className={s.social_item}>
                <a href="https://github.com/RomanChuchval" target={'_blank'} rel={'noreferrer'}>
                    <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}}/>
                </a>
            </li>
            <li className={s.social_item}>
                <a href={"https://t.me/hundredth_11"} target={'_blank'} rel={'noreferrer'}>
                    <FontAwesomeIcon icon={faTelegram} style={{color: "#ffffff",}}/>
                </a>
            </li>
            <li className={s.social_item}>
                <a href="https://www.instagram.com/roman_hc/" target={'_blank'} rel={'noreferrer'}>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}}/>
                </a>
            </li>
            <li className={s.social_item}>
                <a href="https://www.linkedin.com/in/chuchval/"
                   target={'_blank'} rel={'noreferrer'}>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}}/>
                </a>
            </li>
        </ul>
    );
};

