import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";
import jubayer_resume from '../../assets/files/jubayer_resume.pdf';


export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-3xl md:text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              Frontend Development
            </h3>

            <p class="text-base font-normal text-gray-400 text-left ml-2 md:ml-5 mb-5">
              Passionate Front-End Developer with a strong focus on creating exceptional user interfaces using
              cutting-edge technologies. Proficient in JavaScript, React,Next.js and experienced in harnessing the power
              of UI frameworks such as Tailwind, Bootstrap, Daisy UI,
              and Material UI. Dedicated to crafting visually stunning and highly responsive web applications.
            </p>

          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              BackEnd Development
            </h3>
            <p class="text-base font-normal text-gray-400 text-left ml-2 md:ml-5 mb-5">
              Comfortable in Node.js, Express.js for creating scalable and efficient back-end solutions. Sound knowledge in database management with MongoDB Atlas and Mongoose. Committed to optimizing server performance and ensuring seamless
              integration between front-end and back-end components.
            </p>

          </li>
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="text-center mb-1 text-lg font-semibold  text-white ">
              Soft Skills
            </h3>

            <p class=" text-base font-normal  text-gray-400 text-left ml-2 md:ml-5 mb-5">
              Hard working | Empathy | Adaptability | Quick learner | Flexibility

            </p>

          </li>


        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-2xl font-bold pb-3 border-2  border-green-400 rounded-md w-[50%] mx-auto">My Skills</div>
          <div className="ml-16 flex flex-col gap-6 mt-6">
            <div className="flex gap-2">
              <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" className="w-[40%] h-[50px]" alt="javascript" />
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="w-[40%] h-[50px]" />
            </div>
            <div className="flex gap-2">
              <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" className="w-[40%] h-[50px]" />
              <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" className="w-[40%] h-[50px]" />
            </div>
            <div className="flex gap-2">
              <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" className="w-[40%] h-[50px]" />
              <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" className="w-[40%] h-[50px]" />
            </div>
            <div className="flex gap-2">
              <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" className="w-[40%] h-[50px]" />
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" className="w-[40%] h-[50px]" />
            </div>
            <div className="flex gap-2">
              <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" className="w-[40%] h-[50px]" />
              <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" className="w-[40%] h-[50px]" />
            </div>
            <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" className="w-[40%] h-[50px]" />
          </div>

          <a
            href={jubayer_resume}
            download={"Jubayer's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
