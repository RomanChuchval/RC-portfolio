import React from 'react';
import s from './Main.module.scss'
import sc from '../../common/styles/container.module.scss'
import myPhoto from '../../assets/images/2023-03-20 16.14.05.jpg'
import {Greeting} from "./Greeting";
import {MainButtons} from "./MainButtons";
import {Particle} from "../../common/components/Particle";
import {Slide} from "react-awesome-reveal";


export const Main = () => {

    return (
        <div id={'home'} className={s.main_block}>
            <Particle />
            <div className={sc.container}>
                <div className={s.main_container}>
                    <div className={s.main_photo_wrapper}>
                        <Slide direction={"left"} triggerOnce={true}>
                        <img className={s.main_photo} src={myPhoto} alt="my_photo"/>
                        </Slide>
                    </div>
                    <div>
                        <Slide direction={"right"} triggerOnce={true}>
                            <Greeting/>
                            <MainButtons/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

