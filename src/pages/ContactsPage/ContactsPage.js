import { ContactsForm } from 'components/ContactsForm/ContactsForm/ContactsForm';
import { FilterContact } from 'components/FilterContact/FilterContact';
import { Title } from 'components/Title/Title';
import { Audio } from 'react-loader-spinner';
import s from 'components/App/App.module.css';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const { getIsLoading, getError } = require('redux/contacts/contacts-selecors');

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div>
          {isLoading && (
            <div className={s.loading}>
              <Audio
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
              />
            </div>
          )}
          {error && <p className={s.loading}>{error}</p>}
          <Title>Phonebook</Title>
          <ContactsForm />
        </div>
        <div>
          <Title>Contacts</Title>
          <div>
            <FilterContact />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactsPage;
