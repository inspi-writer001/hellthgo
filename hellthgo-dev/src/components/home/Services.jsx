import med1 from "../../assets/med1.jpg";
import med2 from "../../assets/med2.jpg";
import crypto from "../../assets/crypto.svg";
import delivery from "../../assets/delivery.svg";

const Services = () => {
  return (
    <div
      id="services"
      className="mt-0 mb-5 services"
      initial={{
        scale: 1,
      }}
      whileInView={{
        scale: 1.1,
      }}
      transition={{
        delay: 0.1,
        duration: 2,
      }}
    >
      <div className="container">
        <div className="h2 text-center pb-3">Our Services</div>
        <div className="row g-4">
          <div className="col-md-4 col-lg-3">
            <div
              className="card"
              whileHover={{
                backgroundColor: "rgba(25, 135, 84, 1)",
                color: "white",
                cursor: "pointer",
              }}
            >
              <div className="card-body text-center">
                <img src={med1} className="img-fluid w-100 mb-3" alt="med1" />
                <h3 className="card-title mt-3 mb-3 text-success">
                  Teletherapy & Telemedicine
                </h3>
                <p className="card-text mt-4 mb-4">
                  Book a virtual session with a doctor on individual or family
                  basis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 white-card-hover">
            <div className="card bg-success white-card-hover">
              <div className="card-body text-center">
                <img src={med2} className="img-fluid w-100 mb-3" alt="med2" />
                <h3 className="card-title mt-3 mb-3 text-warning">
                  Health Education Courses
                </h3>
                <p className="card-text text-light mb-2">
                  Learn on the go about how to improve your health.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img src={crypto} className="img-fluid w-100 mb-3" alt="med3" />
                <h3 className="card-title mt-5 mb-2 text-success">
                  Crypto Wallet
                </h3>
                <p className="card-text mb-2">
                  Make instant transanctions; for health services, transfer and
                  crypto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card bg-success white-card-hover">
              <div className="card-body text-center">
                <img src={delivery} className="img-fluid w-100 mb-3" alt="" />
                <h3 className="card-title mt-5 mb-3 text-warning">
                  Dispatch / Delivery
                </h3>
                <p className="card-text text-light mt-3 mb-3">
                  Swift delivery of every order made without third party
                  compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
