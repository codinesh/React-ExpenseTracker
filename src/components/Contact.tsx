import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    console.log("Contact useEffect");
    return () => {
      console.log("Contact useEffect cleanup ");
    };
  });
  return <div>Contact.</div>;
};

export default Contact;
