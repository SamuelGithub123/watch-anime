import React, {  } from 'react';
import '../styles/contact-us.css';
import ContactInfoItem from '../components/contacts/ContactInfoItem';
import ContactForm from '../components/contacts/ContactForm';
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'


const ContactUs = () => {
    return (
        <div className='container'>
            <h1 className='title-contact'>Contact</h1>   
            <div className='contactSection'>
                <div className='left'>
                <ContactInfoItem icon={<BsTelephone />} text="+49 333333" />
            <ContactInfoItem icon={<AiOutlineMail />} text="samsam@gmail.com" />
            <ContactInfoItem icon={<HiLocationMarker />} text="MUC, Germany" />
                </div>
                <div className="right">
            <ContactForm />
          </div>
            </div> 
        </div>
        
    )
}

export default ContactUs;