import { ContactsList } from 'components/ContctsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/contacts/filterSlice';
import { getContactsFilter } from 'redux/contacts/contacts-selecors';

import s from './FilterContact.module.css';

export const FilterContact = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsFilter);

  const handleFilter = e => {
    dispatch(setContactsFilter(e.target.value.trim()));
  };

  return (
    <>
      <label className={s.inputLabel}>
        Find contacts by name
        <input
          className={s.inputFiter}
          type="text"
          name="filter"
          onChange={e => handleFilter(e)}
        ></input>
      </label>
      <ContactsList contacts={contacts} />
    </>
  );
};
