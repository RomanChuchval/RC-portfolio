import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (
    {
        title, description
    }
) => {
    return (
        <div className={s.skill}>
            <div className={s.skill_icon}>
                icon
            </div>
            <h3 className={s.skill_title}>{title}</h3>
            <span className={s.skill_description}>{description}</span>
        </div>
    );
};

