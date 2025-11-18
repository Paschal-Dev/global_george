import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";

const WhyChooseUs = () => {
  return (
    <section className="bg-black">
      <div className="container-padding grid w-full grid-cols-1 items-start py-16 pb-28 max-lg:gap-y-10 md:gap-x-32 lg:mx-auto lg:w-fit lg:grid-cols-[31rem_auto] lg:items-center">
        <div className="relative block h-100 w-full overflow-hidden rounded-3xl lg:w-124">
          <Image
            src="/images/two-men.webp"
            alt=""
            fill
            className="absolute inset-0 h-full w-124 rounded-3xl object-cover"
          />
        </div>
        <div>
          <h2 className="section-header mb-4 text-4xl font-bold text-white">
            Why Choose Us?
          </h2>

          <ul className="space-y-4">
            {[
              "100% Transparency",
              "Capital Safety First",
              "Real-Time Investment Updates",
              "Expert Portfolio Managers",
              "Trusted by Thousands",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-300">
                <TiTickOutline className="h-5 w-5 text-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
