import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { CiUser } from "react-icons/ci";
import { TbBrandMailgun } from "react-icons/tb";

const Contact = () => {
  const contactForm = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const inputNameHandler = (e) => {
    setName(e.target.value);
  };
  const inputSubjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const sendSayHello = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        contactForm.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setEmailSent(true)
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return emailSent ?
  (<>Something</>)
  :
  (
    <>
      <div className="portfolioContactContainer w-full h-screen flex flex-col justify-center">
        <div className="contactTitle w-1/3 text-center py-3">
          <h1>Say Hello!</h1>
        </div>
        <form
          className="w-full md:max-w-lg flex flex-col gap-4"
          ref={contactForm}
          onSubmit={sendSayHello}
        >
          <div className="contactUsername flex justify-between items-center w-full bg-white/10 rounded-md p-3 border-[1px] border-gray-400">
            <input
              onChange={inputNameHandler}
              name="from_name"
              className="bg-transparent w-full focus:outline-none"
              type="text"
              maxLength={64}
              placeholder={"Username"}
              required
            />
            <CiUser />
          </div>

          <div className="contactEmail flex justify-between items-center w-full bg-white/10 rounded-md p-3 border-[1px] border-gray-400">
            <input
              onChange={inputEmailHandler}
              name="from_email"
              className="bg-transparent w-full focus:outline-none"
              type="text"
              maxLength={64}
              placeholder={"Email Address"}
              required
            />
            <TbBrandMailgun />
          </div>

          <div className="contactMessage w-full bg-white/10 rounded-md p-3 border-[1px] border-gray-400">
            <p className="text-gray-400/50 text-sm">Say Something!</p>
            <textarea
              onChange={inputSubjectHandler}
              name="message"
              cols="30"
              rows="10"
              className="w-full resize-none bg-transparent focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="contactButton">
            <input
              type="submit"
              className="w-full cursor-pointer bg-gray-500/40 border-[1px] border-gray-400 text-white rounded-md p-3"
              value={'Send Message'}
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
