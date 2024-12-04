import { useState } from 'react';

function ContactForm(props) {
  const [contactFormData, setcontactFormData] = useState({
    contactName: '', 
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!contactFormData.contactName.trim()){
      alert("Contact name cannot be blank");
      return;
    }
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailValidation.test(contactFormData.email)){
      alert("Email is not valid");
      return;
    }
    if(!contactFormData.message.trim()){
      alert("Message cannot be blank");
      return;
    }
    
    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      ...contactFormData,
    });

    setcontactFormData({
      contactName: '', 
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactFormData((prevData)=>({
      ...prevData,
      [name]: value,
    }));
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
          type="text"
          id="contactName"
          placeholder="Please enter your name"
          value={contactFormData.contactName}
          name="contactName"
          className="contact-input"
          onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Please enter your email"
            value={contactFormData.email}
            name="email"
            className="contact-input"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Message</label>
          <input
            type="textarea"
            id="Message"
            placeholder="Message"
            value={contactFormData.message}
            name="message"
            className="contact-input"
            onChange={handleChange}
          ></input>
        </div>
        <button className="contactMe-button">Add Contact Message</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="contactName"
            placeholder={props.edit.contactName}
            value={contactFormData.contactName}
            name="contactName"
            className="contact-input"
            onChange={handleChange}
          />
        </div>
        <div>
            <input
            type="text"
            id="email"
            placeholder={props.edit.email}
            value={contactFormData.email}
            name="email"
            className="contact-input"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="textarea"
            id="message"
            placeholder={props.edit.message}
            value={contactFormData.message}
            name="message"
            className="contact-input"
            onChange={handleChange}
          />
        </div>
        <button className="contact-button">Update</button>
      </form>
    </div>
  );
}

export default ContactForm;
