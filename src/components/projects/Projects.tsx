import React from 'react';
import s from './Projects.module.scss'
import sc from '../../common/styles/container.module.scss'
import {Project} from "./project/Project";
import {BlockTitle} from "../../common/components/BlockTitle";
import socialNetwork from '../../assets/images/social.png'
import tasksManager from '../../assets/images/tasks_manager.png'
import todolist from '../../assets/images/todolist.png'

type ProjectsArrayType = {
    title: string
    description: string
    image: {
        backgroundImage: string
    }
}

export const Projects = () => {

    const projectsArray: ProjectsArrayType[] = [
        {
            title: 'Social Network',
            description: 'React project with Redux, Axios, TypeScript, React Hook Form',
            image: {
                backgroundImage: `url(${socialNetwork})`
            }
        },
        {
            title: 'Tasks Manager',
            description: 'React project with Redux, TypeScript, React-Router, AntDesign',
            image: {
                backgroundImage: `url(${tasksManager})`
            }
        },
        {
            title: 'Todo List',
            description: 'React project with Redux, Axios, TypeScript, MUI',
            image: {
                backgroundImage: `url(${todolist})`
            }
        }
    ]
    const projects = projectsArray.map(proj => {
        return (
            <Project key={proj.title} title={proj.title} description={proj.description}
                     backgroundImage={proj.image}/>
        )
    })

    return (
        <div className={s.projects_block}>
            <div className={`${s.projects_container} ${sc.container}`}>
                <BlockTitle title={'projects'}/>
                <div className={s.projects}>
                    {projects}
                </div>
            </div>

        </div>
    );
};

