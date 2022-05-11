import medicine from "../../assets/vr.jpg";
import "../../styles/Signup.css";
// import bg from "../../assets/bg-health.jpg";

const Body = () => {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            "backdrop-filter": "blur(5px) saturate(200%)",
            "-webkit-backdrop-filter": "blur(5px) saturate(200%)",
            "background-color": "rgba(255, 255, 255, 0.45)",
            "border-radius": "12px",
            border: "1px solid rgba(209, 213, 219, 0.3)",
            marginTop: "30vh",

            alignItems: "center",
            "justify-content": "center",
            "border-radius": "10em",
            background: "rgb(245,245,5)",
            background:
              "-moz-linear-gradient(90deg, rgba(245,245,5,0.6727065826330532) 0%, rgba(129,223,85,1) 20%, rgba(0,190,128,1) 50%, rgba(47,72,88,1) 100%)",
            background:
              "-webkit-linear-gradient(90deg, rgba(245,245,5,0.6727065826330532) 0%, rgba(129,223,85,1) 20%, rgba(0,190,128,1) 50%, rgba(47,72,88,1) 100%)",
            background:
              " linear-gradient(90deg, rgba(245,245,5,0.6727065826330532) 0%, rgba(129,223,85,1) 20%, rgba(0,190,128,1) 50%, rgba(47,72,88,1) 100%)",
            filter:
              "progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f505',endColorstr='#2f4858',GradientType=1)",
          }}
        >
          <h3
            className="text-success font-weight-bold"
            style={{ color: "white" }}
          >
            About Us
          </h3>
        </div>
        <div className="ua-image">
          <img
            src={medicine}
            className="img-fluid text-dark"
            alt="fundamentals"
          />
        </div>
        <div className="col-md-4 p-5">
          <div className="h2 pb-2">
            <h2>Our Mission</h2>
          </div>

          <p className="lead">
            At HellthGo, Our mission statement is to ensure that quality
            healthcare reaches everybody with ease and at an affordable price.
            The most beautiful thing about this service is that it is very
            affordable and without stress
          </p>
        </div>
        <div className="col-md-4 p-5">
          <div className="h2 pb-2">
            <h2>Our Vision</h2>
          </div>

          <p className="lead">
            At HellthGo, Our mission statement is to ensure that quality
            healthcare reaches everybody with ease and at an affordable price.
            The most beautiful thing about this service is that it is very
            affordable and without stress
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
