"use client";

import React, { useState, useEffect } from "react";
import Header from "../layout/header";
import { Button } from "@/app/component/button";
import Image from "next/image";
import Portfolio from "@/public/images/people-laughing.jpg";
import Footer from "../layout/footer";
import { IoIosArrowDown } from "react-icons/io";
import InvestmentForm from "../investment-form";

const highlights = [
  {
    title: "💼 Accessible & Flexible Investment",
    description:
      "Start investing with as little as ₦100,000. Our open-ended funds allow easy entry, additional contributions, and the flexibility to switch between distinct fund options empowering you to invest on your own terms.",
  },
  {
    title: "📊 Professional Management & Transparency",
    description:
      "Benefit from the expertise of seasoned fund managers, daily investment valuation, and separate auditing of each fund. Plus, enjoy full transparency with listings on the Nigerian Exchange (NGX).",
  },
  {
    title: "📈 Strong Growth Potential",
    description:
      "Tap into a well-diversified portfolio across multiple sectors designed for long-term stability and returns. Your investments work steadily while you plan for the future.",
  },
  {
    title: "🛡️ Safe, Liquid & Tax-Friendly",
    description:
      "Enjoy high liquidity based on our terms, no withholding tax or VAT on dividends, and the option to invest on behalf of minors. With a minimum holding period of 365 days, you stay protected while earning.",
  },
];

export default function InvestmentPortfolio() {
  useEffect(() => {
    document.title = "Investment Portfolio - Your Home To Financial Freedom";
  }, []);

  const [isInvestmentFormOpen, toggleInvestmentForm] = useState(false);

  return (
    <section className="bg-dark-gray">
      <section className="relative xl:h-screen">
        <Header />
        <div className="container-padding relative z-10 mt-10 flex flex-col items-center justify-between text-white max-2xl:gap-x-16 max-xl:gap-y-16 max-lg:pb-16 lg:mt-16 xl:mt-24 xl:flex-row 2xl:mt-44">
          <div className="flex max-w-xl flex-col items-center text-center xl:items-start xl:text-left">
            <h1 className="text-2xl leading-tight font-bold md:text-4xl lg:text-6xl">
              Secure Your Future with Smart Investments
            </h1>
            <p className="mt-6 text-sm text-gray-300 md:text-base">
              From government bonds to high-yield fixed deposits, our curated
              portfolio options offer you financial growth with stability.
            </p>
            <Button
              onClick={() => toggleInvestmentForm(true)}
              className="mt-10 w-fit cursor-pointer px-4 py-3 text-sm uppercase"
            >
              start investing
            </Button>
            <InvestmentForm
              open={isInvestmentFormOpen}
              close={() => toggleInvestmentForm(false)}
            />
          </div>

          <div className="relative block h-[25rem] w-full overflow-hidden rounded-3xl md:h-[35rem] md:w-[41rem]">
            <Image
              src={Portfolio}
              alt=""
              fill
              className="absolute inset-0 h-full rounded-3xl object-cover md:w-[41rem]"
            />
          </div>
        </div>
      </section>
      <section className="container-padding text-white max-xl:pt-32 max-lg:pt-10">
        <div className="mb-12 text-center">
          <h2 className="section-header mb-4 text-center font-bold text-white">
            Our Investment Edge
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Discover the top reasons to invest with Global-George Investment
            Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#413f3f] bg-[#292929] p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-primary mb-2 font-semibold sm:text-xl">
                {item.title}
              </h3>
              <p className="text-gray-300 max-sm:text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-padding py-20 text-white lg:py-44">
        <div className="mx-auto max-w-7xl">
          <h1 className="section-header mb-12 text-center font-bold text-white">
            Investment Scheme
          </h1>
          <div className="space-y-4">
            <AccordionItem title="Mutual Funds">
              <p>
                Mutual funds are pooled investments managed by professionals.
                They invest in diversified assets like stocks, bonds, and
                treasury bills. They offer flexibility, affordability, and
                reduced risk.
              </p>
            </AccordionItem>

            <AccordionItem title="Government Bonds">
              <p>
                Long-term securities issued by the government with periodic
                interest payments and principal repayment at maturity. Low risk
                with stable returns.
              </p>
              <ul className="list-inside list-disc">
                <li>Maturity: Over 10 years</li>
                <li>Interest: Semi-annual</li>
                <li>Risk: Low</li>
                <li>Return: Moderate</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Treasury Bills">
              <p>
                Short-term discounted securities with maturities under 1 year.
                Sold at discount, redeemed at face value.
              </p>
              <ul className="list-inside list-disc">
                <li>Maturity: 91, 182, 364 days</li>
                <li>No coupon, gain via price appreciation</li>
                <li>Risk: Very low</li>
                <li>Return: Lower, but highly liquid</li>
              </ul>
              <p className="mt-2">Interest Rates</p>
              <ul className="list-inside list-disc">
                <li>91 days - 5%</li>
                <li>182 days - 10%</li>
                <li>364 days - 20%</li>
              </ul>
              <p className="mt-2">
                Interest Rates for Tresury bills with upfront payment
              </p>
              <ul className="list-inside list-disc">
                <li>91 days - 3.5%</li>
                <li>182 days - 8%</li>
                <li>364 days - 15%</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Treasury Notes">
              <p>
                Medium-term instruments with semi-annual interest and repayment
                at maturity.
              </p>
              <ul className="list-inside list-disc">
                <li>Maturity: 2–10 years</li>
                <li>Risk: Low</li>
                <li>Return: Moderate</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Treasury Bonds">
              <p>
                Long-term government securities with semi-annual interest.
                Similar to notes but with longer maturity.
              </p>
              <ul className="list-inside list-disc">
                <li>Maturity: 20–30 years</li>
                <li>Return: Higher</li>
              </ul>
              <p className="mt-2">Interest Rates</p>
              <ul className="list-inside list-disc">
                <li>5 years - 20%</li>
                <li>10 years - 22%</li>
                <li>20 years - 25%</li>
              </ul>
              <p className="mt-2">
                Note: The interest rate does not correspond with the government
                rate. The additional increment comes from the benefit you get
                from global-george — 70% of your capital is invested in
                government bonds, while 30% is invested across other assets.
              </p>
            </AccordionItem>

            <AccordionItem title="Global-george Corporate Bonds">
              <p>
                Long-term securities offering high semi-annual interest with
                minimum investment from ₦50 million.
              </p>
              <ul className="list-inside list-disc">
                <li>5 years: 40%</li>
                <li>10 years: 50%</li>
                <li>20 years: 60%</li>
                <li>30 years: 70%</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Fixed Deposit">
              <p>
                Savings instrument with guaranteed returns and flexible tenure.
              </p>
              <ul className="mb-2 list-inside list-disc">
                <li>12 months: 20%</li>
                <li>6 months: 10%</li>
                <li>3 months: 5%</li>
                <li>3 years: 25%</li>
                <li>5 years: 35%</li>
              </ul>
              <p>Upfront payment is required if requested by the investor</p>
            </AccordionItem>

            <AccordionItem title="The-mega, The-don & The-megadon Fixed Deposit">
              <p>
                Exclusive FDs with high guaranteed returns for high net-worth
                investors.
              </p>
              <ul className="list-inside list-disc">
                <li>The-mega: ₦100M min — 10 years: 60%</li>
                <li>The-don: ₦200M min — 10 years: 60%</li>
                <li>The-megadon: ₦300M min — 10 years: 70%</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Global Fixed Income Funds">
              <p>
                Mutual funds investing in international debt instruments,
                offering diversified, stable income.
              </p>
              <ul className="list-inside list-disc">
                <li>Diversified across countries and currencies</li>
                <li>Invest in treasury, corporate, and mortgage bonds</li>
                <li>Professional fund management</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Why Invest with Global-george Investment Limited?">
              <ul className="list-inside list-disc">
                <li>Start from ₦100,000</li>
                <li>Long-term returns with stability</li>
                <li>Diversified portfolio</li>
                <li>High liquidity with terms agreement</li>
                <li>365-day minimum holding period</li>
                <li>Open-ended funds for easy top-up</li>
                <li>No withholding tax or VAT on dividends</li>
                <li>Professional Fund Manager support</li>
                <li>NGX Memorandum listing</li>
                <li>Independent fund auditing</li>
                <li>Option to invest for minors</li>
                <li>Daily valuation</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-x-5 rounded-full border-[0.2px] border-[#413f3f] px-6 py-4 text-left md:px-8"
      >
        <h3 className="font-semibold md:text-xl">{title}</h3>
        <span>
          <IoIosArrowDown
            size={20}
            color="af774e"
            className={`transform transition-transform duration-500 ${open ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </button>
      {open && (
        <div className="mt-2 mb-8 px-6 text-gray-300 max-sm:text-sm md:px-8">
          {children}
        </div>
      )}
    </div>
  );
};
