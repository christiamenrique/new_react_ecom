import React from "react";
import "./contact.css"

function Contact(props) {

  const formValidation = () => {
    const errorFields = [];
    const fullName = document.getElementById("cname").value;
    const email = document.getElementById("cemail").value;
    const phone = document.getElementById("cphone").value;
    const comment = document.getElementById("ccomment").value;

    if (fullName === '') {
      errorFields.push('full name');
    }

    if (email === '') {
      errorFields.push('email');
    }

    if (phone === '') {
      errorFields.push('phone-number');
    }

    if (comment === '') {
      errorFields.push('comment')
    }
    if (errorFields.length) {
      alert(`Please fill out the following fields: ${errorFields.join(', ')}`);
    }else {
      alert(`Thank you ${fullName} we have recieve your message`)
    }
  }

  return(
    <form className="cmxform form-dislpay" id="contactForm" method="git" action="#">
      <fieldset>
        <h2>Provide your personal info (won't be published) and add a comment with your feedback</h2>
          <div className="form-spacing">
          <label for="cname">Full Name (required)</label>
          <input id="cname" name="name" minlength="2" type="text" required placeholder="Full Name"/>
        </div>
        <div className="form-spacing">
          <label for="cemail">email (required)</label>
          <input id="cemail" type="email" name="email" required placeholder="email"/>
        </div>
        <div className="form-spacing">
          <label for="phone">Phone Number (required)</label>
          <input type="number" id="cphone" placeholder="Phone Number" />
        </div>
        <div className="form-spacing">
          <label for="ccomment">Your comment (required)</label>
          <textarea className="form-comment" id="ccomment" name="comment" required></textarea>
        </div>
        <div className="form-spacing">
          <button onClick={formValidation} type="submit" className="btn btn-primary mb-2">Submit</button>
        </div>
      </fieldset>
    </form>
  )
}     
export default Contact;
