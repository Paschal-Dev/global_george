import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../../public/images/logo-with-text.png";
import Menu from "../../menu";
import { Button } from "../../component/button";
import MobileSidebar from "../../menu/mobile-menu";
import Link from "next/link";
import ContactUsForm from "../../contact-us";

export default function Header() {
  const [isContactUsFormOpen, toggleContactUsForm] = useState(false);

  return (
    <>
      <section className="container-padding flex items-center justify-between py-2">
        <Link href="/">
          <Image src={Logo} alt="" className="h-16 w-20" />
        </Link>
        <Menu />
        <MobileSidebar />
        <Button
          onClick={() => toggleContactUsForm(true)}
          className="px-4 py-2.5 max-md:hidden"
        >
          Contact Us
        </Button>
      </section>
      <ContactUsForm
        open={isContactUsFormOpen}
        close={() => toggleContactUsForm(false)}
      />
      ;
    </>
  );
}
