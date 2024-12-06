//import useState from react
import { useState } from 'react';

//import ContactForm
import ContactForm from '../components/ContactForm';

//Create a ContactMe function
function ContactMe(props) {
  //Initialize the state for object edit using the variables: 
  // contactName, email, and message
  const [edit, setEdit] = useState({
    id: null,
    contactName: '',
    email: '',
    message: '',
  });
  //Console out the contactMe information
  console.log(props.contactMe);

  //Submit updated ContactMe
  const submitUpdate = (value) => {
    props.editContactMeItem(edit.id, value);
    setEdit({ id: null, contactName: '', email: '', message:''});
  };

  //Update based on id
  if (edit.id) {
    return <ContactForm edit={edit} onSubmit={submitUpdate} />;
  }

  //Map out the list of Contacts
  return props.contactMe.map((item, i) => (
    // Check if item is completed
    <div
      className={
        item.isComplete
          ? `contactMe-row complete ${item.contactName}`
          : `contactMe-row ${item.contactName}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeContactMeItem(item.id)}>
        <p>Name: {item.contactName} </p>
        <p>Email: {item.email} </p>
        <p>Message: {item.message}</p>
        
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, contactName: item.contactName, email: item.email, message: item.message })}> ✏️</p>
        <p onClick={() => props.removeContactMeItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default ContactMe;
