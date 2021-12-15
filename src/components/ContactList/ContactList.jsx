import PropTypes from "prop-types";

const ContactList = ({ contacts, onClick }) => {
  const handleDeleteBtn = (event) => {
    const { name } = event.target;
    onClick(name);
  };
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p> {name}</p>
          <p> {number}</p>

          <button type="button" name={id} onClick={handleDeleteBtn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
