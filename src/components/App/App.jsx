import { useState, useEffect } from "react";
// import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm/ContactForm.jsx";
import Filter from "../SearchFilter/SearchFilter.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import * as storage from "../../services/localStorage";

const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contacts = storage.get("contacts");
    if (contacts && contacts.length > 0) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  const addNewContact = (name, number) => {
    const contactName = { name, number, id: nanoid() };
    const normalizedName = name.toLowerCase();
    const duplicateName = contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (duplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (name === "") {
      alert(`Please type your info in the field. It is empty.`);
    } else {
      setContacts([...contacts, contactName]);
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const updateFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={updateFilter} />
        <ContactList contacts={filterContacts()} onClick={deleteContact} />
      </div>
    </>
  );
};

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

// componentDidMount() {
//   const savedContacts = storage.get("contacts");
//   if (savedContacts) {
//     this.setState({ contacts: savedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   const { contacts } = this.state;
//   if (prevState.contacts !== contacts) {
//     storage.save("contacts", contacts);
//   }
// }

// addNewContact = (name, number) => {
//   const contactName = { name, number, id: nanoid() };
//   const normalizedName = name.toLowerCase();
//   const duplicateName = this.state.contacts.find(
//     (contact) => contact.name.toLowerCase() === normalizedName
//   );

//   if (duplicateName) {
//     alert(`${name} is already in contacts.`);
//     return;
//   }
//   if (name === "") {
//     alert(`Please type your info in the field. It is empty.`);
//   } else {
//     this.setState(({ contacts }) => ({
//       contacts: [...contacts, contactName],
//     }));
//   }
// };

// deleteContact = (id) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter((contact) => contact.id !== id),
//   }));
// };

// filterContacts = () => {
//   const { filter, contacts } = this.state;

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// updateFilter = (event) => {
//   const { value } = event.target;
//   this.setState({ filter: value });
// };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.filterContacts();
//     return (
//       <>
//         <div>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={this.addNewContact} />
//           <h2>Contacts</h2>
//           <Filter filter={filter} onChange={this.updateFilter} />
//           <ContactList
//             contacts={filteredContacts}
//             onClick={this.deleteContact}
//           />
//         </div>
//       </>
//     );
//   }
// }

export default App;
