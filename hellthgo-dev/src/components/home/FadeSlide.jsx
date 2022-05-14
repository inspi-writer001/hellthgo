import med1 from "../../assets/afican.jpg";
import med2 from "../../assets/health.jpg";
import med3 from "../../assets/med3.jpg";
import bg from "../../assets/bg-health.jpg";
import "../../styles/Signup.css";
import { Paper } from "@mui/material";

const FadeSlide = () => {
  const carouselTextOverlay = (
    <>
      <Paper>
        <div className="carousel-text-overlay card-img-overlay">
          <h2 className="txt anim-text-flow,">
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
      </Paper>
    </>
  );
  return (
    <div>
      <div
        className="carousel-inner"
        style={{
          width: "100vw",
          height: "70vh",
          // "max-height": "40vh",
          "min-height": "20vh",
        }}
      >
        <div
          className="carousel-item active card"
          data-bs-interval="2000"
          style={{ maxHeight: "200px" }}
        >
          <img src={bg} className="carousel-img d-block w-100" alt={med1} />
          {carouselTextOverlay}
        </div>
      </div>
    </div>
  );
};

export default FadeSlide;
