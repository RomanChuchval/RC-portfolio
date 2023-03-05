import React from 'react';
import s from './Footer.module.css'
import sc from '../../common/styles/container.module.css'

export const Footer = () => {
    return (
        <div className={s.footer_block}>
            <div className={`${s.footer_container} ${sc.container}`}>
                <h3 className={s.footer_title}>Roman Chuchval</h3>
                <div className={s.footer_social_media_block}>
                    <div className={s.footer_social_icon}>
                        inst
                    </div>
                    <div className={s.footer_social_icon}>
                        github
                    </div>
                    <div className={s.footer_social_icon}>
                        linkedin
                    </div>
                    <div className={s.footer_social_icon}>
                        twitter
                    </div>
                </div>
                <span className={s.footer_copyright}>
                    Copyright © 2023 Incubator. All Rights Reserved.
                </span>
            </div>
        </div>
    );
};

