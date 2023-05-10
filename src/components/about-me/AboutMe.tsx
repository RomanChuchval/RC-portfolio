import React from 'react';
import s from './AboutMe.module.scss'
import sc from '../../common/styles/container.module.scss'
import aboutImage from '../../assets/images/developer.jpeg'
import {Slide} from "react-awesome-reveal";

export const AboutMe = () => {

    const firstListData = [
        {title: 'Name', info: 'Roman Chuchval'},
        {title: 'Email', info: 'rchuchvaldev@gmail.com'},
        {title: 'Phone', info: '+375 (25) 918-58-47'},
    ]
    const secondListData = [
        {title: 'Age', info: '29'},
        {title: 'Remote Work', info: 'Available'},
    ]
    const aboutMeInfo = [
        ` Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,

        `Tabore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat.`
    ]

    const mappedFirstList = firstListData.map(el => {
        return (
            <li key={el.title} className={s.about_list_item}>
                <h4 className={s.about_list_header}>{el.title}</h4>
                <p className={s.about_list_description}>{el.info}</p>
            </li>
        )
    })
    const mappedSecondList = secondListData.map(el => {
        return (
            <li key={el.title} className={s.about_list_item}>
                <h4 className={s.about_list_header}>{el.title}</h4>
                <p className={s.about_list_description}>{el.info}</p>
            </li>
        )
    })
    const mappedInfo = aboutMeInfo.map((el) => {
        return (
            <p className={s.about_info}>{el}</p>
        )
    })


    return (
        <div className={s.about_block}>
            <div className={`${sc.container} ${s.about_container}`}>
                <Slide direction={"left"} triggerOnce={true}>
                    <div className={s.image_wrapper}>
                        <img className={s.about_image} src={aboutImage} alt="my_photo"/>
                    </div>
                </Slide>
                <div className={s.about_info_wrapper}>
                    <Slide direction={"right"} triggerOnce={true}>
                        <span className={s.about_title}>About me</span>
                        <h2 className={s.about_header}>Front-end Developer from Minsk</h2>
                        {mappedInfo}
                        <div className={s.contacts_info_wrapper}>
                            <ul className={s.about_list}>
                                {mappedFirstList}
                            </ul>
                            <ul className={s.about_list}>
                                {mappedSecondList}
                            </ul>
                        </div>
                        <button className={s.main_btn}>Download CV</button>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

