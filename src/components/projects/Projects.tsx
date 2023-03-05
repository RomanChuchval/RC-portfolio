import React from 'react';
import s from './Projects.module.css'
import sc from '../../common/styles/container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projects_block}>
            <div className={`${s.projects_container} ${sc.container}`}>
                <div className={s.projects_title_container}>
                    <h3 className={s.projects_title}>My Projects</h3>
                </div>
                <div className={s.projects}>
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
            
        </div>
    );
};

