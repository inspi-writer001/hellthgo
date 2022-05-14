import med1 from "../../assets/afican.jpg";
import med2 from "../../assets/health.jpg";
import med3 from "../../assets/med3.jpg";
import bg from "../../assets/bg-health.jpg";
import "../../styles/Signup.css";
import { Paper } from "@mui/material";

const FadeSlide = () => {
  const carouselTextOverlay = (
    <>
      <div style={{ border: "none" }}>
        <h2>
          Revolutionizing &nbsp;
          <span>
            the <br /> global health sector...
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
        className="carousel-inner"
        style={{
          width: "40vw",
          height: "calc(width - 10)",
          // "max-height": "40vh",
          "min-height": "20vh",
          // "border-radius": "20px",
          // "box-shadow": "0px 12px 89px 10px rgba(0,0,0,0.75)",
          // "-webkit-box-shadow": "0px 12px 89px 10px rgba(0,0,0,0.75)",
          // "-moz-box-shadow": "0px 12px 89px 10px rgba(0,0,0,0.75)",
          "backdrop-filter": "blur(8px) saturate(97%)",
          "-webkit-backdrop-filter": "blur(8px) saturate(97%)",
          "background-color": "rgba(17, 25, 40, 0.47)",
          "border-radius": "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          // border: "none",
          // "1px solid rgba(209, 213, 219, 0.3)",
        }}
      >
        <div style={{ border: "none", width: "20vw", height: "30vh" }}>
          {/* <img src={bg} className="carousel-img d-block w-100" alt={med1} /> */}
        </div>
        {carouselTextOverlay}
      </div>
    </div>
  );
};

export default FadeSlide;
