import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactMe from '../components/ContactMe';

function ContactList() {
  const [contactMe, setContactMe] = useState([]);

  // Function to add a contact list item
  const addContactMeItem = (item) => {
    console.log(
      'Add contact me item',
      item
    );
    // Check to see if the item contactName is empty
    if (!item.contactName) {
      return;
    }


    // Add the new contact me list item to the existing array of objects
    const newContactMe = [item, ...contactMe];
    console.log(newContactMe);

    // Call setContactMe to update state with our new set of contact me list items
    setContactMe(newContactMe);
  };

  // Function that marked the contact list item as complete
  const completeContactMeItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedContactMe = contactMe.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedContactMe);
    setContactMe(updatedContactMe);
  };

  // Function to remove contact list item and update state
  const removeContactMeItem = (id) => {
    const updatedContactMe = [...contactMe].filter((item) => item.id !== id);

    setContactMe(updatedContactMe);
  };

  // Function to edit the contact me list item
  const editContactMeItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.message) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setContactMe((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <ContactForm onSubmit={addContactMeItem} />
      <ContactMe
        contactMe={contactMe}
        completeContactMeItem={completeContactMeItem}
        removeContactMeItem={removeContactMeItem}
        editContactMeItem={editContactMeItem}
      ></ContactMe>
    </div>
  );
}

export default ContactList;
