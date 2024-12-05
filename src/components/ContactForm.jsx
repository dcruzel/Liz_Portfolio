import { useState } from 'react';
// Create ContactForm function
function ContactForm(props) {
  //Initialize the state for object contactFormData using the variables: 
  // contactName, email, and message
  const [contactFormData, setcontactFormData] = useState({
    contactName: '', 
    email: "",
    message: "",
  });
  
  //Handles when the Submit button is pressed
  const handleSubmit = (e) => {
    //Prevents reloading the page
    e.preventDefault();
    //After trimming the contactName of leading and ending spaces,
    //check if it is blank. If blank, alert that the contact name cannot be blank; 
    // otherwise continue
    if(!contactFormData.contactName.trim()){
      alert("Contact name cannot be blank");
      return;
    }
    //Check if the email follows the right email validation. 
    //If yes, than continue; otherwise, alert that the email is not valid.
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailValidation.test(contactFormData.email)){
      alert("Email is not valid");
      return;
    }
    //After trimming the message of leading and ending spaces,
    //check if it is blank. If blank, alert that the contact name cannot be blank; 
    // otherwise continue
    if(!contactFormData.message.trim()){
      alert("Message cannot be blank");
      return;
    }
    
    //When submit, generate a random id for the message
    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      ...contactFormData,
    });

    //Set the contactFormData with the contactName, email and message variables
    setcontactFormData({
      contactName: '', 
      email: "",
      message: "",
    });
  };

  //handleChange in the form variables
  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactFormData((prevData)=>({
      ...prevData,
      [name]: value,
    }));
  };

  // Check if the "edit" prop exists. If not, we use the new contact form.
  // Otherwise, update the update contact form
  return !props.edit ? (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row mb-3">
          {/* contactName input */}
          <label for="inputContactName" className="col-sm-2 col-form-label">Name</label>
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
        <div className="row mb-3">
          {/* email input */}
          <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
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
        <div className="row mb-3">
          {/* message textarea */}
          <label for="inputMessage" className="col-sm-2 col-form-label">Message</label>
          <textarea
            id="Message"
            placeholder="Message"
            rows="3"
            value={contactFormData.message}
            name="message"
            className="form-control"
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Add Contact Message button */}
        <button className="contactMe-button">Add Contact Message</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          {/* contactName input */}
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
          {/* email input */}
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
          {/* message textarea */}
          <textarea
            id="message"
            placeholder={props.edit.message}
            value={contactFormData.message}
            name="message"
            className="contact-input"
            onChange={handleChange}
          />
        </div>
        {/* Update button */}
        <button className="contact-button">Update</button>
      </form>
    </div>
  );
}
//Export ContactForm
export default ContactForm;
