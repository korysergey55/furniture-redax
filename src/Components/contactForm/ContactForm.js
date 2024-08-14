import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setContactForm } from '../../redax/slice/partfolioSlice';
import { setContactFormThunk } from '../../redax/thunks/thunks';

import scrollController from '../../utiles/scrollController/scrollController';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';

import styles from './styles.module.scss';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...INITIAL_STATE });
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (loader) {
      scrollController.disabledScroll();
    } else {
      scrollController.enabledScroll();
    }
  }, [loader]);

  const handleChange = evt => {
    evt.preventDefault();
    setState(prev => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const submitNewMassage = async () => {
    dispatch(setContactForm(state));
    const response = await dispatch(setContactFormThunk(state));
    if (!response.payload) {
      toast.error(`Something went wrong. Try again later.`, {
        theme: 'colored',
      });
      return;
    }
    toast(
      `Thank you for your interest in our company We will contact you within one working day.`,
      {
        theme: 'light',
      }
    );
    setState({ ...INITIAL_STATE });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    submitNewMassage();
  };

  return (
    <form className={styles.form} name="form" id="contactForm" onSubmit={handleSubmit}>
      {loader && <Loader />}
      <div className={styles.inputs_container}>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor="firstName">
            First Name*
          </label>
          <input
            className={styles.input}
            name="firstName"
            value={state.firstName}
            required
            min={3}
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor="lastName">
            Last Name*
          </label>
          <input
            className={styles.input}
            name="lastName"
            value={state.lastName}
            required
            min={3}
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor="email">
            Email*
          </label>
          <input
            className={styles.input}
            name="email"
            value={state.email}
            type={'email'}
            id="email"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.label_wripper}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.textarea}
          name="message"
          value={state.message}
          id="message"
          onChange={handleChange}
        />
      </div>
      <button className={styles.button} type="submit" htmlFor="contactForm">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
