import React from 'react';
import s from './Header.module.scss'
import sc from '../../common/styles/container.module.scss'
import {NavLinks} from "./navigation/Navlinks";
import {NavSocial} from "./navigation/NavSocial";
import useScrollPosition from "../../hooks/useScrollPosition";

export const Header = () => {
    const scrollPosition = useScrollPosition()

    const headerBlockClass = `${s.header_block} ${scrollPosition >= 850 ? s.fixed_top : ''}`

    return (
        <div className={headerBlockClass}>
            <div className={sc.container}>
                <div className={s.header_container}>
                    <NavLinks/>
                    <NavSocial />
                </div>
            </div>
        </div>
    );
};

