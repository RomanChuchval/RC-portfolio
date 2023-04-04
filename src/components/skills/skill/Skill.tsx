import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    icon: any
}

export const Skill: React.FC<SkillPropsType> = (
    {
        title,
        icon
    }
) => {
    return (
        <div className={s.skill}>
            <div className={s.skill_icon}>
                <img className={s.skill_icon} src={icon} alt="Skill icon"/>
            </div>
            <h3 className={s.skill_title}>{title}</h3>
        </div>
    );
};

