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
      <form className="cmxform form-dislpay" id="contactForm" method="" action="/contacts/add">
        <h2>Provide your personal info (won't be published) and add a comment with your feedback</h2>
        <fieldset>
          <div className="form-spacing">
            <label htmlFor="cname">Full Name <mark class="requiredInput">*</mark></label>
            <input id="cname" name="name" minLength="2" type="text" required />
          </div>
          <div className="form-spacing">
            <label htmlFor="cemail">Email <mark class="requiredInput">*</mark></label>
            <input id="cemail" type="email" name="email" required />
          </div>
          <div className="form-spacing">
            <label htmlFor="phone">Phone Number <mark class="requiredInput">*</mark></label>
            <input  type="number" id="cphone" required/>
          </div>
          <div className="form-spacing">
            <label htmlFor="ccomment">Your comment <mark class="requiredInput">*</mark></label>
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


function myFunction() {
  let fullName = document.getElementById("cname").value;
  document.getElementById("cname").innerHTML = fullName;
  let email = document.getElementById("cemail").value;
    document.getElementById("cemail").innerHTML = email;

    let phoneNumber = document.getElementById("cphone").value;
    document.getElementById("cphone").innerHTML = phoneNumber;
    let comment = document.getElementById("ccomment").value;
      document.getElementById("ccomment").innerHTML = comment;
}


export default Contact;
