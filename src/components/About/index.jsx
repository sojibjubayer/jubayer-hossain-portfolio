import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import jubayer_resume from '../../assets/files/JUBAYER HOSSAIN.pdf';
import Lottie from "lottie-react";
import lottieGear from '../../../src/lottie-gear.json'
export default function About() {
  const getDate = () => {
    var dob = new Date("12/21/1993");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-teal-700 flex flex-col text-center gap-5 text-white text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        About Me
      </div>
      <div className="flex flex-col md:flex-row   gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto md:w-64 gap-6">
          <h3
            className="text-lg lg:text-xl font-medium px-2"
            data-aos={"fade-left"}
          >
            I'm <span className="text-yellow-300">Jubayer Hossain, </span>a MERN Statck
            Developer.
          </h3>
          <p
            className="py-4 px-2 text-left text-white "
            data-aos={"fade-left"}
          >
            Aspiring MERN Stack Developer leveraging a dynamic blend of technical proficiency and unyielding passion for crafting innovative web
            solutions. Eager to embark on a transformative journey where I can contribute my skills in MongoDB, Express.js,
            React, and Node.js to drive the development of cutting-edge applications.
          </p>
          <p
            className="pb-7  text-left  text-white md:flex hidden"
            data-aos={"fade-right"}
          >
            I have completed my BSc and MSc degree in Computer Science and Engineering at Jatiya Kabi Kazi Nazrul Islam University.
            I am currently looking for jobs.I am poised to bring energy, dedication,
            and a fresh perspective to a dynamic development team. I am {getDate()}{" "} years old.I love exploring new technologies.

          </p>
        </div>

        <div
          class="relative flex-auto md:w-32 w-60  sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >

          <div className="motion-safe:animate-zoomy">
           <Lottie animationData={lottieGear} />
          </div>
          <a
            href={jubayer_resume}
            download={"Jubayer's Resume"}
            class="inline-flex items-center px-6 py-2 md:mt-12 my-4 mx-auto md:w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
