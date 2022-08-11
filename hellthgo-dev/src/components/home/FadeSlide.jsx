import med1 from "../../assets/afican.jpg";
import med2 from "../../assets/health.jpg";
import med3 from "../../assets/med3.jpg";
import bg from "../../assets/bg-health.jpg";
import "../../styles/Signup.css";
import "../../styles/Components.css";
// import AnimatedText from "react-animated-text-content";

import { Paper } from "@mui/material";
import { useERC20Transfers } from "react-moralis";

const FadeSlide = () => {
  const carouselTextOverlay = (
    <>
      <div
        style={{
          border: "none",
          padding: "20px",
        }}
      >
        <h2
          className="font-big"
          style={{
            "font-size": "11vw",
            // maxWidth: "900px",
            // background: "-webkit-linear-gradient(#eee, #333)",
            // "-webkit-background-clip": "text",
            // "-webkit-text-fill-color": "transparent",

            background:
              "-webkit-linear-gradient(right, #0CCF95 6%, #E4FF36 78%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Revolutionizing
        </h2>

        <h2>
          <span className="font-medium" style={{ "font-size": "1.25em" }}>
            {/* <AnimatedText
              type="chars"
              interval={0.04}
              duration={0.8}
              animation={{
                y: "10px",
                ease: "ease-out",
                scale: 4.15,
              }}
              className="font-medium"
              style={{ fontsize: "1.25em" }}
            > */}
            the global health sector...
            {/* </AnimatedText> */}
          </span>
        </h2>
        <h5 className="text-light">
          We are commited to ensuring that quality <br /> HealthCare reaches
          every person.
        </h5>
      </div>
    </>
  );
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      <div
        style={{
          // width: "100%",
          height: "calc(width - 10)",
          // "max-height": "40vh",
          "min-height": "20vh",
          alignItems: "center",
          // justifyContent: "space-around",
          display: "flex",
          flexDirection: "column",

          // "backdrop-filter": "blur(17px) saturate(180%)",
          // "-webkit-backdrop-filter": "blur(17px) saturate(180%)",
          // "background-color": " rgba(255, 255, 255, 0.22)",
          // "border-radius": "12px",
          // border: "1px solid rgba(209, 213, 219, 0.3)",

          // "1px solid rgba(209, 213, 219, 0.3)",
        }}
      >
        {/* <div className="img-holder" style={{ marginTop: "50px" }}>
          HG
        </div> */}

        {carouselTextOverlay}
      </div>
    </div>
  );
};

export default FadeSlide;
