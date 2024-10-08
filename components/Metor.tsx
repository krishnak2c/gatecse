import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Balancer } from "react-wrap-balancer";

const Meteors = ({ stars }: { stars: number }) => {
  const meteorsData = [
    { left: -47, delay: 0.477302, duration: 3 },
    { left: -196, delay: 0.721956, duration: 2 },
    { left: -139, delay: 0.635347, duration: 2 },
    { left: -201, delay: 0.790141, duration: 8 },
    { left: 382, delay: 0.57702, duration: 5 },
    { left: -127, delay: 0.74778, duration: 2 },
    { left: 229, delay: 0.309663, duration: 3 },
    { left: 63, delay: 0.356933, duration: 6 },
    { left: 399, delay: 0.574186, duration: 3 },
    { left: 108, delay: 0.591709, duration: 2 },
    { left: 161, delay: 0.457191, duration: 5 },
    { left: -53, delay: 0.741664, duration: 7 },
    { left: -41, delay: 0.6042, duration: 4 },
    { left: 359, delay: 0.370395, duration: 4 },
    { left: 331, delay: 0.402273, duration: 7 },
    { left: -165, delay: 0.594254, duration: 7 },
    { left: 148, delay: 0.563339, duration: 8 },
    { left: 81, delay: 0.271407, duration: 5 },
    { left: 310, delay: 0.736792, duration: 7 },
    { left: -211, delay: 0.396247, duration: 9 },
  ];

  return (
    <div className="border rounded-3xl h-96 w-full relative flex justify-center items-center text-center bg-primary-foreground overflow-hidden">
      {meteorsData.map((meteor, index) => (
        <span
          key={index}
          className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: "-5px",
            left: `${meteor.left}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "1px",
              background: "linear-gradient(90deg, white, black)",
            }}
          ></div>
        </span>
      ))}
      <div className="space-y-6 z-10">
        <p>
          <Balancer className="justify-center text-3xl font-bold tracking-tight sm:text-4xl text-white z-10">
            It&apos;s Open Source!
          </Balancer>
        </p>
        <Button
          className="rounded-full hover:ring-4 ring-white"
          variant="secondary"
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full px-5 py-2 text-sm"
            href="https://github.com/krishnak2c/gatecse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{stars}</span>
            </p>
          </a>
        </Button>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 z-1 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
          fillOpacity="0.7"
        ></circle>
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#0061ff"></stop>
            <stop offset="1" stopColor="#60efff"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Meteors;
