/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

const ContactUsForm = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "backdrop") {
      close();
    }
  };

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      if (res.ok) {
        enqueueSnackbar("Message sent successfully!", { variant: "success" });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        close();
      } else {
        let errorMessage = "Failed to send message.";
        const text = await res.text();
        if (text) {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        }
        enqueueSnackbar(errorMessage, {
          variant: "error",
        });
      }
    } catch {
      enqueueSnackbar("An unexpected error occurred. Try again later.", {
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="backdrop"
      onClick={handleBackdropClick}
      className={`fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/40 transition-transform duration-500 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex w-[90%] flex-col gap-8 overflow-y-auto rounded-3xl bg-white p-6 shadow-xl max-xl:max-h-[80%] max-md:max-h-[90%] md:flex-row md:p-10 lg:w-[80%] xl:max-w-5xl">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-primary mb-4 text-2xl font-bold md:text-3xl">
            Send us a message
          </h1>
          <h2 className="text-lg font-bold text-black">We’re here to help.</h2>
          <p className="mb-4 text-gray-700 max-md:text-sm">
            Send us a message, and our team will get back to you as quickly as
            possible.
          </p>
          <img
            src="https://em-content.zobj.net/thumbs/160/apple/354/envelope-with-arrow_1f4e9.png"
            alt="Message Icon"
            className="mt-4 h-10 w-10 max-sm:hidden"
          />
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col gap-4 max-md:text-sm"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:ring-primary-light w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500 focus:ring-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="focus:ring-primary-light w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500 focus:ring-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="focus:ring-primary-light w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500 focus:ring-2 focus:outline-none"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            rows={5}
            value={message}
            className="focus:ring-primary-light w-full resize-none rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500 focus:ring-2 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting || !name || !email || !subject || !message}
            className="bg-primary mt-8 w-40 cursor-pointer self-end rounded-lg px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
