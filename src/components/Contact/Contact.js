import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div id="container">
        <h2>Kontakt</h2>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              placeholder="Imię"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              id="email_input"
              required
            />
          </div>
          <div className="subject">
            <select
              placeholder="subject line"
              name="subject"
              id="subject_input"
              required
            >
              <option disabled hidden selected>
                Wybierz temat
              </option>
              <option>Sprawy Ogólne</option>
              <option>Sprawy Techniczne</option>
            </select>
          </div>
          <div className="message">
            <textarea
              name="message"
              placeholder="Wiadomość"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Wyślij" id="form_button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
