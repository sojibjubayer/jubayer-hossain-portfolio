// LottieAnimation.js
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets10.lottiefiles.com/packages/lf20_w98qte06.json", // Your animation path
    });

    return () => animation.destroy(); // Cleanup animation on unmount
  }, []);

  return <div ref={animationContainer} style={{ width: "350px" }} />
};

export default LottieAnimation;
