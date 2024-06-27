/* eslint-disable react-refresh/only-export-components */
// your root page
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const Layout = () => {
  return (
    <>
      <Hero_Section />
      <Contest_Overview />
      <Intership_Overview />
      <Need_Assistance />
    </>
  );
};

export const Hero_Section = () => {
  return (
    <>
      <header className="max-w-[1440px] h-[70vh] grid place-content-center  m-auto text-center  px-[5%] md:px-[10%] space-y-4">
        <div className="hero-content space-y-4">
          <h3>
            Welcome to <span className="text-sky-600">DevConfig</span>
          </h3>
          <h1 className="text-5xl font-bold max-sm:leading-snug ">
            Contest and <span className="text-sky-600">Internship</span>{" "}
            Program <br /> 2024
          </h1>
          {/* add google form link in button  */}
          <Button variant="flat" size="md" color="primary">
            Participate Now
          </Button>
        </div>
      </header>
    </>
  );
};

export const Contest_Overview = () => {
  return (
    <>
      <section className="max-w-[1920px] m-auto py-16 px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-2xl font-semibold">
          <span className="text-sky-600 underline underline-offset-4">
            Overview
          </span>{" "}
          of the DevConfig Contest
        </h2>
        <p>
          Our contest is specifically designed to challenge and showcase the
          skills of the participants. It is divided into three distinct
          challenges, each focusing on key areas of software development.
          <br />
          The most exciting part of the contest is the reward! The top performer
          in each event will be awarded a cash prize of ₹1000. Plus, they will
          have the opportunity to join our enriching Internship Program.
        </p>

        <Button as={NavLink} to={"Challanges"} variant="bordered">
          Full details
        </Button>
      </section>
    </>
  );
};
export const Intership_Overview = () => {
  return (
    <>
      <section className="max-w-[1920px] m-auto px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-2xl font-semibold">
          Introducing the DevConfig{" "}
          <span className="text-sky-600 underline underline-offset-4">
            Internship
          </span>{" "}
          Program
        </h2>
        <p>
          The DevConfig Internship Program offers a unique opportunity for the
          top 50 performers in the contest. These top talents will be selected
          based on the quality of their project submissions. We will evaluate
          the projects on several criteria including creativity, functionality,
          and technical execution. The selected participants are offered a
          3-month internship program with DevConfig.
        </p>

        <Button as={NavLink} to={"Challanges"} variant="bordered">
          Know more
        </Button>
      </section>
    </>
  );
};
export const Need_Assistance = () => {
  return (
    <>
      <section className="max-w-[1920px] text-center m-auto py-16 px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-2xl font-semibold">
          Need{" "}
          <span className="text-sky-600 underline underline-offset-4">
            Support
          </span>
          ? We&apos;re Here to Help
        </h2>
        <p>
          At DevConfig, we believe in the power of support and guidance.
          We&apos;re committed to ensuring that your experience with us is
          smooth and enriching. If you have any queries or need assistance at
          any step, please contact us
        </p>

        <Button as={NavLink} variant="bordered" startContent={<IoCall />}>
          +91-123456789
        </Button>

        <div className="social_media_links px-[5%] md:px-[10%] text-2xl flex space-x-4 justify-center">
          <a href="">{<BsInstagram />}</a>
          <a href="">{<BsFacebook />}</a>
          <a href="">{<BsTwitter />}</a>
        </div>
      </section>
    </>
  );
};
