import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";

class Layout extends React.Component {
  componentDidMount = () => {
    const cursor = document.querySelector(".cursor");
    // const audio = new Audio(
    //   // require("../assets/audio/mixkit-fast-double-click-on-mouse-275.mp3")
    // //   <audio controls>
    // //   <source src={fastDoubleClickAudio} type="audio/mp3" />
    // //   Your browser does not support the audio element.
    // // </audio>
    // // src={fastDoubleClickAudio}
    // );

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    window.addEventListener("mousedown", (event) => {
      cursor.style.height = "35px";
      cursor.style.width = "35px";
      // audio.play();
    });

    window.addEventListener("mouseup", (event) => {
      cursor.style.height = "23px";
      cursor.style.width = "23px";
    });

    const options = { duration: 2000 };
    Aos.init(options);
  };
  render() {
    return (
      <React.Fragment>
        <div className="page">
          <div className="flex flex-row overflow-hidden">
            {this.props.children}
          </div>
          <div className="cursor"></div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
