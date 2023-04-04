import React from 'react';
import s from './Skills.module.css'
import sc from '../../common/styles/container.module.css'
import {Skill} from "./skill/Skill";
import {BlockTitle} from "../../common/components/BlockTitle";
import reactIcon from '../../assets/images/react2.png'
import reduxIcon from '../../assets/images/redux.svg'
import jsIcon from '../../assets/images/js.png'
import tsIcon from '../../assets/images/typescript.png'
import axiosIcon from '../../assets/images/axios.png'
import sassIcon from '../../assets/images/sass.png'
import htmlIcon from '../../assets/images/HTML.png'
import apiIcon from '../../assets/images/api.png'
import unitTestsIcon from '../../assets/images/unit.png'
import storyBookIcon from '../../assets/images/storybook.svg'
import postmanIcon from '../../assets/images/postman.svg'
import muiIcon from '../../assets/images/mui.png'
import gitIcon from '../../assets/images/git.png'
import antIcon from '../../assets/images/antd.png'

export const Skills = () => {


    const skills = [
        {title: 'React', icon: reactIcon},
        {title: 'Redux Toolkit', icon: reduxIcon},
        {title: 'TypeScript', icon: tsIcon},
        {title: 'JavaScript', icon: jsIcon},
        {title: 'REST API', icon: apiIcon},
        {title: 'Axios', icon: axiosIcon},
        {title: 'HTML', icon: htmlIcon},
        {title: 'SASS', icon: sassIcon},
        {title: 'Git', icon: gitIcon},
        {title: 'Unit Tests', icon: unitTestsIcon},
        {title: 'Postman', icon: postmanIcon},
        {title: 'MUI', icon: muiIcon},
        {title: 'AntDesign', icon: antIcon},
        {title: 'StoryBook', icon: storyBookIcon},
    ]
    const skillsList = skills.map(skill => {
        return (
            <Skill key={skill.title} title={skill.title} icon={skill.icon} />
        )
    })


    return (
        <div className={s.skills_block}>
            <div className={`${s.skills_container} ${sc.container}`}>
               <BlockTitle title={'skills'}/>
                <div className={s.skills}>
                    {skillsList}
                </div>
            </div>
        </div>
    );
};

