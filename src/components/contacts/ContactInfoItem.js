import React, { Component } from 'react';
import {BsTelephone} from 'react-icons/bs'

const ContactInfoItem = ({icon, text}) => {
    return (
    <section className='section-contact'>
        <div className="icon-contact">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </section>
    );
    
}

export default ContactInfoItem;