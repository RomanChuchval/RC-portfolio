import React from 'react';
import s from './Contacts.module.scss'
import sc from '../../common/styles/container.module.scss'
import {BlockTitle} from "../../common/components/BlockTitle";
import {ContactForm} from "./ContactForm";
import {ContactInfo} from "./ContactInfo";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import { Slide } from 'react-awesome-reveal';

export const Contacts = () => {

    const infoItemsArray = [
        {title: 'Address', infoText: 'Minsk, Belarus', icon: faLocationDot },
        {title: 'Phone', infoText: '+375 (25) 918-58-47', icon: faPhone },
        {title: 'Email', infoText: 'rchuchvaldev@gmail.com', icon: faAt },
    ]
    const infoItems = infoItemsArray.map(i => {
        return(
            <ContactInfo key={i.title} title={i.title} infoText={i.infoText} icon={i.icon} />
        )
    })
    return (
        <div id={'contacts'} className={s.contacts_block}>
            <div className={`${s.contacts_container} ${sc.container}`}>
                <BlockTitle title={'Get In Touch'}/>
                <div className={s.contacts_form_wrapper}>
                    <Slide direction={"left"} triggerOnce={true}>
                        <div className={s.contacts_info_items}>
                            {infoItems}
                        </div>
                    </Slide>
                    <Slide direction={"right"} triggerOnce={true}>
                    <ContactForm />
                    </Slide>
                </div>
            </div>
        </div>
    );
};

