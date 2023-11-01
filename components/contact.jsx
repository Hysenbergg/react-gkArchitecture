"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";


const Contact = () => {
  const {ref} = useSectionInView('Contact', 0.5);

  return (
    <section ref={ref} id="contact" className="flex flex-col bg-[#f8f4f3] w-full text-center py-[80px]">
      <h2 className="text-[42px] my-[30px]">Contact Us</h2>
      <div className="flex justify-around px-[50px]">
        <form className="mt-10 flex flex-col dark:text-black w-[500px]">
          <input
            className="h-14 rounded-lg borderBlack px-4 
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
          transition-all dark:outline-none"
            type="email"
            name="senderEmail"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
          transition-all dark:outline-none"
            name="message"
            required
            maxLength={5000}
            placeholder="Your message.."
          />
          <button className="py-[10px] px-[24px] bg-white w-[250px] rounded-md border border-black">
            Send Message
          </button>
        </form>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.40552615766!2d28.363675975838166!3d37.214347072131915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf731b647e39c1%3A0xdb636587c69370ef!2sGazanfer%20Ko%C3%A7%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1698229562747!5m2!1str!2str"
            width="500"
            height="500"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
