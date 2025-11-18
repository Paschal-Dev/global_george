"use client";
import React, { useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Your Home To Financial Freedom";
  }, []);

  return (
    <section className="bg-dark-gray">
      <Header />
      <section className="container-padding">
        <div className="bg-primary mt-8 grid h-48 place-items-center rounded-4xl text-3xl font-bold text-white lg:mt-20 lg:h-64 lg:text-5xl xl:mt-24">
          Privacy Policy
        </div>
        <div className="pt-10 pb-32 text-gray-300 md:pt-16">
          <h1 className="font-semibold md:text-lg">
            Global-george Investment Limited is committed to protecting the
            privacy and security of our investors&apos; personal information.
          </h1>
          <div>
            <h2 className="mt-4 mb-2 font-semibold">Information We Collect</h2>
            <ul className="list-inside list-disc pl-4 max-sm:text-sm">
              <li> Contact information (name, email, phone number, address)</li>
              <li>
                Financial information (account numbers, investment amounts)
              </li>
              <li>
                Identification information (social security number, passport
                number)
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-semibold">
              How We Use Your Information
            </h2>
            <ul className="list-inside list-disc pl-4 max-sm:text-sm">
              <li>To process transactions and manage your investments </li>
              <li>To communicate with you about your investments</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-semibold">Information Security</h2>
            <ul className="list-inside list-disc pl-4 max-sm:text-sm">
              <li>We use encryption to protect your information </li>
              <li>
                Access to your information is restricted to authorized personnel
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-semibold">Information Sharing</h2>
            <ul className="list-inside list-disc pl-4 max-sm:text-sm">
              <li>
                We may share your information with third-party service providers
              </li>
              <li>
                We may share your information with legal authorities as required
                by law
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-semibold"> Data Retention </h2>
            <ul className="list-inside list-disc pl-4 max-sm:text-sm">
              <li>
                We retain your information for as long as necessary to manage
                your investments
              </li>
              <li>
                We retain your information for a period of time after your
                investment is closed to comply with legal and regulatory
                requirements
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-semibold">Your Rights</h2>
            <ul className="list-inside list-disc pl-4 max-sm:text-sm">
              <li>
                You have the right to access and correct your personal
                information
              </li>
              <li>
                You have the right to request deletion of your personal
                information
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-semibold">Changes to This Policy</h2>
            <ul className="list-inside list-disc pl-4 max-sm:text-sm">
              <li>We may update this policy from time to time</li>
              <li>We will notify you of any significant changes</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
