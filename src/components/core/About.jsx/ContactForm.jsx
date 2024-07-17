import React from "react";
import ContactUS from "../../Common/Contact/ContactUS";
const ContactForm = () => {
  return (
    <div className="mx-auto flex flex-col space-y-3 justify-center">
      <h1 className="text-4xl text-center text-richblack-5 font-bold font-inter">
        Get in Touch
      </h1>
      <p className="text-lg text-center text-richblack-300 font-medium pb-10">
        We’d love to here for you, Please fill out this form.
      </p>
      <ContactUS />
    </div>
  );
};

export default ContactForm;
