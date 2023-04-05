import React from 'react';
import s from './ContactForm.module.css';

export const ContactForm = () => {

    return (
        <div>
            <form className={s.contacts_form} action="">
                <span className={s.contact_title}>Write me a message</span>
                <div className={s.contacts_input_block}>
                    <input className={s.contacts_input} placeholder={'Name *'} type="text"/>
                    <input className={s.contacts_input} placeholder={'Email *'} type="text"/>
                </div>
                <textarea className={s.contacts_textarea} placeholder={'Your message here *'} name=""></textarea>
                <button type={'submit'} className={s.main_btn} >
                    Send Message
                </button>
            </form>

        </div>
    );
};

