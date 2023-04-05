import React, {CSSProperties} from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
    backgroundImage: CSSProperties | undefined;
}

export const Project: React.FC<ProjectPropsType> = (
    {title, description, backgroundImage}
) => {
    return (
        <div className={s.project_container}>
            <div className={s.project_image} style={backgroundImage}>
                <button className={s.main_btn}>
                    <a href="/#">Watch</a>
                </button>
            </div>
            <div className={s.project_description_block}>
                <h3 className={s.project_name}>{title}</h3>
                <span className={s.project_description}>{description}</span>
            </div>
        </div>
    );
};

