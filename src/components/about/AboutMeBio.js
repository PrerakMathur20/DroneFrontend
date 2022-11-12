import profileImage from "../../images/vks.jpg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import AboutSingle from "./AboutSingle";

const AboutMeBio = ({ picture, details }) => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <>
      <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center">
        Team members
      </p>
      {/* <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={picture} className="rounded-lg w-44" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {details}
      </div> */}
      <div className="block sm:grid sm:gap-10 mt-10 sm:mt-14 grid-cols-3 grid-flow-col mb-16">
        <AboutSingle
          title="Gaurav Tripathi"
          subTitle="Principal Investigator"
        />
        <AboutSingle
          imgSrc={profileImage}
          title="Dr. Vishal Krishna Singh"
          subTitle="Project Director"
        />
        <AboutSingle title="Prerak Mathur" subTitle="Lead" />
      </div>
      <p className="font-general-medium text-lg sm:text-2xl mb-1 text-ternary-dark dark:text-ternary-light text-center m-4 ">
        Core Team
      </p>
      <div className="block sm:grid sm:gap-10 mt-10 sm:mt-14 grid-cols-3  mb-16">
        <AboutSingle title="Gopi Vaibhav" subTitle="Core Team" />
        <AboutSingle title="Manish" subTitle="Core Team" />
        <AboutSingle title="Vatsal" subTitle="Core Team" />
      </div>
      <p className="font-general-medium text-lg sm:text-2xl mb-1 text-ternary-dark dark:text-ternary-light text-center m-4 ">
        Executive Team
      </p>
      <div className="block sm:grid sm:gap-10 mt-10 sm:mt-14 grid-cols-3 mb-16">
        <AboutSingle title="Biswayan Mukharjee" subTitle="Executive Team" />
        <AboutSingle title="Manshi Shreya" subTitle="Executive Team" />
        <AboutSingle title="Shreya Tarwey" subTitle="Executive Team" />
        <AboutSingle title="Tejesh Reddy" subTitle="Executive Team" />
        <AboutSingle title="Tejas Taneja" subTitle="Executive Team" />
      </div>
      <p className="font-general-medium text-lg sm:text-2xl mb-1 text-ternary-dark dark:text-ternary-light text-center ">
        Members
      </p>
      <div className="block sm:grid sm:gap-10 mt-10 sm:mt-14 grid-cols-4 pb-16">
        <AboutSingle title="Aditya Yadav" subTitle="Members" />
        <AboutSingle title="Chakradhar Reddy" subTitle="Members" />
        <AboutSingle title="Gaurav Kabra" subTitle="Members" />
        <AboutSingle title="Karthik S" subTitle="Members" />
        <AboutSingle title="Mahek jain" subTitle="Members" />
        <AboutSingle title="Meet bhanushali" subTitle="Members" />
        <AboutSingle title="Palash Baderia" subTitle="Members" />
        <AboutSingle title="Pranjal Adwani" subTitle="Members" />
        <AboutSingle title="Prince Singh" subTitle="Members" />
        <AboutSingle title="Ribhav khanna" subTitle="Members" />
        <AboutSingle title="Yatharth Jain" subTitle="Members" />
      </div>
    </>
  );
};

export default AboutMeBio;
