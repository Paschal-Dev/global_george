import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../../../public/images/logo-with-text.png";
import Image from "next/image";
import { Button } from "../../component/button";
import Link from "next/link";
import ContactUsForm from "../../contact-us";
import { useState } from "react";

const socialMediaLinks = [
  {
    icon: <FaInstagram size={16} />,
    link: "https://www.instagram.com/globalgeorgeinvestmentltd?utm_source=qr&igsh=NHFobDBjYTF5MTl1",
  },
  {
    icon: <FaTwitter size={16} />,
    link: "https://x.com/Ndumdina?t=3vQX7hDwzMd8jvKCBULnug&s=09",
  },
  {
    icon: <FaFacebookF size={16} />,
    link: "https://www.facebook.com/profile.php?id=61560809925309&mibextid=ZbWKwL",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    link: "https://www.linkedin.com/in/chukwuemeka-dominic-george-ugwuegbulam-7719a82a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <FaWhatsapp size={16} />,
    link: "https://wa.me/message/CL6S7YPHYJ77M1",
  },
];

const Footer = () => {
  const [isContactUsFormOpen, toggleContactUsForm] = useState(false);

  return (
    <footer className="container-padding border-dark-gray border-t bg-black pt-16 pb-10 text-white md:pt-24">
      <div className="mx-auto flex justify-between pb-10 max-md:grid max-md:grid-cols-2 max-md:justify-center max-md:gap-10">
        <div className="col-span-1">
          <Image src={Logo} alt="" className="mb-2 h-16 w-20" />
          <p className="w-44 text-sm text-gray-300">
            Your Home To Financial Freedom
          </p>
        </div>

        {/* Contacts */}
        <div id="contact-us">
          <h4 className="mb-3 font-semibold text-white">Contacts</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>+234 803 0719 561 (chat)</li>
            <li>+234 803 7037 914 (chat)</li>
            <li>+234 803 0657 778 (chat)</li>
            <li>+234 803 2219 508 (call)</li>
            <li>+234 803 2397 499 (call)</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Company</h4>
          <ul className="flex flex-col space-y-1 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/liquidation-policy">Liquidation Policy</Link>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Explore</h4>
          <ul className="flex flex-col space-y-1 text-sm text-gray-300">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Investment Portfolio</Link>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Have questions ?</h4>
          <Button
            onClick={() => toggleContactUsForm(true)}
            className="px-4 py-2.5 max-md:text-sm"
          >
            Contact Us
          </Button>
          <ContactUsForm
            open={isContactUsFormOpen}
            close={() => toggleContactUsForm(false)}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col-reverse items-center justify-between pt-8 text-sm text-gray-500 max-md:space-y-4 sm:pt-16 md:flex-row">
        <p className="mb-4 md:mb-0">© Copyright 2025. All rights reserved.</p>
        <div className="flex items-center space-x-2">
          {socialMediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="border-primary grid size-10 place-items-center rounded-full border bg-transparent"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="hidden space-x-4 md:flex">
          <Link
            href="/privacy-policy"
            className="cursor-pointer hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
