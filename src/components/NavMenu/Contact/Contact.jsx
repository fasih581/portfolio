import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Input from '@mui/joy/Input';
import Autocomplete from '@mui/joy/Autocomplete';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';

import NavBar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

import Css from './Contact.module.css';

function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    userName: '',
    userEmail: '',
    userOption: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.userName.trim()) newErrors.userName = 'Full Name is required.';
    if (!formValues.userEmail.trim()) {
      newErrors.userEmail = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.userEmail)) {
      newErrors.userEmail = 'Please enter a valid email address.';
    }
    if (!formValues.userOption) newErrors.userOption = 'Please select a service.';
    if (!formValues.message.trim()) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    emailjs
      .sendForm('service_klzkx6a', 'template_fu8ig08', form.current, 'pvG8mS09MEiq8JmSe')
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setFormValues({
            userName: '',
            userEmail: '',
            userOption: '',
            message: '',
          });
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        },
        () => {
          setErrors({ general: 'An error occurred while sending the email. Please try again.' });
          setTimeout(() => {
            setErrors({});
          }, 5000);
        }
      );
  };

  return (
    <div>
      <div className={Css.Container}>
        <NavBar />
        <div className={Css.contactTittle}>
          <h2>Get In Touch</h2>
          <p>Lets work together</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className={Css.formContaier}>
          <div className={Css.InputBox}>
            <h5>Full Name</h5>
            <Input
              placeholder="Full name"
              type="text"
              name="userName"
              value={formValues.userName}
              onChange={handleInputChange}
              id="userName"
              error={!!errors.userName}
            />
            {errors.userName && <p className={Css.errorText}>{errors.userName}</p>}
          </div>
          <div className={Css.InputBox}>
            <h5>Email</h5>
            <Input
              placeholder="example@email.com"
              type="email"
              name="userEmail"
              value={formValues.userEmail}
              onChange={handleInputChange}
              id="userEmail"
              error={!!errors.userEmail}
            />
            {errors.userEmail && <p className={Css.errorText}>{errors.userEmail}</p>}
          </div>
          <div className={Css.InputBox}>
            <h5>Service</h5>
            <Autocomplete
              placeholder="Select your service"
              options={['UX & UI Design', 'Web Development']}
              value={formValues.userOption}
              onChange={(event, newValue) =>
                setFormValues((prevValues) => ({ ...prevValues, userOption: newValue }))
              }
              name="user_option"
              id="userOption"
              error={!!errors.userOption}
            />
            {errors.userOption && <p className={Css.errorText}>{errors.userOption}</p>}
          </div>
          <div className={Css.InputBox}>
            <h5>Message</h5>
            <Textarea
              placeholder="Message"
              minRows={4}
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              id="message"
              error={!!errors.message}
            />
            {errors.message && <p className={Css.errorText}>{errors.message}</p>}
          </div>
          {errors.general && <p className={Css.errorText}>{errors.general}</p>}
          {successMessage && <p className={Css.successText}>{successMessage}</p>}
          <Button type="submit">Get In Touch</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

