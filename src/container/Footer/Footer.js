import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import emailjs from "@emailjs/browser";
const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    // console.log("e : ", e.target);

    emailjs
      .sendForm(
        "service_y3rytrh",
        "template_8quf5se",
        e.target,
        "uZkU8oEQds4EJtOh4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);

          setTimeout(() => {
            setIsFormSubmitted(false);
          }, 1000 * 10);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            contact@lahcen.click
          </a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +1 (123) 456-7890
          </a>
        </div> */}
      </div>
      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              // value={username}
              // onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              // value={email}
              // onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              // value={message}
              name="message"
              // onChange={handleChangeInput}
            />
          </div>
          <input
            type="submit"
            className="p-text"
            value={!loading ? "Send Message" : "Sending..."}
          />{" "}
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "footer");
