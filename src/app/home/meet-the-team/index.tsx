import Image from "next/image";
import React from "react";

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "George Ugwuegbulam",
    title: "Chief Executive Officer & Managing Director",
    image: "/images/team/george.png",
  },
  {
    name: "Uche Chibuikem",
    title: "Chief Operations & Information Officer",
    image: "/images/team/uche.png",
  },
  {
    name: "David Ngwoke",
    title: "Chief Legal Adviser",
    image: "/images/team/david.png",
  },
  {
    name: "Juliana Baah",
    title: "Chief Marketing Officer",
    image: "/images/team/juliana.png",
  },
  {
    name: "Loveth Igbeia",
    title: "Public Relations Officer & Secretary",
    image: "/images/team/loveth.png",
  },
  {
    name: "Tolulope Ojo",
    title: "Chief Accounting & Investment Relations Officer",
    image: "/images/team/tolu.png",
  },
  {
    name: "Folashayo Adedotun",
    title: "Chief Financial & Risk Officer",
    image: "/images/team/michael.png",
  },
];

const MeetTheTeam = () => {
  return (
    <div className="container-padding bg-black py-4 text-white md:py-16 lg:py-24">
      <h2 className="section-header mb-10 text-center font-bold">
        Meet the Team
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className="bg-primary relative h-80 w-full rounded-xl">
              <div className="absolute h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="mt-2 space-y-1">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
