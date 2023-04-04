import React from 'react';
import s from './Main.module.css'
import sc from '../../common/styles/container.module.css'
import myPhoto from '../../assets/images/2023-03-20 16.14.05.jpg'
import {Greeting} from "./Greeting";
import {MainButtons} from "./MainButtons";


export const Main = () => {

    return (
        <div className={s.main_block}>
            <div className={sc.container}>
                <div className={s.main_container}>
                    <div className={s.main_photo_wrapper}>
                        <img className={s.main_photo} src={myPhoto} alt="my_photo"/>
                    </div>
                    <div>
                        <Greeting/>
                        <MainButtons/>
                    </div>
                </div>
            </div>
        </div>
    );
};

