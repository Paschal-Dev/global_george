"use client";
import React, { useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";

const services = [
  {
    id: "01",
    title: "Fund Management",
    description:
      "Manage pooled money from investors to achieve specific financial goals, usually through diversified investments in stocks, bonds, or other assets.",
  },
  {
    id: "02",
    title: "Portfolio Management",
    description:
      "Select and oversee a mix of investments that aligns with an individual’s or institution’s risk tolerance and financial objectives.",
  },
  {
    id: "03",
    title: "Investment Advisory",
    description:
      "Provide professional advice to clients on where, when, and how to invest to achieve optimal returns within their risk limits.",
  },
  {
    id: "04",
    title: "Wealth Management",
    description:
      "Comprehensive financial services including investment, tax, estate, and retirement planning to grow and protect an individual’s wealth.",
  },
  {
    id: "05",
    title: "Collective Investment Scheme",
    description:
      "An investment vehicle where multiple investors pool funds to invest in diversified assets, managed professionally; e.g. mutual funds or unit trusts.",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Services - Your Home To Financial Freedom";
  }, []);

  return (
    <section className="bg-dark-gray">
      <Header />
      <section className="container-padding">
        <div className="bg-primary mt-8 grid h-48 place-items-center rounded-4xl text-3xl font-bold text-white lg:mt-20 lg:h-64 lg:text-5xl xl:mt-24">
          Our Services
        </div>
        <div className="pt-10 pb-32 md:pt-16">
          <div className="grid grid-cols-1 divide-[#413f3f] rounded-xl border-[#413f3f] max-lg:space-y-10 lg:grid-cols-3 lg:divide-x lg:divide-y lg:border">
            {services.map((item) => (
              <div
                key={item.id}
                className="space-y-4 border-[#413f3f] px-6 py-8 max-lg:rounded-xl max-lg:border md:px-10 md:py-10 xl:py-16"
              >
                <div className="text-primary-light flex items-center gap-x-2 font-medium md:text-lg">
                  <span className="bg-primary block h-2.5 w-2.5 rounded-full"></span>
                  {item.id}
                </div>
                <h1 className="text-lg font-bold text-white md:text-xl">
                  {item.title}
                </h1>
                <p className="text-gray-300 max-md:text-sm xl:w-4/5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
