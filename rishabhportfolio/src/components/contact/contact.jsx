import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm(
    //             "your_service_id",      // replace with your EmailJS service ID
    //             "your_template_id",     // replace with your EmailJS template ID
    //             form.current,
    //             "your_public_key"       // replace with your EmailJS public key
    //         )
    //         .then(
    //             (result) => {
    //                 alert("✅ Message Sent Successfully! " + result);
    //                 form.current.reset();
    //             },
    //             (error) => {
    //                 alert("❌ Failed to send. Please try again. " + error);
    //             }
    //         );
    // };

    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-subtitle">
                Please fill out the form below to discuss any work opportunities.
            </p>

            <form ref={form} className="contact-form">
                <input type="text" name="user_name" placeholder="Your name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
