import React from 'react';
import s from './Project.module.css'

export const Project = () => {
    return (
        <div className={s.project_container}>
            <div className={s.project_image}>
                <a className={s.project_link} href="#">Watch project</a>
            </div>
            <div className={s.project_description_block}>
                <h3 className={s.project_name}>Project nameProject nameProject nameProject nameProject nameProject name</h3>
                <span className={s.project_description}>project descriptionproject descriptionproject descriptionproject descriptionproject description</span>
            </div>
        </div>
    );
};

