import React from "react";

export default function Objectives() {
  return (
    <section className="container-padding bg-black py-4 md:py-16 lg:py-24">
      <h2 className="section-header font-bold text-white">Our Objectives</h2>
      <div className="mt-10 grid grid-cols-1 max-md:gap-y-6 md:grid-cols-5 md:gap-x-3">
        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300 shadow-sm">
          <p>
            <span className="text-lg font-semibold">Identify</span> and invest
            in financially sound and viable projects with strong growth
            potential.
          </p>
        </div>
        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300 shadow-sm">
          <p>
            <span className="text-lg font-semibold">Ensure</span> consistent and
            guaranteed returns on investment for our clients.
          </p>
        </div>
        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300 shadow-sm">
          <p>
            <span className="text-lg font-semibold">Maintain</span> rigorous
            risk management strategies to protect investor capital at all times.
          </p>
        </div>
        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300 shadow-sm">
          <p>
            <span className="text-lg font-semibold">Build</span> long-term
            relationships based on trust, performance, and accountability.
          </p>
        </div>
        <div className="bg-dark-gray rounded-2xl p-6 text-gray-300 shadow-sm">
          <p>
            <span className="text-lg font-semibold break-all">
              {" "}
              Continuously
            </span>{" "}
            innovate and adapt to market trends to enhance outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
