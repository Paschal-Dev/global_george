"use client";
import React, { useState } from "react";
import { Button } from "../../component/button";
import Header from "../../layout/header";
import InvestmentForm from "../../investment-form";

const HeroSection = () => {
  const [isInvestmentFormOpen, toggleInvestmentForm] = useState(false);

  return (
    <section
      className="relative bg-[#060606] bg-cover bg-center lg:min-h-screen"
      style={{ backgroundImage: 'url("/images/investment-bg.jpg")' }}
    >
      <Header />
      <div className="container-padding relative z-10 mt-10 flex flex-col items-center justify-between text-white max-lg:pb-16 lg:mt-16 lg:flex-row xl:mt-36 2xl:mt-44">
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-2xl leading-tight font-bold md:text-4xl lg:text-6xl">
            Your Home To Financial Freedom.
          </h1>
          <p className="mt-6 text-sm text-gray-300 md:text-base">
            Global-George Investment Limited provides secure, expert investment
            management services with a commitment to capital safety and
            sustainable growth.
          </p>
          <Button
            onClick={() => toggleInvestmentForm(true)}
            className="mt-10 w-fit cursor-pointer px-4 py-3 text-sm uppercase"
          >
            start investing
          </Button>
        </div>

        <div className="mt-12 hidden w-full max-w-md rounded-xl bg-linear-to-b from-[#515556] to-[#5f5d59] p-8 text-center backdrop-blur-lg lg:mt-0 xl:block">
          <div className="mb-4 flex justify-center">
            <div className="bg-primary h-8 w-8" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#b69679]">
            Unlock Real Estate
            <br />
            Investing with Minimal <br /> Capital
          </h2>
          <p className="mb-4 text-sm text-orange-100">Satisfied investors</p>
          <Button
            variant="outline"
            onClick={() => toggleInvestmentForm(true)}
            className="mx-auto mt-20 cursor-pointer px-4 py-3 text-sm uppercase"
          >
            Get started
          </Button>
        </div>
      </div>
      <InvestmentForm
        open={isInvestmentFormOpen}
        close={() => toggleInvestmentForm(false)}
      />
    </section>
  );
};

export default HeroSection;
