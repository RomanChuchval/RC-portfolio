import React from 'react';
import s from './Footer.module.scss'
import sc from '../../common/styles/container.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className={s.footer_block}>
            <div className={`${s.footer_container} ${sc.container}`}>
                <h3 className={s.footer_title}>Roman Chuchval</h3>
                <div className={s.footer_social_media_block}>
                    <div className={s.footer_social_icon}>
                        <a href="/#">
                            <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                    <div className={s.footer_social_icon}>
                        <a href="/#">
                            <FontAwesomeIcon icon={faTelegram} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                    <div className={s.footer_social_icon}>
                        <a href="/#">
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                    <div className={s.footer_social_icon}>
                        <a href="/#">
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                </div>
                <span className={s.footer_copyright}>
                    Copyright © 2023 Incubator. All Rights Reserved.
                </span>
            </div>
        </div>
    );
};

