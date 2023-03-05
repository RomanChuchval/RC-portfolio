import React from 'react';
import s from './Skills.module.css'
import sc from '../../common/styles/container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skills_block}>
            <div className={`${s.skills_container} ${sc.container}`}>
                <div className={s.skills_title_container}>
                    <h3 className={s.skills_title}>Skills</h3>
                </div>
                <div className={s.skills}>
                    <Skill title={'React'} description={'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'} />
                    <Skill title={'JS'} description={'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.'} />
                    <Skill title={'CSS'} description={'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'} />
                </div>
            </div>
        </div>
    );
};

