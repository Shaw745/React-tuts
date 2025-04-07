import React from "react";

const Contact = () => {
  return (
    <div className="container py-10">
      <form className="w-full max-w-[600px] mx-auto shadow-lg rounded-lg p-5 flex flex-col gap-3">
        <input type="text" placeholder="Full Name" className="myinput" />
        <input type="email" placeholder="Email address" className="myinput" />
        <textarea
          placeholder="Type your message"
          className="myinput h-[90px]"
        ></textarea>
        <div className="flex items-center gap-2.5">
          <input type="checkbox" id="mailing" />
          <label htmlFor="mailing"> Join Our Mailing List</label>
        </div>
        <button className="bg-black text-white h-[40px] rounded-lg cursor-pointer">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
