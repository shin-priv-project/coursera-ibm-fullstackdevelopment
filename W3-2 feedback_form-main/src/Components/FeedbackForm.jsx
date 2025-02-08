import React, { useState, useEffect } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // { name, value } is the destructuring assignment. It means you're pulling out the name and value properties from the event.target object and assigning them to variables named name and value respectively.
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Utilizes a function inside setFormData to access the previous state (prevFormData). This is generally safer, especially when dealing with asynchronous state updates or if there might be multiple updates in quick succession.
    // What is the function form? The function form of setState (or setFormData in your case) refers to using a function as the argument to the state update function. This function receives the previous state as its argument and returns the new state. This approach ensures you have access to the most up-to-date state when making changes, which is particularly useful for handling asynchronous updates and concurrent state changes.
  };

  useEffect(() => {
    console.log(formData.name, formData.email, formData.feedback);
    }, [formData]);
  // Dependency Array: The second argument to useEffect is an array of dependencies. The effect will run whenever any of the dependencies change.

  const handleSubmit = (event) => {
    event.preventDefault();
    // By default, clicking the submit button will send the form data and refresh the page. However, you might want to handle the form submission with JavaScript (e.g., sending the form data via an AJAX request) without refreshing the page. In this case, you can use event.preventDefault() to prevent the default form submission behavior.
    
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
      `;
    
    const isConfirmed = window.confirm(`Please confim your details: \n\n${confirmationMessage}`);
  
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
        <textarea name="feedback" placeholder="Your Feedback" onChange={handleChange}></textarea>
        <button type="subimt">Submit Feedback</button>
        <div style={{display:'flex', gap:'10px', flexDirection:'column'}}>
          <span>Rate Us:</span>
          <p><input
              type="radio"
              name="rating"
              value="1"
              onChange={handleChange}
              />1</p>
          <p><input
              type="radio"
              name="rating"
              value="2"
              onChange={handleChange}
              />2</p>
          <p><input
              type="radio"
              name="rating"
              value="3"
              onChange={handleChange}
              />3</p>
          <p><input
              type="radio"
              name="rating"
              value="4"
              onChange={handleChange}
              />4</p>
          <p><input
              type="radio"
              name="rating"
              value="5"
              onChange={handleChange}
              />5</p>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
