// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredContacts } from '../../redux/Phonebook/phonebook-selectors';
import actions from '../../redux/Phonebook/phonebook-actions'; //../../redux/Phonebook/phonebook-actions'
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.text}>
              {name}:<span className={s.number}>{number}</span>
            </p>
            <button
              type="button"
              className={s.button}
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};
  

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func,
// };

export default ContactList;
