// import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './PhoneBookForm.css'


const PhoneBookForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    let NameId = nanoid();
    let NumberId = nanoid();

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return <form onSubmit={handleSubmit} className='PhoneBookForm'>
            <label htmlFor={NameId} className='PhoneBookForm__name'> Name
                <input className='PhoneBookForm__input'
                    id={NameId}
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    name='name'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label>
            <label htmlFor={NumberId} className='PhoneBookForm__name'> Number
                <input className='PhoneBookForm__input'
                    id={NumberId}
                    value={number}
                    onChange={handleInputChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label>
            <button type='submit' className='PhoneBookForm__btn'>Add contact</button>
        </form>
}

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhoneBookForm;