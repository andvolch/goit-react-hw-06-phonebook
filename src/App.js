// import { connect } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
// import actions from '../../redux/Phonebook/phonebook-actions';


function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(
  //     window.localStorage.getItem('contacts') ?? initialContacts,
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // const formSubmitHandler = data => {
  //   const comparableElement = contacts.some(
  //     element => element.name.toLowerCase() === data.name.toLowerCase(),
  //   );
  //   if (comparableElement) {
  //     return alert('contact is already in the directory');
  //   }
  // };

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const getVisibleContact = () => {
  //   const contactFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(contactFilter),
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 >Contacts</h2>
      <ContactList />
    </>
  );
}
// const mapStateToProps = state => {
//   return {
//     contacts: state,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   addNote: text => dispatch(actions.addContact(text)),
// });
export default App;