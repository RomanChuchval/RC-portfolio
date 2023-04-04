import React from 'react';
import s from './Header.module.css'
import sc from '../../common/styles/container.module.css'
import {NavLinks} from "./navigation/Navlinks";
import {NavSocial} from "./navigation/NavSocial";

export const Header = () => {
    return (
        <div className={s.header_block}>
            <div className={sc.container}>
                <div className={s.header_container}>
                    <NavLinks/>
                    <NavSocial />
                </div>
            </div>
        </div>
    );
};

