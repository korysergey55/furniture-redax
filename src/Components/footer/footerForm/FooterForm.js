import React, { useState } from 'react';
import styles from './styles.module.scss';

import { useDispatch } from 'react-redux';
import { setCallbackForm } from '../../../redax/slice/partfolioSlice';
import { setCallbackFormThunk } from '../../../redax/thunks/thunks';

import { toast } from 'react-toastify';

const FooterForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ phoneNumber: '' });

  const handleChange = evt => {
    setState({ phoneNumber: evt.target.value });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    dispatch(setCallbackForm(state));
    const response = await dispatch(setCallbackFormThunk(state));
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
    setState({ phoneNumber: '' });
  };

  return (
    <form className={styles.footerForm} id="footer-form" onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="phone">
        Call back
      </label>
      <input
        className={styles.input}
        name="phone"
        value={state.phoneNumber}
        type="tel"
        id="phone"
        placeholder="Enter phone number please"
        required
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
      />
      <button className={styles.button} type="submit" name="form-button" htmlFor="footer-form">
        SEND
      </button>
    </form>
  );
};

export default FooterForm;
