import React from 'react';
import s from './SoftSkills.module.scss'
import sc from "../../common/styles/container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceSmile} from "@fortawesome/free-regular-svg-icons/faFaceSmile";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faListCheck} from "@fortawesome/free-solid-svg-icons/faListCheck";
import {faHandshake} from "@fortawesome/free-regular-svg-icons/faHandshake";


export const SoftSkills = () => {

    const softSkills = [
        {title: 'Communication', icon: faHandshake },
        {title: 'Team Work', icon: faPeopleGroup },
        {title: 'Planing', icon: faListCheck },
        {title: 'Adaptability', icon: faFaceSmile },
    ]

    const mappedSoftSkills = softSkills.map(el => {
        return(
            <div key={el.title} className={s.soft_skill_wrapper}>
                <h3 className={s.soft_skills_title}>{el.title}</h3>
                <span className={s.soft_skills_icon}>
                            <FontAwesomeIcon icon={el.icon} />
                        </span>
            </div>
        )
    })

    return (
        <div className={s.soft_skills_block}>
                <div className={`${sc.container} ${s.soft_skills_container}`}>
                    {mappedSoftSkills}
                </div>
        </div>
    );
};

