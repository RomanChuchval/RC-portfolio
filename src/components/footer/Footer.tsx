import React from 'react';
import s from './Footer.module.scss'
import sc from '../../common/styles/container.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className={s.footer_block}>
            <div className={`${s.footer_container} ${sc.container}`}>
                <div className={s.footer_social_media_block}>
                    <div className={s.footer_social_icon}>
                        <a href="https://github.com/RomanChuchval" target={'_blank'} rel={'noreferrer'}>
                            <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                    <div className={s.footer_social_icon}>
                        <a href={"https://t.me/hundredth_11"} target={'_blank'} rel={'noreferrer'}>
                            <FontAwesomeIcon icon={faTelegram} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                    <div className={s.footer_social_icon}>
                        <a href="https://www.instagram.com/roman_hc/" target={'_blank'} rel={'noreferrer'}>
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                    <div className={s.footer_social_icon}>
                        <a href="https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D1%87%D1%83%D1%87%D0%B2%D0%B0%D0%BB-793994256/"
                           target={'_blank'} rel={'noreferrer'}>
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                </div>
                <span className={s.footer_copyright}>
                    Copyright © 2023 R/Chuchval. All Rights Reserved.
                </span>
            </div>
        </div>
    );
};

