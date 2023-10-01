import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { CiUser } from "react-icons/ci";
import { TbBrandMailgun } from "react-icons/tb";

const emailPreview = ({ from, email, content }) => {
  return (
    <div className="emailPreview mt-5 p-2 bg-white/20">
      <h1 className="text-[11px] text-gray-300/70 tracking-widest border-b-[1px] border-gray-400/50 my-3 flex justify-between">
        <span>preview email</span>
        <TbBrandMailgun />
      </h1>

      <p className="flex flex-col my-2">
        <span className="text-sm text-gray-400">Username</span>
        <span>{from}</span>
      </p>

      <p className="flex flex-col my-2">
        <span className="text-sm text-gray-400">Email Address</span>
        <span>{email}</span>
      </p>

      <p className="flex flex-col my-2">
        <span className="text-sm text-gray-400">Message</span>
        <span>{content}</span>
      </p>

      <p className="flex flex-col items-end mt-10 text-[10px]">
        <span className="sendedToContent text-gray-400">
          Email delivered to
        </span>
        <a href="mailto:maxim.dudai01@gmail.com">maxim.dudai01@gmail.com</a>
      </p>
    </div>
  );
};

const onEmailSuccess = () => {
  return (
    <div className="flex text-center bg-white/20 items-center">
      <h1 className="p-2">Thanks for Getting in Touch!</h1>
    </div>
  );
};

const Contact = () => {
  const contactForm = useRef();
  const [emailSended, setEmailSended] = useState(false);

  const [from, setFrom] = useState("cnv");
  const [email, setEmail] = useState("@tactu.ala");
  const [content, setContent] = useState("something new");

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
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
          setEmailSended(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return emailSended ? (
    <div className="emailSuccess w-full md:max-w-lg flex flex-col justify-center min-h-screen">
      {onEmailSuccess()}
      {emailPreview({ from, email, content })}
    </div>
  ) : (
    <>
      <div className="portfolioContactContainer w-full h-screen flex flex-col justify-center">
        <form
          className="w-full md:max-w-lg flex flex-col gap-4"
          ref={contactForm}
          onSubmit={sendSayHello}
        >
          <div className="contactTitle text-center py-3">
            <h1>Say Hello!</h1>
          </div>

          <div className="contactUsername flex justify-between items-center w-full bg-white/10 rounded-md p-3 border-[1px] border-gray-400">
            <input
              onChange={handleFrom}
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
              onChange={handleEmail}
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
              onChange={handleContent}
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
              value={"Send Message"}
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
