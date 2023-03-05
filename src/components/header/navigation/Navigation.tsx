import React from 'react';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.navigation_block}>
            <a href="src/components/header/navigation#">Home</a>
            <a href="src/components/header/navigation#">Skills</a>
            <a href="src/components/header/navigation#">Projects</a>
            <a href="src/components/header/navigation#">Contacts</a>
        </div>
    );
};

