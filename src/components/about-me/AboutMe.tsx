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
        `Hi there! My name is Roman and I'm a front-end developer from Minsk. I'm 29 years old and have been working in web development for over 1 year. My passion for technology and design led me to web development, where I can create interactive, aesthetically pleasing, and multifunctional web applications.`,
        `I have experience working with various programming languages, including HTML, CSS, TypeScript, and React framework. I also have experience working with various tools and libraries, such as Redux, Axios, Git and other.`,
        `I'm a true enthusiast of web development and I'm ready to turn your ideas into reality! Get in touch with me to discuss how I can help you create a beautiful and functional web application.`
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
        <div id={'about-me'} className={s.about_block}>
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

