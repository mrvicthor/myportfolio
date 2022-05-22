import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (formData.name.trim() === "") errors.name = "Name is required...";
    if (formData.email.trim() === "") errors.email = "Email is required...";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    console.log(errors);
    setErrors(() => errors || {});
    if (errors) return;

    setSuccess(true);

    emailjs
      .sendForm(
        "service_n4nbrws",
        "template_wsmyyms",
        e.target,
        "2iF5dkKhveLmIdBSu"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const [success, setSuccess] = useState(false);

  return (
    <section id="form" className="container">
      {success ? (
        <>
          <h2 className="clr-green align-center fs-200">Message sent!</h2>
          <p className="clr-light-gray fs-100 align-center">
            Will get back to you ASAP
          </p>
        </>
      ) : (
        <>
          <h2 className="clr-green fs-200 align-center">Get in touch</h2>
          <p className="clr-light-gray fs-100 align-center">
            Got an idea, proposal, or project, or want us to work together on
            something? Feel free to contact me.
          </p>
          <form className="form flex" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name" className="clr-light-gray">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name..."
                // required
              />
            </div>
            {errors.name && <small className="clr-tomato">{errors.name}</small>}
            <div className="form-control">
              <label htmlFor="email" className="clr-light-gray">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email..."
                // required
              />
            </div>
            {errors.email && (
              <small className="clr-tomato">{errors.email}</small>
            )}
            <div className="form-control">
              <label htmlFor="message" className="clr-light-gray">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="leave a message"
                rows="4"
              />
            </div>
            <input type="submit" value="Send Message" />
          </form>
        </>
      )}
    </section>
  );
};

export default Form;
