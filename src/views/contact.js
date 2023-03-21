import { Parallax  } from "react-scroll-parallax";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5xw4bss', 'template_phrs1ls', form.current, 'K36KvJqX9-2Ncrf73')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
      <section className="page" id="contact">
        <Parallax>
          <h2 className="Contact">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="user_name" required/>
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" name="user_email" required/>
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" cols="30" rows="10" required/>
              <input type="submit" value="Send" />
            </div>
          </form>
        </Parallax>
      </section>
    </>
  )
}

export default Contact;
