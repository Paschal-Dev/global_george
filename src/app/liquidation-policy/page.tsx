"use client";
import React, { useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function LiquidationPolicy() {
  useEffect(() => {
    document.title =
      "Investment Liquidation Policy - Your Home To Financial Freedom";
  }, []);

  return (
    <section className="bg-dark-gray">
      <Header />
      <section className="container-padding">
        <div className="bg-primary mt-8 grid h-48 place-items-center rounded-4xl px-4 text-3xl font-bold text-white lg:mt-20 lg:h-64 lg:text-5xl xl:mt-24">
          Investment Liquidation Policy
        </div>
        <div className="pt-10 pb-32 text-gray-300 md:pt-16">
          <div>
            <h1 className="font-semibold md:text-lg">
              All investment liquidations must be approved by the Investment
              Committee.
            </h1>
            <ul className="list-inside list-disc space-y-3 py-4 pl-4 max-sm:text-sm">
              <li>
                Liquidation decisions will be guided by portfolio performance,
                market conditions, and organizational cash flow needs.
              </li>
              <li>
                Assets shall be liquidated in a manner that minimizes losses and
                adheres to risk tolerance levels.
              </li>
              <li>
                Proceeds from liquidations must be reallocated or deposited into
                approved accounts within five business days.
              </li>
              <li>
                Emergency liquidations require written justification and CEO
                approval.
              </li>
              <li>
                All actions must comply with applicable regulations and internal
                financial controls.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-semibold">NOTE</h2>
            <ul className="list-inside list-disc space-y-3 pl-4 max-sm:text-sm">
              <li>
                Application for liquidation of your investment primarily starts
                exactly after 91 days or 3 months
              </li>
              <li>
                Percentage for full liquidation is -40% on the accrued interest
              </li>
              <li>
                Percentage for part liquidation is -20% on the accrued interest
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
