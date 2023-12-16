import React, { useState } from 'react';
import "../css/contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with formData (e.g., send data to backend, display, etc.)
    console.log(formData);
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='row '>
    <h2 className='text-center font'>Contact Us</h2>
    <div className='col-5 offset-1'>
      
        <p className=''>

Welcome to Burgers Deluxe! We're thrilled to hear from you.<br/>

Have a question, feedback, or just want to say hello? Drop us a message using the form below. We're always here to assist you.<br/><br/>

<h3 className='font'>Our Commitment</h3>

At Burgers Deluxe, we strive to provide you with the best dining experience possible. Your feedback helps us improve and serve you better. Feel free to share your thoughts with us!<br/><br/>

<h3 className='font'>Contact Information</h3>

Address: 123 Burger Street, City, State, Zip<br/>
Phone: +1 (555) 123-4567<br/>
Email: info@burgersdeluxe.com<br/><br/>

<h3 className='font'>Operating Hours</h3>
- **Monday - Friday:** 10:00 AM - 10:00 PM<br/>
- **Saturday - Sunday:** 11:00 AM - 11:00 PM<br/><br/>

We value your patronage and look forward to hearing from you soon!<br/><br/>

Best regards,<br/>
The Burgers Deluxe Team.
</p>
</div>
      <div className='col-md-6 p-3 contactus-container'>
      <form className='contactus-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        
      </form>
      </div>
    </div>
  );
};

export default ContactUs;
