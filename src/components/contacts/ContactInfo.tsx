import React from 'react';
import s from './ContactInfo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

type ContactInfoPropsType = {
    title: string
    infoText: string
    icon: IconDefinition
}

export const ContactInfo: React.FC<ContactInfoPropsType> = (
    {title, infoText, icon}
) => {
    return (
        <div className={s.contact_info_wrapper}>
            <div className={s.contact_info_icon}>
                <FontAwesomeIcon icon={icon} style={{color: "#ffffff",}} />
            </div>
            <div className={s.contact_info_text}>
                <span className={s.contact_info_title}>{title}</span>
                <span className={s.contact_info}>{infoText}</span>
            </div>
        </div>
    );
};

