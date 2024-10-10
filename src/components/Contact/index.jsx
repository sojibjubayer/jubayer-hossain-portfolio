
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; 
import CopyrightIcon from "@mui/icons-material/Copyright";

import Lottie from "lottie-react";
import lottieContact from "../../../src/lottie-contact.json";


export default function Contact() {
 

  return (
    <div
      id="contact"
      className="flex text-center flex-col  md:my-10 my-3 min-h-screen ml-4 overflow-hidden"
    >
      <div className="text-3xl  lg:text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 justify-center items-center">

      <div className="w-32 md:w-60">
        <Lottie animationData={lottieContact} />
      </div>

      <div data-aos={"slide-up"} className="text-center md:mt-10">
        <div className="text-center mt-2 text-xl md:text-2xl font-bold">
          Connect With Me
        </div>
        <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
        <div
            onClick={() => {
              const message = "Hello! I would like to connect.";
              const phoneNumber = "+8801927428188"; // Replace with your phone number
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
            }}
          >
            <WhatsAppIcon className="cursor-pointer hover:scale-105" />
          </div>
          <div
            onClick={() => window.open("https://github.com/sojibjubayer", "_blank")}
          >
            <GitHubIcon className="cursor-pointer hover:scale-105" />
          </div>

          <div
            onClick={() => window.open("https://www.linkedin.com/in/jubayer-hossain-sojib", "_blank")}
          >
            <LinkedInIcon className="cursor-pointer hover:scale-105" />
          </div>
          <div
            onClick={() => window.open("https://www.facebook.com/perljsonin", "_blank")}
          >
            <FacebookIcon className="cursor-pointer hover:scale-105" />
          </div>
         
        </div>
      </div>
  
      </div>
     

      <div className="mt-56 italic text-sm font-medium text-blue-500 ">
        <span className="pl-1">Copyright</span>
        <CopyrightIcon className="cursor-pointer mx-1" />
        <span>2024 Jubayer Hossain</span>
      </div>
    </div>
  );
}
