import { useState } from "react";
// import { Component } from "react";
import PropTypes from "prop-types";
import style from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, number);
    setName("");
    setNumber("");
  };

  return (
    <div className={style.contactform}>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.onSubmit(name, number);
//     this.resetState();
//   };

//   resetState = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <div className={style.contactform}>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <label htmlFor="">
//             Number
//             <input
//               type="tel"
//               name="number"
//               value={number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//       </div>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
