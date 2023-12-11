import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import jubayer_resume from '../../assets/files/jubayer_resume.pdf';

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
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            I'm <span className="text-yellow-600">Jubayer Hossain,</span> a Web
            Developer
          </h3>
          <p
            className="pt-5 text-left text-white "
            data-aos={"fade-left"}
          >
            Aspiring MERN Stack Developer leveraging a dynamic blend of technical proficiency and unyielding passion for crafting innovative web
            solutions. Eager to embark on a transformative journey where I can contribute my skills in MongoDB, Express.js,
            React, and Node.js to drive the development of cutting-edge applications.
          </p>
          <p
            className="pb-7 text-left  text-white"
            data-aos={"fade-right"}
          >
            I have completed my BSc and MSc degree in Computer Science and Engineering at Jatiya Kabi Kazi Nazrul Islam University.
            I am currently looking for jobs.I am poised to bring energy, dedication,
            and a fresh perspective to a dynamic development team. I am {getDate()}{" "} years old.I love exploring new technologies.

          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy">
            <a
              href={jubayer_resume}
              download={"Jubayer's Resume.pdf"}
            >
              Download Resume
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
