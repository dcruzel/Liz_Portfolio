import { useState } from 'react';
import ContactForm from '../components/ContactForm';

function ContactMe(props) {
  const [edit, setEdit] = useState({
    id: null,
    contactName: '',
    email: '',
    message: '',
  });

  console.log(props.contactMe);

  const submitUpdate = (value) => {
    props.editContactMeItem(edit.id, edit.contactName, edit.email, edit.message);
    setEdit({ id: null, contactName: '', email: '', message:''});
  };

  if (edit.id) {
    return <ContactForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.contactMe.map((item, i) => (
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
