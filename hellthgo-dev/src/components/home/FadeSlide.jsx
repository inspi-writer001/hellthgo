import med1 from "../../assets/afican.jpg";
import med2 from "../../assets/health.jpg";
import med3 from "../../assets/med3.jpg";
import bg from "../../assets/bg-health.jpg";
import "../../styles/Signup.css";

const FadeSlide = () => {
  const carouselTextOverlay = (
    <>
      <div className="carousel-text-overlay card-img-overlay">
        <h2>
          Revolutionizing &nbsp;
          <span className="text-warning">
            the <br /> global health sector...
          </span>
        </h2>
        <h5 className="text-light">
          We are commited to ensuring that quality <br /> HealthCare reaches
          every person. Whether ...
        </h5>
      </div>
    </>
  );
  return (
    <>
      <div className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div
          className="carousel-inner"
          style={{
            width: "100vw",
            height: "40vh",
            "max-height": "40vh",
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
          {/* <div className="carousel-item card" data-bs-interval="2000">
            <div
              style={{
                "background-image":
                  "linear-gradient(rgb(0,0,0,0.75), rgb(0,0,0,0))",
                width: "100%",
                height: "100%",
                maxHeight: "200px",
              }}
            />
            <img src={med1} className="carousel-img d-block w-100" alt={med2} />
            {carouselTextOverlay}
          </div>
          <div
            className="carousel-item card"
            data-bs-interval="2000"
            style={{ maxHeight: "200px" }}
          >
            <img src={med2} className="carousel-img d-block w-100" alt={bg} />
            {carouselTextOverlay}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FadeSlide;
