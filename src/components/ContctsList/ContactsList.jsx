import PropTypes from 'prop-types';
import { Contacts } from 'components/Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operation';

import s from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.contactsItem}>
          {<Contacts contact={contact} />}
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
