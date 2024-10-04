import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../context/TitleProvider";
import Toaster from "../helper/Toaster";

const Contact = () => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle(`Contact - Amdadul Hoque's Portfolio`);
  }, [setTitle]);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formValidation, setFormValidation] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactFormValidation = (e) => {
    e.preventDefault();

    let errors = {};

    if (!form.name) {
        errors.name = "Your Name field is required!";
    }

    if (!form.email) {
        errors.email = "Email field is required!";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = "Email is invalid!";
    }

    if (!form.message) {
        errors.message = "Message field is required!";
    }

    if (Object.keys(errors).length > 0) {
        setFormValidation(errors);
        return;
    }

    handleContactForm(e);

  };


  const handleContactForm = async (e) => {
    e.preventDefault();

    try {
      // Simulate sending data to a backend API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        // Reset form and show success message
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setToast({
          show: true,
          type: "success",
          message: "Your message has been sent successfully!",
        });
      } else {
        setToast({
          show: true,
          type: "danger",
          message: "Error submitting the form. Please try again.",
        });
      }
    } catch (error) {
      setToast({
        show: true,
        type: "danger",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div>
      <section className="bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center">Contact</h2>
          <form className="mt-4" onSubmit={handleContactFormValidation}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                ></input>
                <span className="text-denger">{formValidation.name}</span>
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                ></input>
                <span className="text-denger">{formValidation.email}</span>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <span className="text-denger">{formValidation.message}</span>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      {toast.show && <Toaster message={toast.message} type={toast.type} />}
    </div>
  );
};

export default Contact;
