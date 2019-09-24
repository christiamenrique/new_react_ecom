import React from "react";
import "./contact.scss";
import Jumbal from "./Jumbotron";

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
    } else {
      alert(`Thank you ${fullName} we have recieve your message`)
    }
  }

  return (
    <React.Fragment>
      <Jumbal />
      <form className="cmxform form-dislpay" id="contactForm" method="git" action="#">
        <h2>Provide your personal info (won't be published) and add a comment with your feedback</h2>
        <fieldset>
          <div className="form-spacing">
            <label htmlFor="cname">Full Name *</label>
            <input id="cname" name="name" minLength="2" type="text" required />
          </div>
          <div className="form-spacing">
            <label htmlFor="cemail">Email *</label>
            <input id="cemail" type="email" name="email" required />
          </div>
          <div className="form-spacing">
            <label htmlFor="phone">Phone Number *</label>
            <input type="number" id="cphone" required/>
          </div>
          <div className="form-spacing">
            <label htmlFor="ccomment">Your comment *</label>
            <textarea className="form-comment" id="ccomment" name="comment" required></textarea>
          </div>
          <div className="form-spacing">
            <button onClick={formValidation} type="submit" className="btn btn-primary mb-2">Submit</button>
          </div>
        </fieldset>
      </form>
    </React.Fragment>
  )
}
export default Contact;
