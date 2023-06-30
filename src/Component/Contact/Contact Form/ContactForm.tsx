import React from "react";
import "./contact-form.scss";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form: any = React.useRef();
  const serviceId: any = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId: any = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey: any = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [show, setShow] = React.useState(false);
  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const send = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      console.log(send.text);
    } catch (error) {
      console.log(error);
    } finally {
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  };
  return (
    <>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <fieldset>
          <ul>
            <div className="naming-input">
              <li>
                <label htmlFor="contact-name">Name :</label>
                <input
                  type="text"
                  id="contact-name"
                  name="contact-name"
                  required
                />
              </li>
              <li>
                <label htmlFor="contact-email">Email :</label>
                <input
                  type="email"
                  id="contact-email"
                  name="contact-email"
                  required
                />
              </li>
            </div>
            <li className="message-container">
              <label htmlFor="contact-message">Message :</label>
              <textarea
                name="contact-message"
                id="contact-message"
                cols={30}
                rows={8}
                required
              ></textarea>
            </li>
          </ul>
        </fieldset>
        {show && <div className="confirm-message">PESAN TELAH TERKIRIM</div>}
        <div className="button">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
