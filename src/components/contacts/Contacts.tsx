import React from 'react';
import s from './Contacts.module.css'
import sc from '../../common/styles/container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contacts_block}>
            <div className={`${s.contacts_container} ${sc.container}`}>
                <div className={s.contacts_title_container}>
                    <h3>Contact Me</h3>
                </div>
                    <form className={s.contacts_form} action="">
                        <input className={s.contacts_input} placeholder={'First name'} type="text"/>
                        <input className={s.contacts_input} placeholder={'Last name'} type="text"/>
                        <textarea className={s.contacts_textarea} placeholder={'Can i help you?'} name=""></textarea>
                    </form>
                <button className={s.contacts_send_btn} >
                    Send
                </button>
            </div>
        </div>
    );
};

