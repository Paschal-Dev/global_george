import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="container-padding mx-auto grid grid-cols-1 items-end gap-y-10 bg-black py-16 md:py-24 lg:grid-cols-2 lg:gap-x-44"
    >
      <div>
        <h2 className="section-header font-bold text-white">
          About Our Company
        </h2>
        <p className="my-6 text-sm text-gray-300">
          With a strong foundation in investment management, Global-George
          Investment Limited specializes in delivering secure, growth-focused
          financial solutions. We are committed to protecting our clients’
          capital while providing profitable and transparent investment
          opportunities tailored to meet their long-term financial goals.
        </p>

        <div className="relative mt-10 h-100 w-full overflow-hidden rounded-3xl lg:w-124">
          <Image
            src="/images/money-growth.jpg"
            alt=""
            fill
            className="absolute inset-0 h-full w-124 rounded-3xl object-cover"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
          <p className="text-sm">
            At Global-George Investment Limited, our mission is to empower
            investors by providing expert investment management services that
            ensure the safety of their capital while driving sustainable growth.
          </p>
        </div>

        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300">
          <h3 className="mb-2 text-xl font-semibold">Our Vision</h3>
          <p className="text-sm">
            To be the leading investment management firm globally, recognized
            for our unwavering dedication to protecting and growing our
            clients&apos; wealth.
          </p>
        </div>

        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300">
          <h3 className="mb-2 text-xl font-semibold">Our Goal</h3>
          <p className="text-sm">
            To consistently deliver secure and profitable investment
            opportunities by carefully managing and allocating client capital
            into viable, high-potential projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
