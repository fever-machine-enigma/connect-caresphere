import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logoLight from "../public/login-register/logoLight.png";
import logoDark from "../public/login-register/logoDark.png";
import hero1 from "../public/hero/hero-1.webp";
import hero2 from "../public/hero/hero-2.webp";
import hero3 from "../public/hero/hero-3.webp";
import hero4 from "../public/hero/hero-4.webp";
import hero5 from "../public/hero/hero-5.webp";
import hero6 from "../public/hero/hero-6.webp";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on("scroll", () => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".about-text", {
    scrollTrigger: {
      trigger: ".about-text",
      start: "-50% top",
      end: "60% 60%",
      scrub: 1,
    },
    x: 500,
    ease: "none",
    duration: 3,
  });

  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, heroImages.length]);

  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const darkMode = prefersDarkMode ? logoLight : logoDark;

  return (
    <main className="text-textLight dark:text-textDark bg-bgLight dark:bg-bgDark scroll-smooth w-screen lg:max-w-5xl">
      <div id="home" className="min-h-screen">
        <header className="p-4 font-Inter flex flex-col md:flex-row">
          <img className="px-4 w-96" src={darkMode} alt="" />
          <ul className="hidden lg:flex text-lg flex-row gap-8 items-center ">
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
            <button
              className="transition ease-in-out delay-50 bg-gradient-to-r from-accentLight to-primaryLight  dark:bg-gradient-to-r dark:from-accentDark dark:to-primaryDark hover:scale-x-110 hover:scale-y-110 hover:bg-gradient-to-r hover:from-primaryDark hover:to-accentDark text-textLight hover:text-textDark  w-32 h-12 mr-10 rounded-3xl"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </ul>
        </header>
        <div id="hero" className="flex flex-row justify-center items-start">
          <div className="h-1/5 flex flex-col gap-5 items-center justify-center w-screen mg:w-1/2">
            <h1 className="font-InterTight font-bold text-6xl">
              <span className="bg-gradient-to-r from-accentDark to-primaryDark text-transparent bg-clip-text">
                CareSphere
              </span>
              : Nurturing Wellness, Connecting Hearts.
            </h1>
            <p className="text-2xl font-Inter">
              Your Portal to Compassionate Healthcare Excellence.
            </p>

            <div className="flex flex-row font-Inter gap-4">
              <button className="transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg p-3  rounded-full">
                Learn More
              </button>
              <button className="transition ease-in-out delay-50 bg-primaryLight dark:bg-primaryDark hover:scale-x-110 hover:scale-y-110 hover:bg-primaryLight text-textLight hover:text-textDark text-lg p-3  rounded-full">
                Our Prices
              </button>
            </div>
          </div>
          <div className="hidden md:block relative w-1/2">
            <div className="">
              {heroImages.map((heroImage, index) => (
                <div
                  key={index}
                  className={`w-[530px] absolute top-0.5 left-36 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    className=" rounded-2xl object-cover"
                    src={heroImage}
                    alt={`Hero Image - ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="min-h-screen max-w-8 flex flex-row">
        <div className="font-InterTight font-bold w-1/6 text-[300px] flex flex-col items-center justify-end mb-64">
          <h1 className="about-text -rotate-90 relative -left-[500px]">
            About
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center font-InterTight text-[2rem] gap-32 px-4">
          <p>
            Welcome to{" "}
            <span className="font-bold bg-gradient-to-r from-accentDark to-primaryDark text-transparent bg-clip-text">
              CareSphere
            </span>{" "}
            – a healthcare technology leader. Our flagship product,{" "}
            <span className="font-bold bg-gradient-to-r from-accentDark to-primaryDark text-transparent bg-clip-text">
              CareSphere
            </span>{" "}
            <span className="font-bold text-transparent bg-clip-text bg-primaryDark">
              | Connect
            </span>{" "}
            , is a game-changer for providers, featuring seamless{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              appointment scheduling
            </span>{" "}
            and{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              prescription management.
            </span>{" "}
          </p>
          <p>
            This cutting-edge portal ensures{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              efficiency
            </span>{" "}
            , letting healthcare professionals prioritize{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              patient care.
            </span>{" "}
            Experience the future with our{" "}
            <span className="font-bold text-transparent bg-clip-text bg-secondaryDark">
              telehealth services
            </span>{" "}
            , breaking down barriers and connecting patients with{" "}
            <span className="font-bold text-transparent bg-clip-text bg-secondaryDark">
              quality healthcare
            </span>
            , anytime, anywhere.
          </p>
          <p>
            At CareSphere, we&apos;re committed to reshaping healthcare tech,
            bridging innovation with{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              patient-centric care
            </span>{" "}
            . Join us on this journey, where technology meets compassion for a
            healthier tomorrow with{" "}
            <span className="font-bold bg-gradient-to-r from-primaryDark to-accentDark text-transparent bg-clip-text">
              CareSphere
            </span>{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              | Connect
            </span>{" "}
            leading the way.
          </p>
        </div>
      </div>
      <div
        id="pricing"
        className="min-h-screen max-w-5/6 flex flex-col justify-center items-center"
      >
        <div>
          <h1 className="text-textDark  font-InterTight font-bold text-[150px] mb-12 ">
            Pricing
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-20">
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CareBasic</h1>
              <p className="font-Inter">For first timers</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark p-4">
              <h1 className="font-Inter text-6xl text-center">$0.00</h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ Trial version</p>
              <p>✔️ Free to use for 7 days</p>
              <p>✔️ Payment after 7 days</p>
            </div>
            <button className="mt-[151px] font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Start
            </button>
          </div>
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CarePlus Alpha</h1>
              <p className="font-Inter">Pay a monthly fee</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark py-8">
              <h1 className="font-Inter text-3xl text-center">
                Call for Prices
              </h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ Appointment Scheduling</p>
              <p>✔️ Prescription Management</p>
              <p>✔️ Doctors/Nurses Information</p>
              <p>✔️ Vaccination Application</p>
              <p>✔️ Medical Profile</p>
            </div>
            <button className="mt-20 font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Buy
            </button>
          </div>
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CarePlus Beta</h1>
              <p className="font-Inter">Pay a yearly fee</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark p-4">
              <h1 className="font-Inter text-3xl text-center py-4">
                Call for Prices
              </h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ CarePlus Alpha Privileges</p>
              <p>✔️ Access to CareSphere feature library</p>
              <p>✔️ Updates about future features</p>
            </div>
            <button className="mt-28 font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Buy
            </button>
          </div>
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CarePro</h1>
              <p className="font-Inter">For your enterprise</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark p-4">
              <h1 className="font-Inter text-3xl text-center py-4">
                Call for Prices
              </h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ CarePlus Beta Privileges</p>
              <p>✔️ Full access to customization</p>
              <p>✔️ Custom organization-based feature implementation</p>
            </div>
            <button className="mt-[132px] font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen p-20 flex flex-col justify-center items-start">
        <div className="">
          <h1 className="font-InterTight font-bold text-[90px] mb-8">
            Want your own CareSphere | Connect?
          </h1>
        </div>
        <div>
          <div className=" font-InterTight flex flex-row text-3xl">
            <span className="text-center w-20 mr-2 flex justify-content items-center">
              I am a
            </span>
            <input
              className="font-bold border-b-2 bg-bgDark w-72 h-16 text-center"
              type="text"
              placeholder="your position"
            />
            <span className="mx-2 flex justify-content items-center">from</span>
            <input
              className="font-bold border-b-2 bg-bgDark w-96 h-16 text-center"
              type="text"
              placeholder="your organization name"
            />
            <span className="mx-2 flex justify-content items-center">, a</span>

            <label htmlFor="Hospital" className="">
              <input
                type="radio"
                name="org"
                id="Hospital"
                className="peer sr-only"
              />
              <p className="flex justify-center items-center font-bold mx-4 transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 peer-checked:scale-x-110 peer-checked:scale-y-110 peer-checked:bg-primaryDark text-textLight peer-checked:text-textDark text-3xl w-[200px] h-16 rounded-full">
                Hospital
              </p>
            </label>
            <label htmlFor="Clinic" className="">
              <input
                type="radio"
                name="org"
                id="Clinic"
                className="peer sr-only"
              />
              <p className="flex justify-center items-center font-bold mx-4 transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 peer-checked:scale-x-110 peer-checked:scale-y-110 peer-checked:bg-primaryDark text-textLight peer-checked:text-textDark text-3xl w-[200px] h-16 rounded-full">
                Clinic
              </p>
            </label>
            <label htmlFor="Public Health Agency" className="">
              <input
                type="radio"
                name="org"
                id="Public Health Agency"
                className="peer sr-only"
              />
              <p className="flex justify-center items-center font-bold mx-4 transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 peer-checked:scale-x-110 peer-checked:scale-y-110 peer-checked:bg-primaryDark text-textLight peer-checked:text-textDark text-3xl w-[320px] h-16 rounded-full">
                Public Health Agency
              </p>
            </label>
          </div>
          <div className="mt-8 flex flex-row font-InterTight text-3xl">
            <span className=" flex justify-content items-center mr-4">
              and I want a quotation on your
            </span>
            <label htmlFor="Alpha" className="">
              <input
                type="radio"
                name="package"
                id="Alpha"
                className="peer sr-only"
              />
              <p className="flex justify-center items-center font-bold mx-4 transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 peer-checked:scale-x-110 peer-checked:scale-y-110 peer-checked:bg-primaryDark text-textLight peer-checked:text-textDark text-3xl w-[300px] h-16 rounded-full">
                CarePlus Alpha
              </p>
            </label>
            <label htmlFor="Beta" className="">
              <input
                type="radio"
                name="package"
                id="Beta"
                className="peer sr-only"
              />
              <p className="flex justify-center items-center font-bold mx-4 transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 peer-checked:scale-x-110 peer-checked:scale-y-110 peer-checked:bg-primaryDark text-textLight peer-checked:text-textDark text-3xl w-[250px] h-16 rounded-full">
                CarePlus Beta
              </p>
            </label>
            <label htmlFor="Pro" className="">
              <input
                type="radio"
                name="package"
                id="Pro"
                className="peer sr-only"
              />
              <p className="flex justify-center items-center font-bold mx-4 transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 peer-checked:scale-x-110 peer-checked:scale-y-110 peer-checked:bg-primaryDark text-textLight peer-checked:text-textDark text-3xl w-[200px] h-16 rounded-full">
                CarePro
              </p>
            </label>
          </div>
          <div className="mt-8 flex flex-row gap-2 font-InterTight text-3xl">
            <span className="flex justify-content items-center">
              Please email me at
            </span>
            <input
              className="font-bold border-b-2 bg-bgDark w-[500px] h-16 text-center"
              type="text"
              placeholder="your email"
            />
            <span className="flex justify-content items-center">.</span>
          </div>
        </div>
      </div>
      <footer>
        <div className="px-4 pb-1 flex flex-row justify-between items-center">
          <p className="font-InterTight text-xl">©️ 2023</p>
          <p className="font-InterTight text-xl">Coded with ❤️ for CSE347</p>
          <p className="font-InterTight text-xl">BACK TO TOP</p>
        </div>
      </footer>
    </main>
  );
};

export default Landing;
